using Microsoft.EntityFrameworkCore;
using ProductApi.Data;
using ProductApi.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

public class ProductService : IProductService
{
    private readonly ProductContext _context;

    public ProductService(ProductContext context)
    {
        _context = context;
    }

    public async Task<IEnumerable<Product>> GetProductsAsync()
    {
        // Directly use FromSqlRaw on DbSet<Product>
        var productsQuery = _context.Products.FromSqlRaw("SELECT * FROM get_products()");
        return await productsQuery.AsNoTracking().ToListAsync();
    }

    public async Task<Product> GetProductByIdAsync(int id)
    {
        // Parameterized queries to safeguard against SQL injection
        var productQuery = _context.Products.FromSqlRaw("SELECT * FROM get_products() WHERE \"Id\" = {0}", id);
        return await productQuery.AsNoTracking().FirstOrDefaultAsync();
    }

    public async Task<Product> CreateProductAsync(Product product)
    {
        // Execute stored procedure and then reload the product
        await _context.Database.ExecuteSqlRawAsync("CALL insert_product({0}, {1}, {2})", product.Name, product.Qty, product.Cost);
        await _context.Entry(product).ReloadAsync();
        return product;
    }

    public async Task UpdateProductAsync(int id, Product product)
    {
        // Execute stored procedure to update the product
        await _context.Database.ExecuteSqlRawAsync("CALL update_product({0}, {1}, {2}, {3})", id, product.Name, product.Qty, product.Cost);
    }

    public async Task DeleteProductAsync(int id)
    {
        // Execute stored procedure to delete the product
        await _context.Database.ExecuteSqlRawAsync("CALL delete_product({0})", id);
    }
}
