import React from 'react';
import s from '../styles/carts.module.css'
import Image from 'next/image';
import Icon1 from '../public/work.svg'
import Icon2 from '../public/location.svg'
import Icon3 from '../public/kalendar.svg'
import { motion } from 'framer-motion';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Cart = () => {
 
  const rightAnimation = {
    hidden: {
      x: -200,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  }

  return (
    <motion.div variants={rightAnimation} className={s.cart}>
      <Image
        src="/me.jpg"
        alt="Picture of the author"
        width={298}
        layout="responsive"
        height={192}
      />
      <p className={s.cart_name}>Вакансия плиточника и помощника плиточника</p>

      <div className={s.cart_desc}>
        <div className={s.cart_d}>
          <Image
            src={Icon1}
            alt="Picture of the author"
            width={18}
            height={18}
          />
          <p className={s.cart_p}>
            Разнорабочие
          </p>
        </div>
        <div className={s.cart_d}>
          <Image
            src={Icon2}
            alt="Picture of the author"
            width={18}
            height={18}
          />
          <p className={s.cart_p}>
            Разнорабочие
          </p>
        </div>
        <div className={s.cart_d}>
          <Image
            src={Icon3}
            alt="Picture of the author"
            width={18}
            height={18}
          />
          <p className={s.cart_p}>
            Разнорабочие
          </p>
        </div>
      </div>


      <button className={s.cart_btn}>
        Связаться с нами
      </button>


    </motion.div>
  );
};

export default Cart;