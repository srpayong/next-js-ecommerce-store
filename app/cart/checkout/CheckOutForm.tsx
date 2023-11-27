'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { clearCookies } from './actions';
import styles from './checkout.module.scss';

export default function CheckOutForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postCode, setPostCode] = useState('');
  const [country, setCountry] = useState('');
  const [creditCard, setCreditCard] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [digit, setDigit] = useState('');

  return (
    <form className={styles.form}>
      <p>Contact Information</p>
      <div className={styles.nameContainer}>
        <input
          data-test-id="checkout-first-name"
          placeholder="First name"
          className={styles.name}
          value={firstName}
          onChange={(event) => setFirstName(event.currentTarget.value)}
          required
        />

        <input
          data-test-id="checkout-last-name"
          placeholder="Last name"
          className={styles.name}
          value={lastName}
          onChange={(event) => setLastName(event.currentTarget.value)}
          // required
        />
      </div>

      <input
        type="email"
        data-test-id="checkout-email"
        placeholder="me@email.com"
        value={email}
        onChange={(event) => setEmail(event.currentTarget.value)}
        // required
      />

      <div>
        <p>Shipping Information</p>

        <input
          data-test-id="checkout-address"
          placeholder="Address"
          value={address}
          onChange={(event) => setAddress(event.currentTarget.value)}
          // required
        />

        <div className={styles.addressContainer}>
          <input
            data-test-id="checkout-city"
            placeholder="City"
            className={styles.city}
            value={city}
            onChange={(event) => setCity(event.currentTarget.value)}
          />

          <input
            data-test-id="checkout-postal-code"
            placeholder="Post Code"
            className={styles.city}
            value={postCode}
            onChange={(event) => setPostCode(event.currentTarget.value)}
          />
        </div>

        <input
          data-test-id="checkout-country"
          placeholder="Country"
          value={country}
          onChange={(event) => setCountry(event.currentTarget.value)}
          // required
        />
      </div>
      <div className={styles.paymentInfoContainer}>
        <p>Payment Information</p>

        <input
          data-test-id="checkout-credit-card"
          placeholder="Credit Card Number"
          value={creditCard}
          onChange={(event) => setCreditCard(event.currentTarget.value)}
          // required
        />

        <div className={styles.paymentInfo}>
          <div className={styles.expiryDateContainer}>
            <input
              name="month"
              type="number"
              placeholder="MM"
              value={month}
              onChange={(event) => setMonth(event.currentTarget.value)}
              data-test-id="checkout-credit-card"
              className={`${styles.expiry} ${styles.expiryMonth}`}
            />

            <span>/</span>

            <input
              name="year"
              type="number"
              placeholder="YY"
              value={year}
              onChange={(event) => setYear(event.currentTarget.value)}
              data-test-id="checkout-credit-card"
              className={`${styles.expiry} ${styles.expiryYear}`}
            />
          </div>

          <input
            type="number"
            placeholder="CVC"
            value={digit}
            onChange={(event) => setDigit(event.currentTarget.value)}
            data-test-id="checkout-credit-card"
            className={styles.threeDigit}
            // required
          />
        </div>
      </div>
      <button
        data-test-id="checkout-confirm-order"
        formAction={async () => {
          await clearCookies();
          router.refresh();
          router.push('/cart/checkout/thankYou');
        }}
        disabled={
          firstName.length === 0 ||
          lastName.length === 0 ||
          email.length === 0 ||
          address.length === 0 ||
          city.length === 0 ||
          postCode.length === 0 ||
          country.length === 0 ||
          creditCard.length === 0 ||
          month.length === 0 ||
          year.length === 0 ||
          digit.length === 0
        }
      >
        Confirm Order
      </button>
    </form>
  );
}
