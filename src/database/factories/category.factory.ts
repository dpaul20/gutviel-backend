import { faker } from '@faker-js/faker';
import { Category } from '../../categories/entities/category.entity';
import { define } from 'typeorm-seeding';

define(Category, () => {
  const category = new Category();
  category.name = faker.helpers.unique(faker.commerce.department);
  category.description = faker.lorem.paragraph();
  category.image = faker.image.imageUrl();
  category.isActive = faker.datatype.boolean();

  return category;
});
