import React from 'react';
import Cart from './Cart';
import s from '../styles/carts.module.css'
import Link from 'next/link';

const CartsL = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Актуальные предложения в Латвии</h2>
      <div className={s.carts}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
      <div>

        <div className={s.all_vakan}>
          <Link href="/vacansy">
            <a className={s.text_btn}>ВСЕ ВАКАНСИИ</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartsL;