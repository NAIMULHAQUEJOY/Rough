import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Registration {
  @PrimaryGeneratedColumn()
  regID: number;

  @Column()
  name: string;

  @Column({ type: 'bytea' })
  cv: Buffer;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}