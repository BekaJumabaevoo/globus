import React from "react";
import s from "../styles/advantages.module.css";
import advantages from "../public/advantages.svg";
import visa from "../public/visa.svg";
import insurance from "../public/insurance.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const Advantages = () => {
  const rightAnimation = {
    hidden: {
      x: 900,
      opacity: 0,
    },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <motion.div
      className={s.advantages}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1 }}
      id={"#etaps"}
    >
      <div className={s.container}>
        <motion.h2 className={s.advantages_title} variants={rightAnimation}>
          Что вы получите с Globus Consulting?
        </motion.h2>
        <div className={s.advantages_block}>
          <motion.div
            custom={3}
            className={s.advantages_item}
            variants={rightAnimation}
          >
            <h1 className={s.item_step}>1</h1>
            <Image src={advantages} alt="advantages" width={80} height={80} />
            <h3 className={s.item_heading}>Подбор вакансии</h3>
            <p>
              Индивидуальный подбор вакансий согласно ваших условий. Все
              вакансии от легально работающих компаний в Европе.
            </p>
          </motion.div>
          <motion.div
            custom={6}
            className={s.advantages_item}
            variants={rightAnimation}
          >
            <h1 className={s.item_step}>2</h1>
            <Image src={visa} alt="visa" width={80} height={80} />
            <h3 className={s.item_heading}>Рабочая виза</h3>
            <p>
              Оформление рабочих виз под ключ. Заполнение визовых анкет для
              подачи документов в визовые центры.
            </p>
          </motion.div>
          <motion.div
            custom={8}
            className={s.advantages_item}
            variants={rightAnimation}
          >
            <h1 className={s.item_step}>3</h1>
            <Image src={insurance} alt="insurce" width={80} height={80} />
            <h3 className={s.item_heading}>Страхование</h3>
            <p>
              Помощь в оформлении страховых медицинских полисов для легального
              пребывания и работы за границей.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Advantages;
