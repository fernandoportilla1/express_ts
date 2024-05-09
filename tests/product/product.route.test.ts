import request from 'supertest';

import { prisma } from '../../src/config/db';

import app from '../../src/app';

// import {} from '../../src/modules/product/product.service';

afterAll(async () => {
  await prisma.$disconnect();
});

const newProduct = {
  code: 'product test',
  description: 'description test',
  quantity: 30,
  price: 10,
  tax: 15,
  isActive: true,
};

describe('ProductService', () => {
  test('a product is added successfully', async () => {
    const response = await request(app)
      .post('/api/products')
      .send(newProduct)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body.id).toBeDefined();
  });

  test('correct list of products returned', async () => {
    const response = await request(app).get('/api/products');

    expect(response.statusCode).toBe(200);
    expect(response.headers['content-type']).toContain('json');
    expect(response.body).toBeDefined();
  });
});
