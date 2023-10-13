import { expect, test } from '@jest/globals';
import getCartTotal from '../../app/cart/getCartTotal';

test('Test cart sum function', () => {
  const currentCart = [
    {
      price: 35,
      quantity: 1,
    },
    {
      price: 35,
      quantity: 2,
    },
  ];
  expect(getCartTotal(currentCart)).toBe(105);
});

// Unit
