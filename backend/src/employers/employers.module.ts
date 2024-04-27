import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employer } from './employer.entity';
import { EmployerService } from './employers.service';
import { EmployerController } from './employers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employer])],
  providers: [EmployerService],
  controllers: [EmployerController],
})
export class EmployerModule {}