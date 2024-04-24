using Microsoft.EntityFrameworkCore;
using ProductApi.Models; // Ensure this is correct based on where your Product model is located

namespace ProductApi.Data
{
    public class ProductContext : DbContext
    {
        public ProductContext(DbContextOptions<ProductContext> options) : base(options)
        {
        }

        public DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(
                new Product { Id = 1, Name = "Sample Product", Qty = 10, Cost = 5.75m }
            );
        }
    }
}
