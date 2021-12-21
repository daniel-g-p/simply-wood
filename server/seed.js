import { connectToDatabase, db } from "./utilities/database.js";

import newUser from "./models/user.js";
import newCategory from "./models/category.js";
import newImage from "./models/image.js";

import { getAllResources, deleteImage } from "./utilities/cloudinary.js";
import { hashString } from "./utilities/argon2.js";

const seedAdmin = async (name, email, password) => {
  await db.delete("users", {});
  const hash = await hashString(password);
  await db.create("users", newUser(name, email, hash));
  console.log("Administrator seeded.");
};

const seedCategories = async (categoryNames) => {
  await db.delete("categories", {});
  const categories = [];
  for (let categoryName of categoryNames) {
    const category = newCategory(categoryName);
    const { insertedId } = await db.create("categories", category);
    categories.push(insertedId.toString());
  }
  console.log("Categories seeded.");
  return categories;
};

const seedImages = async (categoryIds) => {
  await db.delete("images", {});
  await deleteImage("images/");
  const data = await getAllResources();
  const { resources } = data;
  const imageUrls = resources.map((resource) => resource.url);
  for (let i = 0; i < imageUrls.length; i++) {
    const randomIndex = Math.floor(Math.random() * categoryIds.length);
    const categoryId = categoryIds[randomIndex];
    const url = imageUrls[i];
    const image = newImage(categoryId, url, "square");
    await db.create("images", image);
    await db.updateById("categories", categoryId, { mainImage: url });
  }
  console.log("Images seeded.");
};

const seed = async () => {
  try {
    // await connectToDatabase();
    // await seedAdmin("Admin", "admin@simplywood.be", "admin");
    // const categoryIds = await seedCategories([
    //   "Categorie1",
    //   "Categorie2",
    //   "Categorie3",
    // ]);
    // await seedImages(categoryIds);
    console.log("Database seeded.");
  } catch (error) {
    console.log(error);
  } finally {
    process.exit();
  }
};

seed();
