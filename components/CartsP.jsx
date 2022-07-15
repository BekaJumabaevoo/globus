import React from 'react';
import s from '../styles/carts.module.css'
import Cart from './Cart';
import Link from 'next/link';

const Carts = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Актуальные предложения о работе в Польше</h2>
      <div className={s.carts}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
        <Link href="/vacansy">
          <a className={s.text_btn}>ВСЕ ВАКАНСИИ</a>
        </Link>
    </div>
  );
};

export default Carts;