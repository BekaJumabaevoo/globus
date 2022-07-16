import s from "../styles/footer.module.css";
import Link from "next/link";

import Image from "next/image";

import instagram from "../public/instagram.png";
import telegram from "../public/telegram.png";

const Footer = () => {
  return (
    <div className={s.footer} id={'#footer'}>
      <footer className={s.content}>
        <div className={s.main_footer}>
          <div className={s.akbar_krasavchik}>
            <div className={s.first_section}>
              <a className={s.foter_logo}>
                <Image src="/logo2.png" alt="logo" width="300" height="96" />
              </a>
              <p className={s.footer_subtitle}>
                Сервис поиска работы в Европе от прямых работодателей
              </p>
              <p className={s.footer_question}>У вас появились вопросы?</p>
              <button className={s.btn}>СВЯЗАТЬСЯ C НАМИ</button>
              <div className={s.footer_list}>
                <li className={s.footer_list_item}>
                  <a href="https://www.instagram.com/globusconsulting/">
                    <Image
                      src={instagram}
                      alt="instgram"
                      width={31}
                      height={30}
                    ></Image>
                  </a>
                </li>
                <li className={s.footer_list_item}>
                  <a href="https://web.telegram.org/z/#5469661933">
                    <Image
                      src={telegram}
                      alt="telegram"
                      width={31}
                      height={30}
                    ></Image>
                  </a>
                </li>
              </div>
            </div>
            <div className={s.second_section}>
              <h3 className={s.foter_title}>Информация</h3>
              <div className={s.section_block}>
                <li className={s.li}>
                  <Link href="/vacancies">Вакансии</Link>
                </li>
                <li className={s.li}>
                  <Link href="/company">О компании</Link>
                </li>
                <li className={s.li}>
                  <Link href="/licenсe">Лицензия</Link>
                </li>
                <li className={s.li}>
                  <Link href="/contacts">Контакты</Link>
                </li>
              </div>
            </div>
            <div className={s.three_section}>
              <h3 className={s.foter_title}>Свяжитесь с нами</h3>
              <p className={s.adres_title}>EMAIL АДРЕС</p>
              <a href="globusconsulting@mail.ru">
                <b>globusconsulting@mail.ru</b>
              </a>
              <p className={s.adres_title}>АДРЕС</p>
              <div>
                <p>Бишкек</p>
                <p>
                  <a>
                    <b>ул. Ибраимова 115/4</b>
                  </a>
                </p>
                <p>Ош</p>
                <p>
                  <a>
                    <b>ул. Ленина 316</b>
                  </a>
                </p>
              </div>
              <div></div>
            </div>
          </div>

          <hr className={s.mikki_nu_soz_jok}/>

          <div className={s.han_krasavchik}>
            <p className={s.adres_title}>ТЕЛЕФОН</p>
            <div className={s.beka_krasavchik}>
              <p>Бишкек</p>
              <p>
                <a href="">
                  <b>0700733366</b>
                </a>
              </p>
              <p>
                <a href="">
                  <b>0557713366</b>
                </a>
              </p>
              <p>
                <a href="">
                  <b>0777713366</b>
                </a>
              </p>
            </div>
            <div>
              <p>Ош</p>
              <p>
                <a href="">
                  <b>0703156066</b>
                </a>
              </p>
              <p>
                <a href="">
                  <b>0778256336</b>
                </a>
              </p>
            </div>
            <div>
              <p>Жалал-Абад</p>
              <p>
                <a href="">
                  <b>0556007284</b>
                </a>
              </p>
              <p>
                <a href="">
                  <b>0777085085</b>
                </a>
              </p>
            </div>
            <div>
              <p>Каракол</p>
              <p>
                <a href="">
                  <b>0709120621</b>
                </a>
              </p>
              <p>
                <a href="">
                  <b>0557713366</b>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
