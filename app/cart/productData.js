export function productData(products, productsInCookie) {
  const newItemsInCart = [];

  // Iterate over each item in the 'productsInCookie' array using map
  productsInCookie.map((item) => {
    const productWithQuantities = products.find(
      (productObject) => productObject.id === item.id,
    );

    // Create a new object by combining properties from item and productWithQuantities
    newItemsInCart.push({
      ...item,
      ...productWithQuantities,
    });

    return { ...products, quantity: productWithQuantities.quantity };
  });

  return newItemsInCart;
}
