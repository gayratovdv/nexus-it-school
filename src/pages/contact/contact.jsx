import React, { useRef } from "react";
import style from "./contact.module.css";
import Layout from "../../components/Layout/Layout";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";

const Contact = () => {
  const inputRef = useRef(null);

  const handleChange = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <Layout>
      <div className={style["contact_body"]}>
        <Container>
          <div className={style["contact_content"]}>
            <div className={style["contact_box"]}>
              <h2 className={style["contact_h2"]}>Ro'yxatdan o'ting</h2>
              <p className={style["contact_p"]}>
                Biz har qanday taklifga yoki shunchaki suhbatlashishga
                tayyormiz.
              </p>
              <div className={style["contact_text"]}>
                <span className={style["contact_span"]}>
                  Manzil:{" "}
                  <p className={style["contact_subtitle"]}>
                    Chilonzor Qutbiniso <br />
                    76P4+R39, 100113, <br /> Toshkent
                  </p>
                </span>
                <span className={style["contact_span"]}>
                  E-pochta:{" "}
                  <p className={style["contact_subtitle"]}>
                    gayratovjavohir90@gmail.com <br /> mahmudjonovm16@gmail.com
                  </p>
                </span>
                <span className={style["contact_span"]}>
                  Tel:{" "}
                  <p className={style["contact_subtitle"]}>
                    +998 99 728 86 75 <br />
                    +998 93 514 06 10
                  </p>
                </span>
              </div>
              <input
                ref={inputRef}
                className={style["contact_input"]}
                type="text"
                placeholder="Ism"
                maxLength={26}
              />
              <input
                ref={inputRef}
                className={style["contact_input"]}
                type="text"
                placeholder="Familiya"
                maxLength={30}
              />{" "}
              <br />
              <input
                ref={inputRef}
                className={style["contact_input"]}
                type="email"
                placeholder="E-pochta manzili"
              />
              <input
                ref={inputRef}
                className={style["contact_input"]}
                type="number"
                placeholder="Telefon raqami"
                maxLength={16}
              />{" "}
              <br />
              <textarea
                ref={inputRef}
                className={style["contact_textarea"]}
                placeholder="Bu yerga yozing ..."
              ></textarea>{" "}
              <br />
              <button onClick={handleChange} className={style["contact_btn"]}>
                Yuborish
              </button>{" "}
              <br />
              <span className={style["contact_span"]}>
                Bizni shu yerda kuzatib boring !
              </span>
              <div className={style["contact_text"]}>
                <Link
                  to={"https://www.facebook.com/?locale=ru_RU"}
                  target="_blanck"
                >
                  <p className={style["contact_p"]}>
                    Facebook <i class="fa-brands fa-facebook"></i>
                  </p>
                </Link>
                <Link to={"https://www.instagram.com/"} target="_blanck">
                  <p className={style["contact_p"]}>
                    Instagram <i class="fa-brands fa-instagram"></i>
                  </p>
                </Link>
                <Link to={"https://t.me/anizam008"} target="_blanck">
                  <p className={style["contact_p"]}>
                    Telegram <i class="fa-brands fa-telegram"></i>
                  </p>
                </Link>
              </div>
            </div>
            <div>
              <iframe
                className={style["contact_map"]}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.003597409745!2d69.20266457587329!3d41.287026171312846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba28509139f%3A0xc136ab2e7dfdd14a!2sMARS%20IT%20SCHOOL!5e0!3m2!1sru!2s!4v1723112385865!5m2!1sru!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Contact;
