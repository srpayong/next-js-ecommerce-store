import { getProducts } from '../../database/products';
import FilterProducts from './FilteredProducts';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Bliss | Products' },
  description: 'Lorem Ipsum',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return <FilterProducts products={products} />;
}

// export const metadata = {
//   title: 'Bliss | Products',
//   description: 'Lorem Ipsum',
// };

// export type CookieQuantityItem = {
//   id: number;
//   quantity: number;
// };

// type Props = {
//   params: { productId: string }; // string because product id is in url
// };

// export default async function ProductsPage() {
//   const products: Product[] = await getProducts();

//   return (
//     <div>
//       <h1>Products</h1>

//       {products.map((product) => {
//         return (
//           <div key={`product-div-${product.id}`}>
//             <Link href={`/products/${product.id}`}>{product.name}</Link>
//             <Image
//               src={`/images/${product.name}.jpeg`}
//               alt={product.name}
//               width={200}
//               height={200}
//             />
//           </div>
//         );
//       })}
//     </div>
//   );
// }
