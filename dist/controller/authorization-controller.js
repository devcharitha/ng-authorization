"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const authorization_service_1 = require("../service/authorization-service");
const authorization_repository_1 = require("../repository/authorization-repository");
const request_validator_1 = require("../validators/request-validator");
const request_validator_2 = require("../validators/request-validator");
const authorizarion_response_builder_1 = require("../builders/authorizarion-response-builder");
const userDetailsTableName = 'UserDetails';
const authorizationRepository = new authorization_repository_1.AuthorizationRepository(userDetailsTableName);
const authorizationService = new authorization_service_1.AuthorizationService(authorizationRepository);
const handler = async (event) => {
    try {
        const requestBody = JSON.parse(event.body);
        const { email, password } = requestBody;
        (0, request_validator_1.validateEmail)(email);
        (0, request_validator_1.validatePassword)(password);
        const credentials = await authorizationService.getUserDetailsByemail(email);
        if (!credentials || credentials.email !== email || credentials.password !== password) {
            throw Error('Invalid Credentials');
        }
        const payload = { email: credentials.email, customerId: credentials.customerId, accountNumber: credentials.accountNumber };
        const token = (0, request_validator_2.createJWT)(payload);
        return authorizarion_response_builder_1.authorizationResponseBuilder.success(200, 'Generated token successfully', token);
    }
    catch (error) {
        console.error('Error:', error);
        return authorizarion_response_builder_1.authorizationResponseBuilder.error(401, 'unauthorized');
    }
};
exports.handler = handler;
//# sourceMappingURL=authorization-controller.js.map