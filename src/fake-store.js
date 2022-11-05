const fetchNewProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=5');
  if (!response.ok) {
    throw (response);
  }
  const data = await response.json();
  return data;
};

const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw (response);
  }
  const data = await response.json();
  return data;
};

const fetchCategories = async () => {
  const response = await fetch('https://fakestoreapi.com/products/categories');
  if (!response.ok) {
    throw (response);
  }
  const data = await response.json();
  return data;
};

const fetchSpecificCategory = async (category) => {
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  if (!response.ok) {
    throw (response);
  }
  const data = await response.json();
  return data;
};

export {
  fetchNewProducts, fetchProducts, fetchCategories, fetchSpecificCategory,
};
