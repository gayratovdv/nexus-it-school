import React from "react";
import "./headerForm.css";
import Container from "../Container/Container";

const HeaderForm = () => {
  return (
    <Container>
      <div className="header__content">
        <div className="header__content--wrapper">
          <h1 className="header__content--wrapper-title">
            <span>Nexus</span> bu Birlik, <span>Nexus</span> bu Uzviylik va{" "}
            <span>Nexus</span> bu Birlashish! Siz
            <span> Nexus</span>da o'z kasbingizni topaolasiz
          </h1>
        </div>
        <div className="header__content--wrapper">
          <form>
            <h4>
              Hoziroq ro'yxatdan o'ting va har xil chegirmalarga ega bo'ling!
            </h4>
            <input type="text" placeholder="Ismingizni kiriting" />
            <input type="number" placeholder="Telefon raqamingizni kiriting" />
            <button className="header__content--wrapper-btn">
              Ro'yxatdan o'ting
            </button>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default HeaderForm;
