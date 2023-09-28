'use client';

import React, { useEffect, useState } from 'react';

export default function LocalStorage() {
  const [darkMode, setDarkMode] = useState('');

  useEffect(() => {
    setDarkMode(window.localStorage.getItem('darkMode'));
  }, []);
  return <div>{darkMode ? darkMode : 'false'} </div>;
}

// useEffect always exist in client's
