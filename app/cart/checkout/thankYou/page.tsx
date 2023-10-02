// import Image from 'next/image';
// import img1 from '../../../../public/images/img1.jpeg';
import styles from './thankYou.module.scss';

export default function thankYouPage() {
  return (
    <main className={styles.thankyouContainer}>
      <h1>Thank you for your order</h1>
      <div>
        <p>
          We're so confident you'll be back for more, we're giving you a $10
          coupon!
        </p>
      </div>
    </main>
  );
}
