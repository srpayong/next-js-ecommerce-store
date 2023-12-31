'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Product } from '../../migrations/00002-createTableProducts';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Bliss' },
  description: 'Lorem Ipsum',
};

type Props = {
  products: Product[];
};

export default function FilterProducts({ products }: Props) {
  const [category, setCategory] = useState('');

  const filterProductsByCategory = category
    ? products.filter((product) => product.category === category)
    : products;
  return (
    <main>
      <section className={styles.productOverviewContainer}>
        <div className={styles.productPageHeader}>
          <h1>Must-haves fall 2023</h1>
        </div>

        <div className={styles.categoryContainer}>
          <div className={styles.filterOptions}>
            <select
              value={category}
              onChange={(event) => {
                setCategory(event.currentTarget.value);
              }}
            >
              <option value="products">All Products</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="kids">Kids</option>
              <option value="purse">Purse</option>
            </select>
          </div>
        </div>

        <div className={styles.productCardsContainer}>
          {filterProductsByCategory.map((product) => {
            return (
              <div
                key={`product-div-${product.id}`}
                className={styles.productCard}
              >
                <Link
                  href={`/products/${product.id}`}
                  data-test-id={`product-${product.id}`}
                >
                  <Image
                    src={`/images/${product.name}.jpeg`}
                    width={200}
                    height={200}
                    alt={product.name}
                    priority={true}
                    unoptimized={true}
                    data-test-id="product-image"
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
                    <Link
                      href={`/products/${product.id}`}
                      className={styles.productName}
                    >
                      {product.name}
                    </Link>
                    <Link
                      href={`/products/${product.id}`}
                      className={styles.productPrice}
                    >
                      € {product.price}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
