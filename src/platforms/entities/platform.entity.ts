import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Platform {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
