import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="header">
      <div className="container">
        <motion.span className="logo" animate={{ scale: 1.2 }} transition={{ duration: 0.5 }}>
          <Image
            className="li_after"
            src="/logo.png"
            alt="logo"
            width="68"
            height="68"
          />
        </motion.span>
        <ul className="ul_nav">
          <motion.li
            className="li_nav"
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/">
              <a>Вакансии</a>
            </Link>
            <ul className="ul_nav_hover">
              <li className="li_nav active">
                <Link href="/ok">
                  <a>Вакансии в Польше</a>
                </Link>
              </li>
              <li className="li_nav active">
                <Link href="/ok">
                  <a>Вакансии в Литве</a>
                </Link>
              </li>
            </ul>
          </motion.li>
          <motion.li
            className="li_nav"
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/about">
              <a>Стоимость услуг</a>
            </Link>
          </motion.li>
          <motion.li
            className="li_nav"
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog/hello-world">
              <a>О компании</a>
            </Link>
          </motion.li>
          <motion.li
            className="li_nav"
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog/hello-world">
              <a>Отзывы</a>
            </Link>
          </motion.li>
          <motion.li
            className="li_nav"
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog/hello-world">
              <a>Блог</a>
            </Link>
          </motion.li>
          <motion.li
            className="li_nav"
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog/hello-world">
              <a>Контакты</a>
            </Link>
          </motion.li>
        </ul>

        <motion.button
          className="nav_btn"
          animate={{ scale: 1.2 }}
          transition={{ duration: 0.5 }}
          >
          СВЯЗАТЬСЯ С НАМИ
        </motion.button>

        <div className="hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>
          <ul className="menu__box">
            <Link href="vacansy">
              <a className="menu__item">
                Вакансии
              </a>
            </Link>
            <Link href="compania">
              <a className="menu__item">
              О компании
              </a>
            </Link>
            <Link href="coment">
              <a className="menu__item">
                Отзывы
              </a>
            </Link>
            <Link href="/blog">
              <a className="menu__item">
                Блог
              </a>
            </Link>
            <Link href="/contact">
              <a className="menu__item">
                Контакты
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
