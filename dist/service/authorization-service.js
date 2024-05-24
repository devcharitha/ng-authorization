"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationService = void 0;
class AuthorizationService {
    authorizationRepository;
    constructor(authorizationRepository) {
        this.authorizationRepository = authorizationRepository;
    }
    async getUserDetailsByemail(email) {
        return await this.authorizationRepository.getUserDetailsByEmail(email);
    }
}
exports.AuthorizationService = AuthorizationService;
//# sourceMappingURL=authorization-service.js.map