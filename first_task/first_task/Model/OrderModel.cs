using first_task.EF;

namespace first_task.Model
{
    public class OrderModel
    {
        //for communicating HTTP request
        public int oId { get; set; }
        public int productId { get; set; }
        public string name { get; set; } = string.Empty;
        public string address { get; set; } = string.Empty;
        public string phone { get; set; } = string.Empty;
    }
}
