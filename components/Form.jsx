import React from 'react';
import s from '../styles/form.module.css'
import InputMask from 'react-input-mask';

const Form = () => {
  return (
    <div className={s.form_content}>

      <form action="" method="post" className={s.form}>
      <h1 className={s.form_title}>Оставьте свою заявку</h1>
        <div className={s.form_group}>
          <label className={s.form_label}>Имя</label>
          <input type="text" className={s.form_input}/>
        </div>
        <div className={s.form_group}>
          <label className={s.form_label}>Фамилия</label>
          <input type="text"  className={s.form_input}/>
        </div>

        <div className={s.form_group}>
          <label className={s.form_label}>Образование</label>
          <input type="text"  className={s.form_input}/>
        </div>
        <div className={s.form_group}>

          <label className={s.form_label}>Город</label>
          <input type="text"  className={s.form_input}/>
        </div>
        <div className={s.form_group}>
          <label className={s.form_label}>Возраст</label>
          <input type="text" className={s.form_input}/>
        </div>

        <div className={s.form_group}>
          <label className={s.form_label}>Пол</label>
          <select name="" id="" className={s.form_input}>
            <option value="">Мужчина</option>
            <option value="">Женщина</option>
          </select>
        </div>

        <div className={s.form_group}>
          <label className={s.form_label}>Телефон</label>
          <InputMask mask="0(999)999-999" className={s.form_input}></InputMask>
        </div>
        <button type="submit" className={s.form_btn}>Отправить</button>
      </form>
    </div>
  );
};

export default Form;