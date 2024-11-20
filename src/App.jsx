import "bootstrap/dist/css/bootstrap.min.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
import Main from "./components/Main";

function App() {
  return (
    <div className="container">
      <h1 className="d-flex justify-content-center my-4">Display Rate Currency</h1>
      <table className="table table-bordered table-striped table-hover border-dark">
        <thead className="text-center table-dark">
          <tr >
            <th scope="col">Currency</th>
            <th scope="col">We Buy</th>
            <th scope="col">Exchange Rate</th>
            <th scope="col">We Sell</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <Main />
        </tbody>
      </table>
      <div className="text-center my-5">
        <p>Rates are based from 1 USD.</p>
        <p>
          This Aplication uses API from{" "}
          <a href="https://currencyfreaks.com/" target="blank">
            https://currencyfreaks.com/
          </a>
        </p>
      </div>
    </div>
  );
}

export default App;
