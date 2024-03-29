// Import Third Party Packages
import { compare, hash } from "bcryptjs";

export async function hashPassword(password) {
  const hashedPassword = await hash(password, 12);

  return hashedPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isEqual = compare(password, hashedPassword);

  return isEqual;
}
