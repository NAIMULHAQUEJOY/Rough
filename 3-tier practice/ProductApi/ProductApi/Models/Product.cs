namespace ProductApi.Models
{
    public class Product
    {
        public int Id { get; set; }  // Corresponds to "id" in the PostgreSQL table
        public string Name { get; set; }  // Corresponds to "name"
        public int Qty { get; set; }  // Corresponds to "qty"
        public decimal Cost { get; set; }  // Corresponds to "cost"
    }
}
