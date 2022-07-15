import React from 'react';
import s from '../styles/advantages.module.css'
import advantages from '../public/advantages.svg'
import visa from '../public/visa.svg'
import insurance from '../public/insurance.svg'
import Image from 'next/image'

const Advantages = () => {
  return (
    <div className={s.advantages}>
      <div className={s.container}>
        <h2 className={s.advantages_title}>Что вы получите с Globus Consulting?</h2>
        <div className={s.advantages_block}>
          <div className={s.advantages_item}>
            <h1 className={s.item_step}>1</h1>
            <Image src={advantages} alt="advantages" width={80} height={80}/>
            <h3 className={s.item_heading}>Подбор вакансии</h3>
            <p>Индивидуальный подбор вакансий согласно ваших условий. Все вакансии от легально работающих компаний в Европе.</p>
          </div>
          <div className={s.advantages_item}>
            <h1 className={s.item_step}>2</h1>
            <Image src={visa} alt="visa" width={80} height={80}/>
            <h3 className={s.item_heading}>Рабочая виза</h3>
            <p>Оформление рабочих виз под ключ. Заполнение визовых анкет для подачи документов в визовые центры.</p>
          </div>
          <div className={s.advantages_item}>
            <h1 className={s.item_step}>3</h1>
            <Image src={insurance} alt="insurce" width={80} height={80}/>
            <h3 className={s.item_heading}>Страхование</h3>
            <p>Помощь в оформлении страховых медицинских полисов для легального пребывания и работы за границей.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;