import { EntityRepository, Repository } from 'typeorm';
import { Registration } from '../entities/registration.entity';

@EntityRepository(Registration)
export class RegistrationRepository extends Repository<Registration> {
  async createRegistration(name: string, cv: Buffer): Promise<Registration> {
    const registration = this.create({ name, cv });
    return this.save(registration);
  }
}