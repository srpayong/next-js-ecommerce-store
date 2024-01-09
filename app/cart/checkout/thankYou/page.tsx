import styles from './thankYou.module.scss';

export const metadata = {
  title: 'Bliss',
  description: 'Lorem Ipsum',
};

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
