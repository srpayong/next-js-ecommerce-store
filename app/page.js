import { Caveat, Playfair_Display } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { getProducts } from '../database/products';
import img1 from '../public/images/img1.jpeg';
import img3 from '../public/images/img3.jpeg';
import img4 from '../public/images/img4.jpeg';
import menjeans from '../public/images/menjeans.jpeg';
import menpullover from '../public/images/menpullover.jpeg';
import styles from './page.module.scss';

// export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Bliss | Homepage' },
  description: 'Dedicated for best quality handmade jewellery',
};

const caveat = Caveat({ subsets: ['latin'] });
const playfairDisplay = Playfair_Display({ subsets: ['latin'] });

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <section className={styles.featuredProductsSection}>
        <div className={styles.featuredProductsTitle}>
          <h4 className={playfairDisplay.className}>Featured Products</h4>
          <Link className={styles.viewAllButton} href="/products">
            View All
          </Link>
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
                    src={`/images/${product.name}.jpeg`}
                    width={200}
                    height={200}
                    alt={product.name}
                    priority={true}
                    className={styles.productImage}
                  />
                </Link>
                <Link href={`/products/${product.id}`}>
                  <Image
                    src={`/images/${product.name}.jpeg`}
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
      {/* ========================= THE COLLECTION SECTION ========================= */}
      <section className={styles.collectionSection}>
        <div className={styles.collectionImageBox}>
          <Image
            className={styles.collectionImage1}
            src={img4}
            alt="image 4"
            priority={true}
          />
          <Image
            className={styles.collectionImage2}
            src={img1}
            alt="image 1"
            priority={true}
          />
        </div>

        <div className={styles.collectionTextBox}>
          <h2 className={caveat.className}>The Collection</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            risus non vestibulum. Sed aliquam massa non libero tincidunt, non
            condimentum nulla auctor. Curabitur varius odio a quam ullamcorper
            volutpat. Pellentesque venenatis bibendum semper.
          </p>
          <Link className={styles.learnMoreLink} href="/#">
            Learn more <FaLongArrowAltRight />
          </Link>
        </div>
      </section>
      {/* ========================= ICONS SECTION ========================= */}
      <section className={styles.highlightSection}>
        <div className={styles.highlight}>
          <Image
            src={img3}
            alt="image 3"
            className={styles.highlightIcon}
            priority={true}
          />
          <h6>Ref stores</h6>
          <p>We're all over the place</p>
        </div>
        <div className={styles.highlight}>
          <Image
            src={img4}
            alt="image 4"
            className={styles.highlightIcon}
            priority={true}
          />
          <h6>We're Climate Neutral certified</h6>
          <p>And commited to the planet</p>
        </div>
        <div className={styles.highlight}>
          <Image
            src={menpullover}
            alt="men pullover"
            className={styles.highlightIcon}
            priority={true}
          />
          <h6>Customer love</h6>
          <p>We got you via email or text</p>
        </div>
        <div className={styles.highlight}>
          <Image
            src={menjeans}
            alt="men jeans"
            className={styles.highlightIcon}
            priority={true}
          />
          <h6>Free shipping</h6>
          <p>Free returns on qualifying orders</p>
        </div>
      </section>
      {/* ========================= CATEGORY SECTION ========================= */}
      <section className={styles.categorySection}>
        <h2 className={playfairDisplay.className}>Shop by Category</h2>
        <Link className={styles.viewallLink} href="/ProductsOverview">
          View all
        </Link>
        <div className={styles.categoryCards}>
          <div className={styles.categoryWomen}>
            <p>Women</p>
          </div>
          <div className={styles.categoryMen}>
            <p>Men</p>
          </div>
          <div className={styles.categoryKids}>
            <p>Kids</p>
          </div>
          <div className={styles.categoryPurse}>
            <p>Purse</p>
          </div>
        </div>
      </section>
      {/* ========================= TESTIMONIALS SECTION ========================= */}
      <section className={styles.testimonialsSection}>
        <h4>Reviews</h4>
        <div className={styles.testimonials}>
          <div className={styles.testimonialCard}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod risus non vestibulum. Sed aliqua
            </p>

            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod risus non vestibulum. Sed aliquam massa non libero
            </p>
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
          <div className={styles.testimonialCard}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod risus non vestibulum. Sed aliquam massa non libero
            </p>

            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
