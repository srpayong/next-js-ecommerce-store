'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import style from './GenerateButton.module.scss';

export default function GenerateButton() {
  const [count, setCount] = useState('#123fee');
  const router = useRouter();
  return (
    <div>
      <button
        className={style.generateButton}
        onClick={() => {
          setCount(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
          router.refresh();
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

// // router to connect generated number to button-add to cart
