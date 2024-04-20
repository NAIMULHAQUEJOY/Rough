using first_task.EF;

namespace first_task.Model
{
    public class DbHelper
    {
        private EF_DataContext _context;
        public DbHelper(EF_DataContext context)
        {
            _context = context;
        }
        //GET
        public List<ProductModel> GetProductModels()
        {
            List<ProductModel> response = new List<ProductModel>();
            var dataList = _context.Products.ToList();
            dataList.ForEach(row => response.Add(new ProductModel()
            {
                brand = row.brand,
                id = row.id,
                name=row.name,
                price=row.price,
                size=row.size

            }));
            return response;
        }

        public ProductModel GetProductById(int id)
        {
            var row = _context.Products.FirstOrDefault(d => d.id == id);
            if (row != null)
            {
                return new ProductModel()
                {
                    brand = row.brand,
                    id = row.id,
                    name = row.name,
                    price = row.price,
                    size = row.size
                };
            }
            return null; // Return null if no product is found
        }



        //it serves the post/put/patch
        public void SaveOrder(OrderModel orderModel)
        {
         
            Order dbTable = new Order();
            if(orderModel.oId >0)
            {
                //put
                dbTable = _context.Orders.Where(d => d.oId.Equals(orderModel.oId)).FirstOrDefault();
                if(dbTable != null)
                {
                    dbTable.phone = orderModel.phone;
                    dbTable.address = orderModel.address;
                }
                else
                {
                    dbTable.phone = orderModel.phone;
                    dbTable.address = orderModel.address;
                    dbTable.name = orderModel.name;
                    dbTable.Product = _context.Products.Where(f => f.id.Equals(orderModel.productId)).FirstOrDefault();
                    _context.Orders.Add(dbTable);

                }
                _context.SaveChanges();
            }
        }
        //DELETE
        public void DeleteOrder(int oId)
        {
         
            var order = _context.Orders.Where(d => d.oId.Equals(oId)).FirstOrDefault();
            if(order != null)
            {
                _context.Orders.Remove(order);
                _context.SaveChanges();

            }
        }
    }
}
