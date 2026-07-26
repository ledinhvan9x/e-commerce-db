import { BaseEntity } from 'src/common/entities/base.entity';
import { Product } from 'src/modules/products/entities/product.entity';
import { Entity, Column, JoinColumn, ManyToOne, Unique } from 'typeorm';

@Entity('product_images')
@Unique(['product', 'url'])
export class ProductImage extends BaseEntity {
  @Column({ length: 500 })
  url: string;

  @ManyToOne(() => Product, (product) => product.productImages)
  @JoinColumn({ name: 'product_id' })
  product: Product;
}
