import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Game {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  plataform: string;

  @Column()
  media: string;

  @Column({ type: 'boolean', default: false })
  have: boolean;

  @Column({ type: 'boolean' })
  playing: boolean;

  @Column({ type: 'boolean', default: false })
  done: boolean;

  @Column({ type: 'boolean', default: false })
  want: boolean;
}
