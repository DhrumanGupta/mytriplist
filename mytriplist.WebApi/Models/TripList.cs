using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace mytriplist.WebApi.Models
{
    public class TripList
    {
        [Key]
        public Guid Id { get; set; }

        public string Title { get; set; }

        [RegularExpression(@"^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$")]
        public string StartDate { get; set; }

        public string TripType { get; set; }

        [JsonIgnore]
        public DateTime TimeCreated { get; set; }

        public IList<Destination> Destinations { get; set; }
    }

    public class Destination
    {
        [JsonIgnore]
        [Key] public Guid Id { get; set; }
        public string Name { get; set; }
        public string ResidenceName { get; set; }
        public int ResidenceCost { get; set; }
        public IList<Day> Days { get; set; }
    }

    public class Day
    {
        [JsonIgnore]
        [Key] public Guid Id { get; set; }
        public IList<Place> Places { get; set; }
    }

    public class Place
    {
        [JsonIgnore]
        [Key] public Guid Id { get; set; }
        public string Name { get; set; }
        public string Time { get; set; }
    }
}