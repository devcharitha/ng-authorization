const authorizationResponseBuilder = {
  success: (statusCode: number, message: string, token: string) => {
    return {
      "jsonapi": {
        "version": "1.0"
      },
      "data": {
        "type": "token",
        "attributes": {
        "statuscode":statusCode,
          "token": token,
          "message": message
        }
      }
    };
  },
  error: (statusCode: number,message: string) => {
    return {
      "jsonapi": {
        "version": "1.0"
      },
      "errors": [
        {
          "title": "Error",
          "statuscode": statusCode,
          "message": message
        }
      ]
    };
  }
};

export { authorizationResponseBuilder };