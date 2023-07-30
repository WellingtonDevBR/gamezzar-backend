import { Request, Response, NextFunction } from "express";
import paseto from "paseto";
import { createPrivateKey } from "crypto";
import { PASETO_PRIVATE_KEY } from "../../../@seedowrk/helper/constants";
require("dotenv").config();

const { V4 } = paseto;

// Convert PEM to KeyObject
const privateKey = createPrivateKey({
  key: PASETO_PRIVATE_KEY,
  format: "pem",
  type: "pkcs8",
});

export const authenticate = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authHeader = request.headers.authorization;

  if (!authHeader)
    return response.status(401).json({ message: "Token not found" });
  const token = authHeader.split(" ")[1]; // Extract token from 'Bearer tokenString'
  try {
    const payload = await V4.verify(token, privateKey); // Decoding token with private key
    request.body.email = payload.email; // Assuming user info is in payload
    request.body.userId = payload.userId;
    return next();
  } catch (error) {
    return response.status(401).json({ message: "Invalid token" });
  }
};
