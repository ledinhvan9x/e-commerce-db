import { BaseEntity } from 'src/common/entities/base.entity';
import { Product } from 'src/modules/products/entities/product.entity';

import { Entity, Column, OneToMany } from 'typeorm';

@Entity('categories')
export class Category extends BaseEntity {
  @Column({ type: 'varchar', length: 100, unique: true }) // same for case not have type varchar
  name: string;

  @Column({ type: 'text' })
  description: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
