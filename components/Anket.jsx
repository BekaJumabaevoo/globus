import React from "react";
import s from "../styles/anket.module.css";
const Anket = () => {
  const data = [
    {
      id: ".01",
      text: "Заполните регистрационную анкету на нашем сайте",
    },
    {
      id: ".02",
      text: "С вами свяжется наш менеджер для согласования ваших требований к работе",
    },
    {
      id: ".03",
      text: "Наши зарубежные представительства подбирают работу согласно ваших требований",
    },
    {
      id: ".04",
      text: "Готовим для вас необходимый пакет документов и составляем официальный контракт на работу",
    },
    {
      id: ".05",
      text: "Мы всегда с вами на связи и оказываем поддержку по месту работы",
    },
  ];
  return (
    <div className={s.anket_last}>
      <div className={s.anket}>
        <div className={s.ankets_description}>
          <h2 className={s.anket_title}>
            Как приступить к{" "}
            <span className={s.anket_subTitle}>сотрудничеству</span>
          </h2>
          <p className={s.anket_desc}>
            Всего 5 шагов к получению визы и работе в Европе
          </p>
        </div>

        <div className={s.anket_two}>
          {data.map((item , i) => {
            return (
              <div key={i} >
                <div className={s.anket_cart}>
                  <div className={s.anket_cart1}>{item.id}</div>
                  <p className={s.anket_cart2}>{item.text}</p>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Anket;
