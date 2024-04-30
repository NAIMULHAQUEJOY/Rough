import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../entities/cart.entity';

@Injectable()
export class CartsService {
  constructor(
    @InjectRepository(Cart)
    private cartsRepository: Repository<Cart>,
  ) {}

  async create(cart: Cart): Promise<Cart> {
    return this.cartsRepository.save(cart);
  }

  async findAll(): Promise<Cart[]> {
    return this.cartsRepository.find();
  }

  async findOne(id: number): Promise<Cart | undefined> {
    return this.cartsRepository.findOne({ where: { id } });
  }

  async update(id: number, cart: Cart): Promise<Cart> {
    const updatedCart = await this.cartsRepository.preload({
      id: id,
      ...cart,
    });
    return this.cartsRepository.save(updatedCart);
  }

  async remove(id: number): Promise<void> {
    await this.cartsRepository.delete(id);
  }
}