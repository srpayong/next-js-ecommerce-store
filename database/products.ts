import 'server-only';
import { cache } from 'react';
import { sql } from '../database/connect';

// const products1 = [
//   {
//     id: 1,
//     firstName: 'man1',
//     type: 'Pullover',
//     price: 35,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//   },
//   {
//     id: 2,
//     firstName: 'man2',
//     type: 'Jeans',
//     price: 49,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//   },
//   {
//     id: 3,
//     firstName: 'man3',
//     type: 'Pants',
//     price: 49.99,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//   },
//   {
//     id: 4,
//     firstName: 'woman1',
//     type: 'Sweater',
//     price: 59.99,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//   },
//   {
//     id: 5,
//     firstName: 'woman2',
//     type: 'Purse',
//     price: (99.99).toExponential,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//   },
//   {
//     id: 6,
//     firstName: 'woman3',
//     type: 'Trousers',
//     price: 49.99,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//   },
//   {
//     id: 7,
//     firstName: 'kids1',
//     type: 'linen jumpsuit',
//     price: 49.99,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//   },
//   {
//     id: 8,
//     firstName: 'kids2',
//     type: 'shirt and pants',
//     price: 49.99,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//   },
//   {
//     id: 9,
//     firstName: 'kids3',
//     type: 'Pullover and joggers',
//     price: 49.99,
//     description:
//       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//   },
// ];

type Product = {
  id: number;
  name: string;
  type: string;
  price: number;
  description: string | null;
};

export const getProducts = cache(async () => {
  // postgres always returns an array
  const products = await sql<Product[]>`
  SELECT * FROM products
  `;

  return products;
});

export const getProductById = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
  SELECT * FROM products WHERE id = ${id}
  `;

  return product;
});
