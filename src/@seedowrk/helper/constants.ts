import fs from 'fs';

export const PASETO_PRIVATE_KEY = fs.readFileSync("private_key.pem", { encoding: "utf8" })
export const PASETO_EXPIRE_TIME = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // Expires in 24 hours