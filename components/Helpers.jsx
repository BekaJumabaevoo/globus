import React, { useEffect, useState } from "react";
import s from "../styles/help.module.css";
import { motion } from "framer-motion";

  const axios = require('axios');

const Helpers = () => {
  const rightAnimation = {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };

  const leftAnimation = {
    hidden: {
      y: -300,
      opacity: 0,
      animate: 1,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };

  return (
    <motion.div
      className={s.help_content}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.3 }}
    >
      <motion.div
        variants={leftAnimation}
        className={s.help_photo}
      ></motion.div>

      <motion.div variants={rightAnimation} className={s.help_desg}>
        <h1 className={s.title}>
          Помогаем с трудоустройством за границей с 2015 года
        </h1>
        <div className={s.items}>
          <div className={s.line}></div>
          <p className={s.item}>
            На протяжении этого времени с нашей помощью работу нашли тысячи
            граждан Кыргызстана.
          </p>
        </div>
        <h5 className={s.help_text}>
          Мы работаем полностью официально, имеем лицензию на оказание услуг.
          Предоставление информационно-консультационных услуг, оказывается на
          основании заключенного договора. Мы ориентируемся на полное соблюдение
          законодательства, поэтому предлагаем только легальную работу без
          обмана и каких-либо нарушений.
        </h5>
      </motion.div>
    </motion.div>
  );
};

export default Helpers;
