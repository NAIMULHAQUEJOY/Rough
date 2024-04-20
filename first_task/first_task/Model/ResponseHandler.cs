namespace first_task.Model
{

    //this will handle all the responses, there are two methods, one for handle the exception and one for valid responses
    public class ResponseHandler
    {
        //exception
        public static ApiResponse GetExceptionResponse(Exception ex)
        {
            ApiResponse response = new ApiResponse();
            response.Code = "1";
            response.Message = ex.Message;
            return response;

        }
        //valid responses
        public static ApiResponse GetApiReponse(ResponseType type, object? contract)
        {
            ApiResponse response;
            response = new ApiResponse { ResponseData = contract };
            switch (type)
            {
                case ResponseType.Success:
                    response.Code = "0";
                    response.Message = "Success";
                    break;
                 case 
                 ResponseType.NotFound:
                    response.Code = "2";
                    response.Message = "No Record Available";
                    break;
            }
            return response;

        }
    }
}
