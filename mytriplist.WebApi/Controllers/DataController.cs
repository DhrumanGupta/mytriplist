using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mytriplist.WebApi.Data;
using mytriplist.WebApi.Models;
using Newtonsoft.Json;

namespace mytriplist.WebApi.Controllers
{
    [Route("api/[controller]")]
    public class DataController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DataController(ApplicationDbContext context)
        {
            _context = context;
        }
        
        [HttpGet]
        public async Task<IActionResult> GetAsync()
        {
            var count = await _context.TripLists.CountAsync();
            var list = await _context.TripLists
                .Include(x => x.Destinations)
                .ThenInclude(x => x.Days)
                .ThenInclude(x => x.Places)
                .AsSplitQuery()
                .OrderBy(x => x.TimeCreated)
                .Take(Math.Min(10, count))
                .ToListAsync();
            return Ok(list);
        }

        [HttpPost]
        public async Task<IActionResult> PostAsync([FromBody] TripList tripList)
        {
            tripList.Id = new Guid();
            tripList.TimeCreated = DateTime.UtcNow;
            foreach (var t in tripList.Destinations)
            {
                t.Id = new Guid();
                t.Days ??= new List<Day>();
                foreach (var day in t.Days)
                {
                    day.Id = new Guid();
                    day.Places ??= new List<Place>();
                    foreach (var place in day.Places)
                    {
                        place.Id = new Guid();
                    }
                }
            }
            
            if (!IsTripValid(tripList))
            {
                return BadRequest();
            }

            await _context.TripLists.AddAsync(tripList);
            await _context.SaveChangesAsync();
            return Ok(tripList);
        }

        private bool IsTripValid(TripList list)
        {
            var basic = !string.IsNullOrWhiteSpace(list.Title) && !string.IsNullOrWhiteSpace(list.TripType)
                                                               && Regex.IsMatch(list.StartDate, @"^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$")
                                                               && list.Destinations.Count > 0 &&
                                                               !string.IsNullOrWhiteSpace(list.Destinations[0].Name)
                                                               && !string.IsNullOrWhiteSpace(list.Destinations[0]
                                                                   .ResidenceName);
            if (!basic) return false;
            foreach (var t in list.Destinations)
            {
                foreach (var day in t.Days)
                {
                    foreach (var place in day.Places)
                    {
                        if (string.IsNullOrWhiteSpace(place.Time) || !Regex.IsMatch(place.Time, @"^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$")) return false;
                    }
                }
            }

            return true;
        }
    }
}