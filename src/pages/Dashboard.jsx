import React from "react";
import CardAmount from "../components/Card/CardAmounts";
import CardGraphics from "../components/Card/CardGraphics";
import Graphic from "../components/Card/Graphic";
import Botton from "../components/Botton";
import { useState } from "react";
import BottonGroupDate from "../components/Card/BottonGroupDate";
const Dashboard = () => {
  const montos = [
    {
      id: 1,
      name: "valentino",
      income: [{ salary: 150000 }, { bonus: 20000 }],
      egress: [{ spend: 100000 }],
    },
  ];
  const [amount, setAmount] = useState(montos[0].income);
  function income() {
    setAmount(montos[0].income);
  }

  function egress() {
    setAmount(montos[0].egress);
  }

  return (
    <section className="dashboard">
      <article className="dashboard-first-article">
        <CardAmount egreso={true} />
        <CardAmount egreso={false} />
        <CardAmount egreso={false} />
      </article>

      <article className="dashboard-second-article">
        <div className="cardGraphics-div">
          <h2>Mes</h2>
          <Botton />
        </div>
        <section className="dashboard-second-article-section">
          <div className="BottonGroup">
            <BottonGroupDate />
          </div>

          <div className="tabs">
            <button
              onClick={() => {
                income();
              }}
            >
              Ingreso{" "}
              {amount.map((p) => {
                return <span>{p.spend || p.salary}</span>;
              })}
            </button>
            <button
              onClick={() => {
                egress();
              }}
            >
              Egreso
            </button>
          </div>

          <CardGraphics data={amount} />
        </section>
      </article>

      <h2>Meses anteriores</h2>
      <article className="dashboard-third-article">
        <Graphic p={null}datas={amount}/>
        <Graphic p={null}datas={amount}/>
        <Graphic p={null}datas={amount}/>
      </article>
    </section>
  );
};

export default Dashboard;
