import React, { useState } from "react";
import Image from "next/image";
// import Link from "next/link";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import Form from "./Form";
const Navbar = () => {
  const [isActive, setActive] = useState(false);

  // console.log(isActive)

  const [modal, setModal ] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const toogleModal = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setModal(!modal)
  }

  return (
    <>
      <div className="header">
        <div className="container">
          <motion.span
            className="logo"
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
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
              <span href="#bla">Вакансии</span>

              <ul className="ul_nav_hover">
                <li className="li_nav active">
                  {/* <Link href="/ok"> */}
                  <Link to="#polsha" smooth={true} duration={1000}>
                    Вакансии в Польше
                  </Link>
                  {/* </Link> */}
                </li>
                <li className="li_nav active">
                  {/* <Link href="/ok"> */}
                  <Link to="#latvia" smooth={true} duration={1000}>
                    Вакансии в Литве
                  </Link>
                  {/* </Link> */}
                </li>
              </ul>
            </motion.li>
            <motion.li
              className="li_nav"
              animate={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              {/* <Link href="/blog/hello-world"> */}
              <Link to="#bla" smooth={true} duration={1000}>
                О компании
              </Link>
              {/* </Link> */}
            </motion.li>
            <motion.li
              className="li_nav"
              animate={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              {/* <Link href="/blog/hello-world"> */}
              <Link to="#etaps" smooth={true} duration={1000}>
                Этапы работы
              </Link>
              {/* </Link> */}
            </motion.li>

            <motion.li
              className="li_nav"
              animate={{ scale: 1.2 }}
              transition={{ duration: 0.5 }}
            >
              {/* <Link href="/blog/hello-world"> */}
              <Link to="#footer" smooth={true} duration={1000}>
                Контакты
              </Link>
              {/* </Link> */}
            </motion.li>
          </ul>

          <motion.button
            onClick={toogleModal}
            className="nav_btn"
            animate={{ scale: 1.2 }}
            transition={{ duration: 0.5 }}
          >
            СВЯЗАТЬСЯ С НАМИ
          </motion.button>

          <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label onClick={toggleClass} className="menu__btn">
              <span></span>
            </label>
            <ul className={isActive ? "menu_lox_kalys228" : "menu__box"}>
              {/* <Link href="vacansy"> */}

              <Link
                onClick={toggleClass}
                className="menu__item"
                to="#polsha"
                smooth={true}
                duration={1000}
              >
                Вакансии
              </Link>

              {/* </Link> */}
              {/* <Link href="compania"> */}

              <Link
                onClick={toggleClass}
                className="menu__item"
                to="#bla"
                smooth={true}
                duration={1000}
              >
                {" "}
                О компании
              </Link>

              {/* </Link> */}
              {/* <Link href="coment"> */}

              <Link
                onClick={toggleClass}
                className="menu__item"
                to="#etaps"
                smooth={true}
                duration={1000}
              >
                Этапы работы
              </Link>

              {/* </Link> */}
              {/* <Link href="/blog"> */}

              {/* </Link> */}
              {/* <Link href="/contact"> */}

              <Link
                onClick={toggleClass}
                className="menu__item"
                to="#footer"
                smooth={true}
                duration={1000}
              >
                {" "}
                Контакты
              </Link>

              {/* </Link> */}
            </ul>
          </div>
        </div>
      </div>

      <Form modalState={modal} setModal={toogleModal} />
    </>
  );
};

export default Navbar;
