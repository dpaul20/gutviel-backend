import { Category } from '../../categories/entities/category.entity';
import { Seeder, Factory } from 'typeorm-seeding';

export class CategorySeed implements Seeder {
  async run(factory: Factory): Promise<any> {
    await factory(Category)().createMany(10);
  }
}
