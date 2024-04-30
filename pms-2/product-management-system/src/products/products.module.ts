import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Product } from '../entities/product.entity';  // Make sure the path is correct

@Module({
  imports: [TypeOrmModule.forFeature([Product])],  // Register the Product repository
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
