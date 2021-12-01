import { connectToDatabase, db } from "./utilities/database.js";

import newUser from "./models/user.js";

import { hashString } from "./utilities/argon2.js";

const seedAdmin = async (name, email, password) => {
  await db.delete("users", {});
  const hash = await hashString(password);
  return await db.create("users", newUser(name, email, hash));
};

const seed = async () => {
  try {
    await connectToDatabase();
    await seedAdmin("Admin", "admin@simplywood.be", "admin");
    console.log("Admin seeded.");
    console.log("Database seeded.");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

seed();
