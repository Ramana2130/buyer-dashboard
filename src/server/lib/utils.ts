import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../constants.js";
import { NextFunction, Request, Response } from "express";
import { UserType } from "../models/User.js";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(401).send({ error: true, message: "Token not recieved" });
  }

  // @ts-ignore
  jwt.verify(token, JWT_SECRET, (err, user: UserType) => {
    if (err) {
      return res.status(403).send({ error: true, message: "Invalid token" });
    }

    req.user_id = user._id;
    next();
  });
}
