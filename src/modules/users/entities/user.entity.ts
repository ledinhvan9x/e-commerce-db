import { BaseEntity } from 'src/common/entities/base.entity';
import { Seller } from 'src/modules/sellers/entities/seller.entity';
import { Entity, Column, OneToOne } from 'typeorm';

export enum UserRole {
  ADMIN = 'admin',
  CUSTOMER = 'customer',
  SELLER = 'seller',
}

@Entity('users') // custom name for the table
export class User extends BaseEntity {
  @Column({ type: 'varchar', length: 100 }) // varchar of pg
  name: string; // string for nestjs

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  phone: string;

  @Column({ name: 'password_hash', type: 'varchar', length: 255 })
  passwordHash: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.CUSTOMER })
  role: UserRole;

  @OneToOne(() => Seller, (seller) => seller.user)
  seller: Seller;
}
