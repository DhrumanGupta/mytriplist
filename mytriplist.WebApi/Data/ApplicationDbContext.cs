using Microsoft.EntityFrameworkCore;
using mytriplist.WebApi.Models;

namespace mytriplist.WebApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
        }

        public DbSet<TripList> TripLists { get; set; }
    }
}