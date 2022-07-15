import React from 'react';
import s from '../styles/steps.module.css'

const Steps = () => {
  return (
    <div className={s.steps}>
      <div className={s.container}>
        <div className={s.steps_desc}>
          <div className={s.steps_col}>
            <p className={s.steps_sub}></p>
            <h2 className={s.steps_title}>Всего 5 шагов к получению визы и работе в Европе</h2>
          </div>
          <div className={s.steps_col}></div>
        </div>
      </div>
    </div>
  );
};

export default Steps;