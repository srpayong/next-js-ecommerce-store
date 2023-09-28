'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// import { Product } from '../../migrations/1685200803-createTableProducts';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: { default: 'Products | Bliss' },
  description: '',
};

export default function FilterProducts({ products }) {
  const [category, setCategory] = useState('');

  const filterProductsByCategory = category
    ? products.filter((product) => product.category === category)
    : products;
  return (
    <main>
      <section className={styles.productOverviewContainer}>
        <div className={styles.productPageHeader}>
          <h1>Shop Our Collection</h1>
        </div>

        <div>
          <div>
            <select
              value={category}
              onChange={(event) => {
                setCategory(event.currentTarget.value);
              }}
            >
              <option value="">All Products</option>
              <option value="sweater">Sweater</option>
              <option value="pants">Pants</option>
              <option value="purse">Purse</option>
            </select>
          </div>
        </div>

        <div>
          {filterProductsByCategory.map((product) => {
            return (
              <div key={`product-div-${product.id}`}>
                <Link
                  href={`/products/${product.id}`}
                  data-test-id={`product-${product.id}`}
                >
                  <Image
                    src={`/images/products/${product.name}.avif`}
                    width={200}
                    height={200}
                    alt={product.name}
                    priority={true}
                    unoptimized={true}
                    data-test-id="product-image"
                  />
                </Link>
                <div>
                  <Link href={`/products/${product.id}`}>
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
    </main>
  );
}
