import { MongoClient } from "mongodb";

export async function connectMongoDB() {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@cluster0.llduo.mongodb.net/${process.env.mongodb_dbname}?retryWrites=true&w=majority`
  );

  return client;
}

export async function createNewUser(db, collection, userData) {
  const result = await db.collection(collection).insertOne(userData);

  return result;
}

export async function checkExistingUser(db, email) {
  const existingUser = await db.collection("users").findOne({
    email: email,
  });

  return existingUser;
}
