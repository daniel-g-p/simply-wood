import { connectToDatabase, db } from "./utilities/database.js";

import newUser from "./models/user.js";
import newCategory from "./models/category.js";

import cloudinary from "./utilities/cloudinary.js";
import { hashString } from "./utilities/argon2.js";

const seedAdmin = async (name, email, password) => {
  await db.delete("users", {});
  const hash = await hashString(password);
  return await db.create("users", newUser(name, email, hash));
};

const seedCategories = async (categoryNames) => {
  await db.delete("categories", {});
  for (let categoryName of categoryNames) {
    const category = newCategory(categoryName);
    await db.create("categories", category);
  }
};

const seedImages = async () => {
  // const images = await cloudinary.api.resources({  }, (error, data) => {
  //   console.log(data);
  //   console.log(error);
  //   return data;
  // });
};

const seed = async () => {
  try {
    await connectToDatabase();
    // const images = await seedImages();
    // console.log(images);
    await seedAdmin("Admin", "admin@simplywood.be", "admin");
    console.log("Administrator seeded.");
    await seedCategories(["Categorie1", "Categorie2", "Categorie3"]);
    console.log("Categories seeded.");
    console.log("Database seeded.");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

seed();
