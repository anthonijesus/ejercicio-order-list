import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
//import Home from "./Components/Home/Home.jsx";
import Products from "./Components/Products/Products.jsx";
import Header from "./Components/Header/Header.jsx";
import Orders from "./Components/Orders/Orders.jsx";

function App() {
  const initialState = [];
  const [foot, setFoot] = useState(initialState);

  useEffect(() => {
    const fetchFoots = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        //console.log(data);
        setFoot(data);
      } catch (error) {
        console.log("Error al traer los datos de la API", error);
      }
    };

    fetchFoots();
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.titulo}>
        <h3>Menú del día</h3>
      </div>
      <section className={styles.components}>
        <div className={styles.card}>
          {foot.map((foots) => {
            return (
              <div key={foots.id}>
                <Products params={foots} />
              </div>
            );
          })}
        </div>

        <div className={styles.tabla}>
          <section>
            <h3>Su orden</h3>
          </section>
          <section>
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Total</th>
                  <th>#</th>
                </tr>
              </thead>
              <tbody>
                {foot.map((orders) => {
                  return <Orders key={orders.id} params={orders} />;
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="3">Total</th>
                  <th>$15.95</th>
                </tr>
              </tfoot>
            </table>
          </section>
        </div>
      </section>
    </div>
  );
}

export default App;
