import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../database/products';
import img1 from '../public/images/img1.jpeg';
import img2 from '../public/images/img2.jpeg';
import man1 from '../public/images/man1.jpeg';
import GenerateButton from './GenerateButton';
import LocalStorage from './LocalStorage';
import styles from './page.module.scss';

export default function HomePage() {
  const products = getProducts();
  return (
    <>
      <section>
        <GenerateButton />
        <LocalStorage />
        <h1>My home page</h1>
        <Image src="/images/img1.jpeg" alt="man 1" width={400} height={400} />
      </section>

      <section>
        <div>
          <h4>Featured Products</h4>
          <Link href="/products">View Products</Link>
        </div>
        <div className={styles.featuredProductsCards}>
          {products.slice(8, 12).map((product) => {
            return (
              <div
                key={`product-div-${product.id}`}
                className={styles.productCard}
              >
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={`/images/products/${product.name}.jpeg`}
                    width={200}
                    height={200}
                    alt={product.name}
                    priority={true}
                    className={styles.productImage}
                  />
                </Link>
                <div className={styles.productInfo}>
                  <Link
                    href={`/products/${product.id}`}
                    className={styles.categoryTitle}
                  >
                    {product.category}
                  </Link>
                  <div>
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                    <Link href={`/products/${product.id}`}>
                      € {product.price}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section>
        <div>
          <Image
            className={styles.collectionImage1}
            src={img1}
            alt="woman"
            priority={true}
          />
          <Image
            className={styles.collectionImage2}
            src={img2}
            alt="man"
            priority={true}
          />
        </div>
        <div>
          <h2>Lorem ipsum</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link className={styles.learnMoreLink} href="/#">
            Learn more
          </Link>
        </div>
      </section>
    </>
  );
}
