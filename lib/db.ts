import { PrismaClient } from "@prisma/client";

// If we are in production mode we can simply write this:
// export const db = new PrismaClient();

// But when we are in development mode we can't do this because of hot reload.
// Every time we make new changes the Nextjs reloads the entire application.
// Which makes the above code run multiple times and each time it creates new
// PrismaClient. Due to this we might get an error saying we have too many PrismaClient
// open.
// To avoid this we use global state. The global is not effected by the hot reload.
// So In the below code we are initiallizing the prisma variable.

// When we first run the application the prisma will contain undefined so the
// db will initialize new PrismaClient();
// This will be stored in prisma variable too => globalThis.prisma = db;
// When the hot reload happens, since the prisma already contains a PrismaClient()
// the db variable just be equal to this.

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV != "production") globalThis.prisma = db;
