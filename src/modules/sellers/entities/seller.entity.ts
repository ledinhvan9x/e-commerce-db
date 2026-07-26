import { BaseEntity } from 'src/common/entities/base.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';

@Entity('sellers')
export class Seller extends BaseEntity {
  @Column({ name: 'store_name', type: 'varchar', length: 100 })
  storeName: string;

  @Column({ name: 'store_address', type: 'varchar', length: 100 })
  storeAddress: string;

  @Column({ name: 'store_phone', type: 'varchar', length: 20, unique: true })
  storePhone: string;

  @Column({ type: 'text' })
  description: string;

  @OneToOne(() => User, (user) => user.seller)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
