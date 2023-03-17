export async function getCategories() {
  const API__URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  const response = await fetch(API__URL);
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const API__URL1 = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(API__URL1);
  const data = await response.json();
  console.log(data);
  return data;
}

export async function getProductById(productId) {
  const API__URL1 = `https://api.mercadolibre.com/items/${productId}`;
  const response = await fetch(API__URL1);
  const data = await response.json();
  console.log(data);
  return data;
}
