import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

let auth;

export function getAuth() {
  if (auth) {
    return auth;
  }

  const databaseUrl = process.env.DB_URL;
  if (!databaseUrl) {
    throw new Error("DB_URL must be configured to use authentication.");
  }

  const client = new MongoClient(databaseUrl);
  const db = client.db("my-bazar");
  const socialProviders = {};

  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    socialProviders.google = {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    };
  }

  if (process.env.GITHUB_CLIENT_ID && process.env.GITHUB_CLIENT_SECRET) {
    socialProviders.github = {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    };
  }

  auth = betterAuth({
    emailAndPassword: {
      enabled: true,
    },
    socialProviders,
    database: mongodbAdapter(db, {
      client,
    }),
  });

  return auth;
}