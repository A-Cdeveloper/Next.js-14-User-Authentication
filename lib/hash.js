import crypto from "node:crypto";
//import bcrypt from "bcrypt";

export function hashUserPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");

  const hashedPassword = crypto.scryptSync(password, salt, 64);

  return hashedPassword.toString("hex") + ":" + salt;
}

export function verifyPassword(storedPassword, suppliedPassword) {
  const [hashedPassword, salt] = storedPassword.split(":");
  const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
  const suppliedPasswordBuf = crypto.scryptSync(suppliedPassword, salt, 64);
  return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
}

// export async function hashUserPassword(password) {
//   const hashedPassword = await bcrypt.hash(password, 16);
//   return hashedPassword;
// }

// export async function verifyPassword(storedPassword, suppliedPassword) {
//   return await bcrypt.compare(storedPassword, suppliedPassword);
// }
