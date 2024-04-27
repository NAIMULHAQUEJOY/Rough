import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  employer_name: string;

  @Column({ length: 255 })
  company_name: string;

  @Column({ length: 50 })
  contact_no: string;

  @Column({ length: 255 })
  username: string;

  @Column({ length: 255 })
  password: string;
}