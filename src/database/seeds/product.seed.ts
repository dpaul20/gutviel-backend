import { Product } from '../../products/entities/product.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export class ProductSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Product)().createMany(10);
  }
}
