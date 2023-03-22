import { define } from 'typeorm-seeding';
import { Product } from '../../products/entities/product.entity';
import { faker } from '@faker-js/faker';

define(Product, () => {
  const product = new Product();
  product.code = faker.helpers.unique(() => faker.random.alphaNumeric(5));
  product.name = faker.commerce.productName();
  product.minimumSale = faker.datatype.number({ min: 1, max: 10 });
  product.stock = faker.datatype.number({ min: 1, max: 100 });
  product.description = faker.commerce.productAdjective();
  product.longDescription = faker.commerce.productDescription();
  product.price = faker.commerce.price();
  product.image = faker.image.imageUrl();
  product.isActive = faker.datatype.boolean();
  product.brandId = faker.datatype.number({ min: 1, max: 10 });
  product.categoryId = faker.datatype.number({ min: 1, max: 10 });

  return product;
});
