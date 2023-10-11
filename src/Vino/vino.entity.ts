import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class Vino {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column('simple-array')
  uva: string[];

  @Column('decimal', { precision: 10, scale: 2 })
  precio: number;

  @Column('simple-array')
  imagenes: string[];

  @BeforeInsert()
  @BeforeUpdate()
  formatPrecio() {
    this.precio = parseFloat(this.precio.toFixed(2));
  }
}
