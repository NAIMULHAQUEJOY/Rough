using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using ProductApi.Data; // Assuming your DbContext is in the Data namespace

var builder = WebApplication.CreateBuilder(args);

// Retrieve configuration from builder
var configuration = builder.Configuration;

// Add services to the container.
builder.Services.AddControllers();

// Configure DbContext
// Choose the appropriate database provider
builder.Services.AddDbContext<ProductContext>(options =>
    options.UseNpgsql(configuration.GetConnectionString("ProductConnection"))); // For PostgreSQL
                                                                                // Use the following line instead if using SQL Server
                                                                                // options.UseSqlServer(configuration.GetConnectionString("DefaultConnection")));

// Dependency Injection for ProductService
builder.Services.AddScoped<IProductService, ProductService>();

// Add Swagger generation
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
