import { EntityRepository, Repository } from 'typeorm';
import { Recovery } from '../entities/recovery.entity';

@EntityRepository(Recovery)
export class RecoveryRepository extends Repository<Recovery> {
  async createRecovery(email: string): Promise<Recovery> {
    const recovery = this.create({ email });
    return this.save(recovery);
  }
}