import "dotenv/config";

export const MONGO_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}`;

export const DATABASE : string = process.env.MONGO_DATABASE;