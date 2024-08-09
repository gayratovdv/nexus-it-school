import React from "react";
import style from "./contact.module.css";
import Layout from "../../components/Layout/Layout"

const Contact = () => {
  return (
    <Layout>
      <div className={style["contact_body"]}>
        <div className={style["contact_box"]}>
          <h2 className={style["contact_h2"]}>Ro'yxatdan o'ting</h2>
          <input
            className={style["contact_input"]}
            type="text"
            placeholder="Ism"
            maxLength={26}
          />
          <input
            className={style["contact_input"]}
            type="text"
            placeholder="Familiya"
            maxLength={30}
          />{" "}
          <br />
          <input
            className={style["contact_input"]}
            type="email"
            placeholder="E-pochta manzili"
          />
          <input
            className={style["contact_input"]}
            type="number"
            placeholder="Telefon raqami"
            maxLength={16}
          />{" "}
          <br />
          <textarea
            className={style["contact_textarea"]}
            placeholder="Bu yerga yozing ..."
          ></textarea>{" "}
          <br />
          <button className={style["contact_btn"]}>Yuborish</button>
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
    </Layout>
  );
};

export default Contact;
