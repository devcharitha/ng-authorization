"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationRepository = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
class AuthorizationRepository {
    client;
    docClint;
    // private tableName: string;
    constructor(tableName) {
        this.client = new client_dynamodb_1.DynamoDBClient({ region: "us-east-1" });
        this.docClint = lib_dynamodb_1.DynamoDBDocumentClient.from(this.client);
        // this.tableName = tableName;
    }
    async getUserDetailsByEmail(email) {
        const command = new lib_dynamodb_1.GetCommand({
            TableName: "ng_authorization",
            Key: {
                email: email
            }
        });
        const response = await this.docClint.send(command);
        console.log(response);
        return response;
    }
}
exports.AuthorizationRepository = AuthorizationRepository;
//# sourceMappingURL=authorization-repository.js.map