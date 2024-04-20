using first_task.EF;
using first_task.Model;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace first_task.Controllers
{
   
    [ApiController]
    public class task_1Controller : ControllerBase
    {
        private readonly DbHelper _db;
        public task_1Controller(EF_DataContext eF_DataContext)
        {
            _db = new DbHelper(eF_DataContext);
        }
        // GET: api/<task_1Controller>
        [HttpGet]
        [Route("api/[controller]/GetProducts")]
        public IActionResult Get()
        {
            ResponseType type = ResponseType.Success;
            try
            {
                IEnumerable<ProductModel> data = _db.GetProductModels();

                if (!data.Any())
                {
                    type = ResponseType.NotFound;
                }
                return Ok(ResponseHandler.GetApiReponse(type, data));
            }
            catch (Exception ex) // Capture the exception here as 'ex'
            {
                type = ResponseType.Failure;
                return BadRequest(ResponseHandler.GetExceptionResponse(ex));
            }
        }

        // GET api/<task_1Controller>/5
        [HttpGet]
        [Route("api/[controller]/GetProductsById")]
        public IActionResult Get(int id)
        {
            try
            {
                var data = _db.GetProductById(id); // This should return a ProductModel, not a list.
                if (data == null)
                {
                    return NotFound(ResponseHandler.GetApiReponse(ResponseType.NotFound, null));
                }
                return Ok(ResponseHandler.GetApiReponse(ResponseType.Success, data));
            }
            catch (Exception ex)
            {
                return BadRequest(ResponseHandler.GetExceptionResponse(ex));
            }
        }






        // POST api/<task_1Controller>
        [HttpPost]
        [Route("api/[controller]/SaveOrder")]
        public IActionResult Post([FromBody] OrderModel model)
        {
            ResponseType type = ResponseType.Success;  // Declare the 'type' variable to use it in the response
            try
            {
                _db.SaveOrder(model);
                return Ok(ResponseHandler.GetApiReponse(type, model));  // Ensure this method is defined to accept these parameters
            }
            catch (Exception ex)
            {
                return BadRequest(ResponseHandler.GetExceptionResponse(ex));  // Corrected the typo 'eturn' to 'return'
            }
        }


        // PUT api/<task_1Controller>/5
        [HttpPut("{id}")]
        [Route("api/[controller]/UpdateOrder")]
        public IActionResult Put([FromBody] OrderModel model)
        {
            ResponseType type = ResponseType.Success;  // Declare the 'type' variable to use it in the response
            try
            {
                _db.SaveOrder(model);
                return Ok(ResponseHandler.GetApiReponse(type, model));  // Ensure this method is defined to accept these parameters
            }
            catch (Exception ex)
            {
                return BadRequest(ResponseHandler.GetExceptionResponse(ex));  // Corrected the typo 'eturn' to 'return'
            }
        }

        // DELETE api/<task_1Controller>/5
        [HttpDelete("{id}")]
        [Route("api/[controller]/DeleteOrder/{id}")]
        public IActionResult Delete(int id)
        {
            ResponseType type = ResponseType.Success;  // Declare the 'type' variable to use it in the response
            try
            {
                _db.DeleteOrder(id);
                return Ok(ResponseHandler.GetApiReponse(type, id));  // Ensure this method is defined to accept these parameters
            }
            catch (Exception ex)
            {
                return BadRequest(ResponseHandler.GetExceptionResponse(ex));  // Corrected the typo 'eturn' to 'return'
            }
        }
    }
}
