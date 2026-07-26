import { BaseEntity } from 'src/common/entities/base.entity';

import { Entity, Column } from 'typeorm';

@Entity('categories')
export class Category extends BaseEntity {
  @Column({ type: 'varchar', length: 100, unique: true }) // same for case not have type varchar
  name: string;

  @Column({ type: 'text' })
  description: string;
}
