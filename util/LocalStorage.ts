export function getLocalStorage(key: string) {
  // is testing if we are in the browser
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
}

export function setLocalStorage(key: string, value: string) {
  // is testing if we are in the browser
  if (typeof window !== 'undefined') {
    return window.localStorage.setItem(key, value);
  }
}

// 'use client';

// import React, { useEffect, useState } from 'react';

// export default function LocalStorage() {
//   const [darkMode, setDarkMode] = useState('');

//   useEffect(() => {
//     setDarkMode(window.localStorage.getItem('darkMode') || '');
//   }, []);

//   return <div>{darkMode ? darkMode : 'false'}</div>;
// }
