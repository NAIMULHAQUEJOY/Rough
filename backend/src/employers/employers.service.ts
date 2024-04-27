import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employer } from './employer.entity';

@Injectable()
export class EmployerService {
  constructor(
    @InjectRepository(Employer)
    private employerRepository: Repository<Employer>,
  ) {}

  async createEmployer(employer: Employer): Promise<Employer> {
    return this.employerRepository.save(employer);
  }

  async findAll(): Promise<Employer[]> {
    return this.employerRepository.find();
  }

  async findOne(id: number): Promise<Employer | undefined> {
    return this.employerRepository.findOne({ where: { id } });
  }

  async updateEmployer(id: number, employer: Employer): Promise<Employer> {
    const updatedEmployer = await this.employerRepository.preload({
      id: id,
      ...employer,
    });
    return this.employerRepository.save(updatedEmployer);
  }

  async deleteEmployer(id: number): Promise<void> {
    await this.employerRepository.delete(id);
  }
}