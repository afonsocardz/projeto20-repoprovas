import bcrypt from 'bcrypt';
import {signToken} from '../services/tokenService';
import { TUserData } from "../types/userTypes";
import * as userRepository from '../repositories/userRepositories'
import { User } from "@prisma/client";
import { conflictError, unauthorizedError } from '../utils/errorUtils';

export async function login(login:TUserData){
  const user = await userRepository.getUserByEmail(login);
  if(!user){
    throw unauthorizedError();
  }
  validatePassword(login.password, user);
  return signToken(user.id)
}

function validatePassword(password:string, user: User){
  const isValid = bcrypt.compareSync(password, user.password);
  if(!isValid){
    throw unauthorizedError();
  }
}

export async function createUser(user:TUserData){
  await isUserExists(user);
  encryptPassword(user);
  await userRepository.createUser(user);
}

function encryptPassword(user: TUserData){
  const HASH_SALTS = 10;
  user.password = bcrypt.hashSync(user.password, HASH_SALTS);
}

async function isUserExists(userData: TUserData){
  const user = await userRepository.getUserByEmail(userData);
  if(user){
    throw conflictError('email is already been used by another user');
  }
}