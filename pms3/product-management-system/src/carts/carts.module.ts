import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartsService } from './carts.service';
import { CartsController } from './carts.controller';
import { Cart } from '../entities/cart.entity';  // Make sure the path is correct

@Module({
  imports: [TypeOrmModule.forFeature([Cart])],  // Register the Cart repository
  providers: [CartsService],
  controllers: [CartsController]
})
export class CartsModule {}
