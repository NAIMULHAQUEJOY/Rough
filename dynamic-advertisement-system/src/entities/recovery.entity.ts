import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recovery {
  @PrimaryGeneratedColumn()
  rid: number;

  @Column()
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}