import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { Employer } from './employer.entity';
  import { EmployerService } from './employers.service';
  
  @Controller('employers')
  export class EmployerController {
    constructor(private employerService: EmployerService) {}
  
    @Post()
    async createEmployer(@Body() employer: Employer): Promise<Employer> {
      return this.employerService.createEmployer(employer);
    }
  
    @Get()
    async findAll(): Promise<Employer[]> {
      return this.employerService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Employer> {
      return this.employerService.findOne(id);
    }
  
    @Put(':id')
async updateEmployer(
  @Param('id') id: number,
  @Body() employer: Employer,
): Promise<Employer> {
  return this.employerService.updateEmployer(id, employer);
}
  
    @Delete(':id')
    async deleteEmployer(@Param('id') id: number): Promise<void> {
      return this.employerService.deleteEmployer(id);
    }
  }
  export class employers{}