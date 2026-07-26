import { BaseEntity } from 'src/common/entities/base.entity';
import { Seller } from 'src/modules/sellers/entities/seller.entity';
import { Entity, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Category } from 'src/modules/categories/entities/category.entity';
import { ProductImage } from 'src/modules/product-images/entities/product-image.entity';

export enum StatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DRAFT = 'draft',
}

@Entity('products')
export class Product extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: string; // default numeric return to string , need to Number(price) when calculate later

  @Column({ type: 'enum', enum: StatusEnum, default: StatusEnum.DRAFT })
  status: StatusEnum;

  @Column({ type: 'text' })
  description: string;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => Seller, (seller) => seller.products) // the 2nd part is for reverse side (seller) => seller.products
  @JoinColumn({ name: 'seller_id' })
  seller: Seller;

  @OneToMany(() => ProductImage, (pi) => pi.product)
  productImages: ProductImage[];
}
