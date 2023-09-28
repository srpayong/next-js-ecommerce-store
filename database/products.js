import 'server-only';

const products = [
  { id: 1, firstName: 'man1' },
  { id: 2, firstName: 'man2' },
  { id: 3, firstName: 'man3' },
  { id: 4, firstName: 'woman1' },
  { id: 5, firstName: 'woman2' },
  { id: 6, firstName: 'woman3' },
];

export function getProducts() {
  return products;
}

export function getProduct(id) {
  return products.find((product) => product.id === id);
}
