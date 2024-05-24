import { AuthorizationService } from "../service/authorization-service";
import { AuthorizationRepository } from "../repository/authorization-repository";
import { validateEmail,validatePassword  } from "../validators/request-validator"
import { UserDetails } from "../model/userDetails";
import { createJWT } from "../validators/request-validator";
import { authorizationResponseBuilder } from "../builders/authorizarion-response-builder";

const userDetailsTableName = 'UserDetails';
const authorizationRepository = new AuthorizationRepository(userDetailsTableName);
const authorizationService = new AuthorizationService(authorizationRepository);

export const handler = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);
        const { email, password } = requestBody;
        validateEmail(email);
        validatePassword(password);
        const credentials: UserDetails = await authorizationService.getUserDetailsByemail(email);

        if(!credentials || credentials.email !==email || credentials.password !== password){
            throw Error('Invalid Credentials');
        }
        const payload ={email:credentials.email,customerId:credentials.customerId, accountNumber:credentials.accountNumber}
        const token = createJWT(payload);
        return authorizationResponseBuilder.success(200, 'Generated token successfully', token);
    }catch(error){
        console.error('Error:', error);
        return authorizationResponseBuilder.error( 401,'unauthorized');
    }
};
