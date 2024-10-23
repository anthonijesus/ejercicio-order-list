import React from "react";
import styles from "./Products.module.css";

const products = ({ params }) => {
  return (
    <main className={styles.products}>
      <img className={styles.image} src={params.image} alt={params.product} />
      <h4>{params.product}</h4>
      <p>Price: {params.price}</p>
      <p>Stock: {params.stock}</p>
      <button>Agregar al carrito</button>
    </main>
  );
};

export default products;
