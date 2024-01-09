import { getProducts } from '../../database/products';
import FilterProducts from './FilteredProducts';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Bliss | Products',
  description: 'Lorem Ipsum',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return <FilterProducts products={products} />;
}
