import { expect, test } from '@jest/globals';
import { productData } from '../../app/cart/productData';

test('Test function that combines the product data from the database with the product quantity data from your cookie', () => {
  // defining an array that simulates data from database
  const productsData = [
    {
      id: 1,
      name: 'menpullover',
      category: 'men',
      price: 35,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
  ];

  // array that simulates data from a cookie
  const cookieData = [{ id: 1, quantity: 2 }];

  // calls the function with productsData and cookieData as arguments
  const combineData = productData(productsData, cookieData);

  expect(combineData).toStrictEqual([
    {
      id: 1,
      name: 'menpullover',
      category: 'men',
      price: 35,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      quantity: 2,
    },
  ]);
});

// unit
