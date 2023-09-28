import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
import AddToCart from './AddToCart';
import styles from './page.module.scss';

export function generateMetadata({ params }) {
  const singleProduct = getProduct(Number(params.productId));

  return {
    title: singleProduct ? singleProduct.firstName : '',
  };
}

export default function ProductPage(props) {
  const singleProduct = getProduct(Number(props.params.productId));

  if (!singleProduct) {
    return notFound();
  }
  return (
    <main>
      <section>
        <div>
          Our Products
          <h1>{singleProduct.firstName}</h1>
          <Image
            data-test-id="product-image"
            src={`/images/${singleProduct.firstName}.jpeg`}
            width={500}
            height={500}
            alt={singleProduct.firstName}
          />
          this is a {singleProduct}
        </div>
        <div className={styles.productInfoContainer}>
          <h1>{singleProduct.firstName}</h1>
          <h5>{singleProduct.description}</h5>
          <h6 data-test-id="product-price"> ${singleProduct.price}</h6>
          <p className={styles.quantityTitle}>Quantity</p>
          <div className={styles.quantityButtons}>
            <AddToCart productId={singleProduct.id} />
          </div>
        </div>
      </section>
    </main>
  );
}
