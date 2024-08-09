import React from "react";
import Layout from "../../components/Layout/Layout";
import "./home.css";
import HeaderForm from "../../components/HeaderForm/HeaderForm";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";

const Home = () => {
  const data = [
    {
      id: 0,
      title: "Bepul koworking",
      subtitle: "24/7 formatida tun-u kun ishlaydigan bepul kovorking va wifi.",
      icon: <i class="fa-solid fa-circle-half-stroke"></i>
    },
    {
      id: 1,
      title: "Sifatli ta'lim",
      subtitle: "Doimiy yangilanib boradigan kurslar va katta tajribaga ega ustozlar.",
      icon: <i class="fa-regular fa-star"></i>
    },
    {
      id: 2,
      title: "Doimiy musobaqalar",
      subtitle: "Dasturlash, dizayn va marketing sohalari bo‘yicha haftalik sovrinli musobaqalar.",
      icon: <i class="fa-solid fa-bolt-lightning"></i>
    },
    {
      id: 3,
      title: "Bepul mahorat darslari",
      subtitle: "Soha mutaxassislari bilan doimiy o‘tkaziladigan bepul master-klasslar.",
      icon: <i class="fa-solid fa-brain"></i>
    },
    {
      id: 4,
      title: "Ish taklif qilish kafolati",
      subtitle: "Dasturlash, dizayn va marketing sohalari bo‘yicha haftalik sovrinli musobaqalar.",
      icon: <i class="fa-solid fa-spa"></i>
    },
    {
      id: 5,
      title: "Sertifikat",
      subtitle: "“Nexus” intensiv kurslarni muvaffaqiyatli bitirgan o‘quvchilarga ish taklif qilish kafolatini beradi.",
      icon: <i class="fa-solid fa-certificate"></i>
    },
  ];

  return (
    <div>
      <Layout>
        <header>
          <HeaderForm />
        </header>
        <main>
          <section className="hero">
            <Container>
              <h2>Nima uchun “Nexus”da o‘qish kerak?</h2>
              <div className="hero__cards">
                {data.map((item) => {
                  return <Card key={item.id} data={item} />;
                })}
              </div>
            </Container>
          </section>
        </main>
      </Layout>
    </div>
  );
};

export default Home;
