import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { CartsModule } from './carts/carts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_username',
      password: 'your_password',
      database: 'product_management_system',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
    CartsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}