const fetchNewProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=5');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchProducts = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchCategories = async () => {
  try {
    const response = await fetch('https://fakestoreapi.com/categories');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const fetchSpecificCategory = async (category) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/category/${category}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export {
  fetchNewProducts, fetchProducts, fetchCategories, fetchSpecificCategory,
};
