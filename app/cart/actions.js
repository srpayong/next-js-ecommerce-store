'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

// remove product from cart
export async function removeItem(item) {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const removeFromCart = productQuantities.filter(
    (product) => product.id !== item.id,
  );
  await cookies().set('cart', JSON.stringify(removeFromCart));
}

// increase quantity
export async function addQuantity(item) {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  const increase = productQuantities.find((product) => {
    return product.id === item.id;
  });
  increase.quantity += 1;
  await cookies().set('cart', JSON.stringify(productQuantities));
}

// decrease quantity
export async function subtractQuantity(item) {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);
  const decrease = productQuantities.find((product) => {
    return product.id === item.id;
  });

  if (decrease.quantity > 1) {
    decrease.quantity -= 1;
  } else {
    decrease.quantity = 1;
  }
  await cookies().set('cart', JSON.stringify(productQuantities));
}
