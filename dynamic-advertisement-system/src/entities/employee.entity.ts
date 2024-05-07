import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  empId: number;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.uid)
  user: User;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  sal: number;

  @Column()
  role: string;

  @Column({ default: false })
  block: boolean;
}