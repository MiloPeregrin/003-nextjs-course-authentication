import { MongoClient } from "mongodb";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://Milo:GcczTZWrehL2KbVA@cluster1.rhs53.mongodb.net/authentication?retryWrites=true&w=majority"
  );

  return client;
}
