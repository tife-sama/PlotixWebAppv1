"use server";

import { handleError } from "../utils";
import { connectToDatabase } from "../database";
import Category from "../database/models/category.model";

// Define your categories
const categoriesArray = ["Journalism", "Comic", "Manga", /* Add more categories as needed */];

export const getAllCategories = async () => {
  try {
    await connectToDatabase();

    const categories = await Category.find();

    // Filter out categories not in categoriesArray
    const filteredCategories = categories.filter(category => categoriesArray.includes(category.name));

    return JSON.parse(JSON.stringify(filteredCategories));
  } catch (error) {
    handleError(error);
  }
};

export const getPredefinedCategories = () => {
  return categoriesArray;
};

export { categoriesArray}