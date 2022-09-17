import {faker} from '@faker-js/faker';

export async function userFactory(){
  return {
    email: faker.internet.email(),
    password: faker.internet.password()
  }
}