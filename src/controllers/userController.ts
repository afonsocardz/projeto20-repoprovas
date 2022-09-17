import { Request, Response } from "express";
import * as userService from '../services/userService';


async function createUser(req:Request,res:Response){
  const user = req.body;
  delete user.confirmPassword;
  await userService.createUser(user);
  res.sendStatus(201);
}

async function login(req:Request,res:Response){
  const login = req.body;
  const token = await userService.login(login);
  res.status(200).send(token);
}

export {createUser, login};