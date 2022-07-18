import React, {useState, useEffect} from "react";
import s from "../styles/form.module.css";
import InputMask from "react-input-mask";
import axios from "axios";


const Form = ({ modalState, setModal }) => {
  const [form, setForm] = useState({
    name: "", 
    surname: "",
    experience : "",
    city : "",
    age : "",
    gender : "",
    phone_number : "",
    question:""
  })


  function submitData(event){
    event.preventDefault();
    if(form.gender === ""){
       form.gender = "male"
    }else{
       form.gender
    }
    console.log(Number(form.phone_number))
    axios.post('https://7856-212-42-120-155.in.ngrok.io/api/v1/questionnaire/', form).then(res => {
      console.log(res);
    })
  }

  return (
    <>
      <div
        onClick={setModal}
        className={modalState ? "form_content_active" : "form_content"}
      >
        <div className={s.bc} onClick={e => e.stopPropagation()}>
          <form action="" method="post" className={s.form}>
            <h1 className={s.form_title}>Оставьте свою заявку</h1>
            <div className={s.form_group}>
              <label className={s.form_label}>Имя</label>
              <input onChange={e => setForm({
                ...form,
                name:e.target.value
              })}  type="text" className={s.form_input} />
            </div>
            <div className={s.form_group}>
              <label className={s.form_label}>Фамилия</label>
              <input onChange={e => setForm({
                ...form,
                surname:e.target.value
              })} type="text" className={s.form_input} />
            </div>

            <div className={s.form_group}>
              <label className={s.form_label}>Образование</label>
              <input onChange={e => setForm({
                ...form,
                experience:e.target.value
              })} type="text" className={s.form_input} />
            </div>
            <div className={s.form_group}>
              <label className={s.form_label}>Город</label>
              <input onChange={e => setForm({
                ...form,
                city:e.target.value
              })} type="text" className={s.form_input} />
            </div> 
            <div className={s.form_group}>
              <label className={s.form_label}>Возраст</label>
              <input onChange={e => setForm({
                ...form,
                age:e.target.value
              })} type="number" className={s.form_input} />
            </div>

            <div className={s.form_group}>
              <label className={s.form_label}>Пол</label>
              <select name="" id="" className={s.form_input} onChange={e => setForm({
                ...form,
                gender:e.target.value
              })} defaultValue="male">
                <option  value="male">Мужчина</option>
                <option value="woman">Женщина</option>
              </select>
            </div>

            <div className={s.form_group}>
              <label className={s.form_label}>Телефон</label>
              <input
              type="number" 
              onChange={e => setForm({
                ...form,
                phone_number:e.target.value
              })}
                placeholder="+996709849780"
                className={s.form_input}
              ></input>
            </div>

            <div className={s.form_group}>
              <label className={s.form_label}>Вопрос</label>
              <input onChange={e => setForm({
                ...form,
                question:e.target.value
              })} type="text" className={s.form_input} />
            </div>
            <button onClick={submitData} type="submit" className={s.form_btn}>
              Отправить
            </button>
            <button onClick={setModal} className={s.form_btn}>
              Отмена
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
