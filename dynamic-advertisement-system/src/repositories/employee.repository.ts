import { Repository, EntityManager, FindOneOptions } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDto } from '../dtos/create-employee.dto';
import { UserRepository } from './user.repository';
import { User } from '../entities/user.entity';

export class EmployeeRepository extends Repository<Employee> {
  private userRepository: UserRepository;

  constructor(entityManager: EntityManager) {
    super(Employee, entityManager);
    this.userRepository = new UserRepository(entityManager);
  }

  async createEmployee(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    const { userId, ...employeeData } = createEmployeeDto;
    const findOneOptions: FindOneOptions<User> = { where: { uid: userId } };
    const user = await this.userRepository.findOne(findOneOptions);
    const employee = this.create({ ...employeeData, user });
    return this.save(employee);
  }
}

error in line 12, Expected 2-3 arguments, but got 1.ts(2554)
Repository.d.ts(41, 47): An argument for 'manager' was not provided.
(parameter) entityManager: EntityManager
No quick fixes available