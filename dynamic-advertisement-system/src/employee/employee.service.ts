import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeeRepository } from '../repositories/employee.repository';
import { UserRepository } from '../repositories/user.repository';
import { RegistrationRepository } from '../repositories/registration.repository';
import { CreateEmployeeDto } from '../dtos/create-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeRepository)
    private employeeRepository: EmployeeRepository,
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    @InjectRepository(RegistrationRepository)
    private registrationRepository: RegistrationRepository,
  ) {}

  async addEmployee(createEmployeeDto: CreateEmployeeDto): Promise<any> {
    const employee = await this.employeeRepository.createEmployee(createEmployeeDto);
    return { message: 'Employee added successfully', employee };
  }

  async registerEmployee(name: string, cv: Buffer): Promise<any> {
    const registration = await this.registrationRepository.createRegistration(name, cv);
    return { message: 'Employee registered successfully', registration };
  }
}