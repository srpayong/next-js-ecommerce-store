'use server';
import { cookies } from 'next/headers';

export async function clearCookies() {
  // resetCartQuantity(0);
  // await cookies.remove('cart');
  await cookies().set('cart', JSON.stringify([]));
}
