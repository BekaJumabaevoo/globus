import React, { useEffect, useState } from 'react';
import s from '../styles/help.module.css'
import { motion } from "framer-motion";


const Helpers = () => {

   return (
    <div className={s.help_content}>

      <motion.div className={s.help_photo}animate={{ x: [-200, 0] }}
        transition={{ ease: "easeOut", duration: 3 }}   >
      </motion.div>

      <div className={s.help_desg}>
        <h1 className={s.title}>
          Помогаем с трудоустройством за границей с 2015 года
        </h1>
        <div className={s.items}>
          <div className={s.line}></div>
          <p className={s.item}>На протяжении этого времени с нашей помощью работу нашли тысячи граждан Украины, Казахстана, Узбекистана, Киргизии, Таджикистана, Белоруссии, Туркменистана, России.</p>
        </div>
        <h5 className={s.help_text}>
          Мы работаем полностью официально, имеем лицензию на оказание услуг. Предоставление информационно-консультационных услуг, оказывается на основании заключенного договора. Мы ориентируемся на полное соблюдение законодательства, поэтому предлагаем только легальную работу без обмана и каких-либо нарушений.
        </h5>
      </div>
    </div>
  );
};

export default Helpers;