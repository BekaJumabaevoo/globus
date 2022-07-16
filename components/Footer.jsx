import s from "../styles/footer.module.css";
import Link from "next/link";

//images
import Image from "next/image";
import logo from "../public/logo.jpg";
import facebook from "../public/facebook.svg";
import vk from "../public/vk.svg";
import youtube from "../public/youtube.svg";
import instagram from "../public/instagram.svg";

const Footer = () => {
  return (
    <footer className={s.footer} id={'#footer'}>
      <div className={s.footer__container}>
        <nav>
          <ul className={s.col__1}>
            <li>
              <Link href="/">
                <a>
                  <Image src={logo} alt="" width={100} height={100}></Image>
                </a>
              </Link>
            </li>
            <li>
              <p className={s.text}>
                Сервис поиска работы в Европе <br /> от прямых работодателей
              </p>
            </li>
            <li>
              <p className={s.text}>У вас появились вопросы?</p>
            </li>

            <li>
              <button className={s.footer__btn}>Связаться с нами</button>
            </li>
            <li className={s.logotypes}>
              <Image src={facebook} alt="" width={31} height={30}></Image>
              <Image src={vk} alt="" width={31} height={30}></Image>
              <Image src={youtube} alt="" width={31} height={30}></Image>
              <Image src={instagram} alt="" width={31} height={30}></Image>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className={s.col__2}>
            <h2>Информация</h2>
            <li>
              <p className={s.text}>Вакансии</p>
            </li>
            <li>
              <p className={s.text}> Стоимость услуг</p>
            </li>
            <li>
              <p className={s.text}>О компании</p>
            </li>
            <li>
              <p className={s.text}>Лицензия</p>
            </li>
            <li>
              <p className={s.text}>Важно знать</p>
            </li>
            <li>
              <p className={s.text}>Карта побыта</p>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className={s.col__3}>
            <li>
              <p className={s.text}>Оформление онлайн</p>
            </li>
            <li>
              <p className={s.text}> Отзывы</p>
            </li>
            <li>
              <p className={s.text}>Договор оферта</p>
            </li>
            <li>
              <p className={s.text}>Блог</p>
            </li>
            <li>
              <p className={s.text}>Контакты</p>
            </li>
          </ul>
        </nav>

        <nav>
          <div className={s.col__4}>
            <h1 className={s.title}>Свяжитесь с нами</h1>

            <h2 className={s.gmail__address}>
              email address
              <Link className={s.gmail__link} href="/">
                <a>info@europework.pro</a>  
              </Link>
            </h2>
            <h2 className={s.adres__home}>
              Адрес <br></br> Казахстан
              <Link className={s.link__adres} href='/'>
                <a>Алматы, улица Абиша Кекильбайулы, 34, бизнес-центр Capital Tower
                5 этаж 507 офис</a>
              </Link>
            </h2>
          
            
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
