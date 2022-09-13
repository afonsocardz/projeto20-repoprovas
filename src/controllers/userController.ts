import { Request, Response } from "express";


async function createUser(req:Request,res:Response){
  const user = req.body;
  res.sendStatus(201);
}

async function login(req:Request,res:Response){
  const userId: number = res.locals.userId;
  const login = req.body;
  res.sendStatus(200);
}

export {createUser, login};