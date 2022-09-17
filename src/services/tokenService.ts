import dotenv from 'dotenv';
import jwt, { JwtPayload } from 'jsonwebtoken';

dotenv.config();
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'secret';

export function signToken( id :number) {
  return {
    token: jwt.sign({ id }, TOKEN_SECRET)
  };
}

export function verifyToken(token: string | undefined): JwtPayload | string {
  if (!token?.replace('Bearer ','')){
    throw {type: 'notAuthorized'}
  }
  return jwt.verify(token, TOKEN_SECRET);
}