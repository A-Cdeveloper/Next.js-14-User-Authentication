import db from "./db";

export const createUser = (email, password) => {
  const result = db
    .prepare("INSERT INTO users (email, password) VALUES (?,?)")
    .run(email, password);

  return result.lastInsertRowid;
};

export const getUserByEmail = (email) => {
  const result = db.prepare("SELECT * FROM users WHERE email = ?").get(email);
  return result;
};
