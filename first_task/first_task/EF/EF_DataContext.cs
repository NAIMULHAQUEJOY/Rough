using Microsoft.EntityFrameworkCore;

namespace first_task.EF
{
    public class EF_DataContext : DbContext
    {
        //creating a constructor for this class on which we will initialise the DB context options.
        public EF_DataContext(DbContextOptions<EF_DataContext> options) : base(options) { }
      
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
    }
}
