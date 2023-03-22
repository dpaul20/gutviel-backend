import { Brand } from '../../brands/entities/brand.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export class BrandSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Brand)().createMany(10);
  }
}
