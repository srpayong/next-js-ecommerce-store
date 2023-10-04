'use server';

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';
import { updateQuantity } from './updateQuantity';

export default async function addToCart(productId: number, quantity: number) {
  // Get the current cookies from the Request Headers
  const quantityInCart = getCookie('cart');

  const productQuantities = updateQuantity(quantityInCart, productId, quantity);

  // override the cookie: set the cookies into the response headers
  await cookies().set('cart', productQuantities);
}

// 'use server';

// // Case A: cookie is undefined
// // Case B: cookie is defined but have the fruit id
// // Case C: cookie is defined but doesn't have the fruit id

// import { cookies } from 'next/headers';
// import { getCookie } from '../../../util/cookies';
// import { parseJson } from '../../../util/json';

// export async function createOrUpdateComment(fruitId, comment) {
//   // 1. get the current cookie
//   const fruitsCommentsCookie = getCookie('fruitsComments');
//   // 2. parse the cookie value

//   // !fruitsCommentsCookie <=> fruitsCommentsCookie === undefined
//   const fruitComments = !fruitsCommentsCookie
//     ? // Case A: cookie is undefined
//       // we need to create a new cookie with an empty array
//       []
//     : parseJson(fruitsCommentsCookie);

//   // 3. we edit the cookie value
//   // We get the the object for the fruit on cookies or undefined
//   const fruitToUpdate = fruitComments.find((fruitComment) => {
//     return fruitComment.id === fruitId;
//   });
//   // Case B: cookie is defined and fruit id already exists!
//   // if we are in fruit id = 1
//   if (fruitToUpdate) {
//     fruitToUpdate.comment = comment;
//   } else {
//     // Case C: cookie is defined and fruit id doesn't exist!
//     fruitComments.push({
//       id: fruitId,
//       comment: comment,
//     });
//   }

//   // 4. we override the cookie
//   await cookies().set('fruitsComments', JSON.stringify(fruitComments));
// }
