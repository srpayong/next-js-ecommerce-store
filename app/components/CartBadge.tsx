import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './NavBar.module.scss';

interface CartItem {
  quantity: number;
}

export default function CartBadge() {
  const productQuantityCookie = getCookie('cart');
  const productQuantities = !productQuantityCookie
    ? []
    : parseJson(productQuantityCookie);

  const quantity = productQuantities?.map((item: CartItem) => item.quantity);
  const total = quantity?.reduce(
    (accumulator: number, currentNumber: number) => {
      return accumulator + currentNumber;
    },
    0,
  );

  return (
    <h5
      data-test-id="cart-count"
      className={`${styles.badge} ${total === 0 ? styles.empty : ''}`}
    >
      {total}
    </h5>
  );
}
