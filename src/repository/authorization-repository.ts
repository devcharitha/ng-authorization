import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { UserDetails } from "../model/userDetails";

export class AuthorizationRepository {
    private client: DynamoDBClient;
    private docClint: DynamoDBDocumentClient;
    // private tableName: string;

    constructor(tableName: string) {
        this.client = new DynamoDBClient({ region: "us-east-1" });
        this.docClint = DynamoDBDocumentClient.from(this.client);
        // this.tableName = tableName;
    }

    async getUserDetailsByEmail(email: string): Promise<UserDetails> {
        const command = new GetCommand({
            TableName:"ng_authorization",
            Key: {
                email:email
            }
        });

        const response: any = await this.docClint.send(command);
        console.log(response);
        return response;
    }
}