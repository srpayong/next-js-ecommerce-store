import { expect, test } from '@jest/globals';
import { updateQuantity } from '../../app/products/[productId]/updateQuantity';

test('Test function for updating quantity in item of cookie', () => {
  // calls function with 3 args, expected to update the quantity of an item in the cookie
  const quantity = updateQuantity(undefined, 1, 1);

  // checks whether the quantity returned from the updateQuantity function matches the result, expecting a JSON string
  expect(quantity).toStrictEqual('[{"id":1,"quantity":1}]');

  // simulates updating the quantity of an item with id:1 from 1-3. assertion checks whether result match, which represents the updates quantity in the cookie after the update.
  expect(updateQuantity(quantity, 1, 2)).toStrictEqual(
    '[{"id":1,"quantity":3}]',
  );
});

// unit
