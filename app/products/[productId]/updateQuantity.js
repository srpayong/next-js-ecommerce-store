import { parseJson } from '../../../util/json';

export function updateQuantity(quantityInCart, productId, quantity) {
  const productQuantities = !quantityInCart
    ? [] // Create a new array with the productQuantity
    : parseJson(quantityInCart);
  // Edit the object: get the object for the product in cookies
  const productToUpdate = productQuantities?.find((productQuantity) => {
    return productQuantity.id === productId;
  });

  // update the quantity in cart badge
  if (productToUpdate) {
    // update the quantity in the cart badge upon clicking add to cart button
    productToUpdate.quantity =
      Number(productToUpdate.quantity) + Number(quantity);
  } else {
    // add the new value to current value in the cart badge
    productQuantities?.push({
      id: productId,
      quantity: Number(quantity),
    });
  }

  return JSON.stringify(productQuantities);
}
