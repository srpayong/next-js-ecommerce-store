import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddToCart from './AddToCart';
import styles from './page.module.scss';

export const metadata = {
  title: { default: 'Bliss |' },
  description: 'Lorem Ipsum',
};

export type CookieQuantityItem = {
  id: number;
  quantity: number;
};

type Props = {
  params: { productId: string };
};

export default async function SingleProductPage(props: Props) {
  const singleProduct = await getProductById(Number(props.params.productId));
  // console.log({ singleProduct });

  if (!singleProduct) {
    notFound();
  }

  return (
    <main>
      <section className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <Image
            data-test-id="product-image"
            src={`/images/${singleProduct.name}.jpeg`}
            width={500}
            height={500}
            className={styles.productImage}
            alt={singleProduct.name}
            // priority={true}
            unoptimized={true}
          />
        </div>
        <div className={styles.productInfoContainer}>
          <h1>{singleProduct.name}</h1>
          <h5>{singleProduct.description}</h5>
          <h6 data-test-id="product-price"> €{singleProduct.price}</h6>
          <p className={styles.quantityTitle}>Quantity</p>
          <div className={styles.quantityButtons}>
            <AddToCart productId={singleProduct.id} />
          </div>
        </div>
      </section>
    </main>
  );
}

// **** //
// export async function generateMetadata({ params }) {
//   const singleProduct = await getProductById(Number(params.productId));
//   console.log(params);

//   return {
//     title: singleProduct ? singleProduct.name : '',
//   };
// }

// export default async function SingleProductPage(props) {
//   const singleProduct = await getProductById(Number(props.params.productId));
//   console.log(props.params.id);

//   if (!singleProduct) {
//     notFound();
//     return null;
//   }
//   return (
//     <main>
//       <section className={styles.productContainer}>
//         <div className={styles.imageContainer}>
//           <Image
//             data-test-id="product-image"
//             src={`/images/${singleProduct.name}.jpeg`}
//             width={500}
//             height={500}
//             className={styles.productImage}
//             alt={singleProduct.name}
//             // priority={true}
//             unoptimized={true}
//           />
//         </div>
//         <div className={styles.productInfoContainer}>
//           <h1>{singleProduct.name}</h1>
//           <h5>{singleProduct.description}</h5>
//           <h6 data-test-id="product-price"> €{singleProduct.price}</h6>
//           <p className={styles.quantityTitle}>Quantity</p>
//           <div className={styles.quantityButtons}>
//             <AddToCart productId={singleProduct.id} />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
