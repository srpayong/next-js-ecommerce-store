'use client';

import { useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../../LocalStorage';
import { parseJson } from '../../util/json';
import styles from './CookieBanner.module.scss';

export function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(true);

  useEffect(() => {
    const localStorageValue = getLocalStorage('cookiePolicy');
    if (localStorageValue) {
      setAreCookiesTermsAccepted(parseJson(localStorageValue));
    } else {
      setAreCookiesTermsAccepted(false);
    }
  }, []);

  return (
    <div
      className={`${styles.cookieBanner} ${
        areCookiesTermsAccepted ? styles.closed : styles.open
      }`}
    >
      <div>Accept all cookies</div>
      <button
        className={styles.cookieAcceptButton}
        onClick={() => {
          setLocalStorage('cookiePolicy', JSON.stringify(true));
          setAreCookiesTermsAccepted(true);
        }}
      >
        Accept
      </button>
    </div>
  );
}
