import { Brand } from '../../brands/entities/brand.entity';
import { define } from 'typeorm-seeding';
import { faker } from '@faker-js/faker';

define(Brand, () => {
  const brand = new Brand();
  brand.name = faker.helpers.unique(faker.company.name);
  brand.description = faker.lorem.paragraph();
  brand.code = faker.helpers.unique(() => faker.random.alphaNumeric(5));
  brand.slug = faker.helpers.slugify(brand.name);
  brand.image = faker.image.imageUrl();
  brand.isActive = faker.datatype.boolean();

  return brand;
});
