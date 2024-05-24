"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationResponseBuilder = void 0;
const authorizationResponseBuilder = {
    success: (statusCode, message, token) => {
        return {
            "jsonapi": {
                "version": "1.0"
            },
            "data": {
                "type": "token",
                "attributes": {
                    "statuscode": statusCode,
                    "token": token,
                    "message": message
                }
            }
        };
    },
    error: (statusCode, message) => {
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
exports.authorizationResponseBuilder = authorizationResponseBuilder;
//# sourceMappingURL=authorizarion-response-builder.js.map