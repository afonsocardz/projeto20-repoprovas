import request from 'supertest';
import app from '../src/app';
import prisma from '../src/config/database';
import { userFactory } from './factories/userFactory';

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE users`;
})

beforeAll(() => {
  prisma.$disconnect;
})

describe('user tests suite', () => {
  it('creates a user', async () => {
    const user = await userFactory();
    const res = await request(app).post('/signup').send(user);
    expect(res.status).toBe(201);
  })
  
  it('validate error 409 when user already exists', async () => {
    const user = await userFactory();
    await request(app).post('/signup').send(user);
    const res = await request(app).post('/signup').send(user);
    expect(res.status).toBe(409);
  })
});