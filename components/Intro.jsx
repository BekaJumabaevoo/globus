import React from 'react';
import Image from 'next/image';
import s from '../styles/intro.module.css'
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <div className={s.main} id={'#bla'}>
      <div className={s.container}>
        <div className={s.content}>
          <motion.div className={s.intro_main}  animate={{ x: [-200, 0] }}
            transition={{ ease: "easeOut", duration: 3 }}>

            <h1 className={s.intro_title}>
              Найдите идеальное <br /> место работы в Европе <br /> с Globus Consulting
            </h1>

            <p className={s.intro_desc}>
              Помогаем с трудоустройством в Европе гражданам Кыргызстана 
            </p>

            <button className={s.intro_btn}>
              ПОСМОТРЕТЬ ВАКАНСИИ
            </button>
            <div className={s.intro_photo}>

            </div>
          </motion.div>



          <motion.div className={s.intro_main_photo} animate={{ x: [200, 0] }}
            transition={{ ease: "easeOut", duration: 2 }}>

            <div className={s.intro_photo2}>

            </div>

            <div className={s.intro_photo3}>

            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;