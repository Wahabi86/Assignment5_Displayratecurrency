import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {
  const [datas, setDatas] = useState({});
  
  useEffect(() => {
    // mengambil api dari env
    const url = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;
    axios
      .get(url, {
        params: {
          apikey: apiKey,
          symbols: "CAD,IDR,JPY,CHF,EUR,GBP",
        },
      })
      .then((res) => {
        setDatas(res.data.rates);
      })
      .catch((eror) => {
        console.log(eror.message);
      });
  }, []);

  return (
    <>
      {Object.entries(datas).map(([currency, rate]) => (
        <tr key={currency}>
          <th scope="row">{currency}</th>
          <td>{(rate * 1.05).toFixed(4)}</td>
          <td>{rate}</td>
          <td>{(rate * 0.95).toFixed(4)}</td>
        </tr>
      ))}
    </>
  );
};

export default Main;
