import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../Firebase";

// function to fetch products
export const fetchProducts = async () => {
  try {
    const productsCollection = collection(db, "Products");
    const querySnap = await getDocs(productsCollection);
    const productList = querySnap.docs.map((doc) => doc.data());
    return productList;
  } catch (error) {
    throw new Error("Error ", error.message);
  }
};

// function to filter products by name
export const getProductsByName = async (searchTerm) => {
  try {
    if (!searchTerm.trim()) return [];
    const lowerCaseTerm = searchTerm.toLowerCase();
    const productsCollection = collection(db, "Products");
    const queryToGetName = query(
      productsCollection,
      where("name", ">=", lowerCaseTerm),
      where("name", "<=", lowerCaseTerm + "\uf8ff")
    );
    const querySnap = await getDocs(queryToGetName);
    let productList = [];
    if (!querySnap.empty) {
      productList = querySnap.docs.map((doc) => doc.data());
      return productList;
    }
  } catch (error) {
    console.error("Error fetching product by name:", error);
    return null;
  }
};

// function to filter products by category
export const filterProductsByCategory = async (cagtegory = null) => {
  try {
    if (!cagtegory.trim()) return [];
    const productsCollection = collection(db, "Products");
    const queryToGetCategory = query(
      productsCollection,
      where("category", ">=", cagtegory),
      where("category", "<=", cagtegory + "\uf8ff")
    );
    const querySnap = await getDocs(queryToGetCategory);
    let productList = [];
    if (!querySnap.empty) {
      productList = querySnap.docs.map((doc) => doc.data());
      return productList;
    }
  } catch (error) {
    console.error("Error fetching product by category:", error);
    return null;
  }
};
