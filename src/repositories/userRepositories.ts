import { User } from '@prisma/client';
import prisma from '../config/database';
import { TUserData } from '../types/userTypes';

export async function createUser(user:TUserData){
  await prisma.user.create({data: user});
}

export async function getUserByEmail(login: TUserData){
  const users: User[] = await prisma.user.findMany({where: {email: login.email}})
  return users[0];
}