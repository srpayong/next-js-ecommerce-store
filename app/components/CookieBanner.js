'use client';

import { useEffect, useState } from 'react';
import { parseJson } from '../../util/json';
import { getLocalStorage, setLocalStorage } from '../../util/LocalStorage';
import styles from './CookieBanner.module.scss';

export function CookieBanner() {
  const [areCookiesTermsAccepted, setAreCookiesTermsAccepted] = useState(false);

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
      <div>Do you accept the use of cookies?</div>
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
