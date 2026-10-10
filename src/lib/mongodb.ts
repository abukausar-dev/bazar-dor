import dns from "node:dns";
import { MongoClient } from "mongodb";

if (process.env.NODE_ENV === "development") {
    dns.setServers(["1.1.1.1", "8.8.8.8"]);
}

const url = process.env.MONGO_DB_URL;
if (!url) {
    throw new Error("MONGO_DB_URL is not defined");
}

const globalForMongo = globalThis as unknown as { mongoClient?: MongoClient };

export const mongoClient = globalForMongo.mongoClient ?? new MongoClient(url);

if (process.env.NODE_ENV !== "production") {
    globalForMongo.mongoClient = mongoClient;
}

export const db = mongoClient.db();