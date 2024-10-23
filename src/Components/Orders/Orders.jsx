import React from "react";
import styles from "./Orders.module.css";

const orders = ({ params }) => {
  return (
    <tr key={params}>
      <td>
        <img src={params.image} alt="" />
      </td>
      <td>{params.cantidad}</td>
      <td>{params.price}</td>
      <td>{params.price}</td>
      <td>
        <button>Quitar</button>
      </td>
    </tr>
  );
};

export default orders;
