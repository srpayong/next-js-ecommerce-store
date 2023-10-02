import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById } from '../../../database/products';
import AddToCart from './AddToCart';
import styles from './page.module.scss';

// import Link from 'next/link';

export async function generateMetadata({ params }) {
  const singleProduct = await getProductById(Number(params.productId));

  return {
    title: singleProduct ? singleProduct.name : '',
  };
}

export default async function SingleProductPage(props) {
  const singleProduct = await getProductById(Number(props.params.productId));

  if (!singleProduct) {
    notFound();
    return null;
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
      {/*
      <section className={styles.youMayAlsoLikeContainer}>
        <h2>You may also like</h2>
        <div className={styles.productCardsContainer}>
          {products.map((product) => {
            return (
              <div
                key={`product-div-${product.id}`}
                className={styles.productCard}
              >
                <Link
                  data-test-id={`product-${product.id}`}
                  href={`/products/${product.id}`}
                  className={styles.categoryTitle}
                >
                  <Image
                    src={`/images/${product.name}.jpeg`}
                    width={200}
                    height={200}
                    alt={product.name}
                    priority
                    unoptimized
                  />
                </Link>
                <div>
                  <Link
                    href={`/products/${product.id}`}
                    className={styles.categoryTitle}
                  >
                    {product.category}
                  </Link>
                  <div>
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                    <Link href={`/products/${product.id}`}>
                      <p>€ {product.price}</p>
                    </Link>
                  </div>
                </div>
              </div> */}
      {/* );
          })} */}
      {/* </div>
      </section> */}
    </main>
  );
}
