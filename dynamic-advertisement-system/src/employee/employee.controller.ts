import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from '../dtos/create-employee.dto';

@Controller('employee')
export class EmployeeController {
  constructor(private employeeService: EmployeeService) {}

  @Post('add')
  async addEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.addEmployee(createEmployeeDto);
  }

  @Post('register')
  async registerEmployee(@Body() body: { name: string; cv: Buffer }) {
    return this.employeeService.registerEmployee(body.name, body.cv);
  }
}