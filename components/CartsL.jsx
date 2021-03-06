import React, {useEffect, useState} from 'react';
import Cart from './Cart';
import s from '../styles/carts.module.css'
import Link from 'next/link';
import { motion } from 'framer-motion';
import axios from 'axios';


const CartsL = ({id}) => {
  // const [cartData , setDataCart] = useState([])

  // useEffect(()=>{
  //   axios.get('https://7856-212-42-120-155.in.ngrok.io/api/v1/posts').then(res => {
  //     console.log(res);
  //   })
  // }, [])
  const rightAnimation = {
    hidden: {
      x: 0,
      opacity: 0,
    },
    visible: custom => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }, 
    }),

  }
 
  return (
    <motion.div className={s.container} initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.1 }} id={id}>
      <motion.h2 className={s.title} variants={rightAnimation}>Актуальные предложения в Латвии</motion.h2>
      <motion.div  initial="hidden"
    whileInView="visible"
    viewport={{ amount: 0.2 }} className={s.carts}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </motion.div>
      <div>

        <div className={s.all_vakan}>
          <Link href="/vacansy">
            <a className={s.text_btn}>ВСЕ ВАКАНСИИ</a>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CartsL;