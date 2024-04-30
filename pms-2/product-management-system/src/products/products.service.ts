import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  async create(product: Product): Promise<Product> {
    return this.productsRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number): Promise<Product | undefined> {
    return this.productsRepository.findOne({ where: { id } });
  }

  async update(id: number, product: Product): Promise<Product> {
    const updatedProduct = await this.productsRepository.preload({
      id: id,
      ...product,
    });
    return this.productsRepository.save(updatedProduct);
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}