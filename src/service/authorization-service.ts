import { AuthorizationRepository } from "../repository/authorization-repository";
import { UserDetails } from "../model/userDetails";

export class AuthorizationService {
  private authorizationRepository: AuthorizationRepository;

  constructor(authorizationRepository: AuthorizationRepository) {
    this.authorizationRepository = authorizationRepository;
  }

  async getUserDetailsByemail(email: string): Promise<UserDetails> {
    return await this.authorizationRepository.getUserDetailsByEmail(email);
  }
}