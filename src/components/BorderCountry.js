/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { Context } from "../App";

const BorderCountry = (props) => {
  const { border } = props;
  const [theme] = useContext(Context);

  const [borderCountry, setBorderCountry] = useState("");

  useEffect(() => {
    fetchData();
  }, [border]);

  const fetchData = async () => {
    try {
      const data = await fetch(
        `https://restcountries.com/v3.1/alpha/${border}`
      );

      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await data.json();

      setBorderCountry(json[0].name.common);
    } catch (error) {
      setBorderCountry(error.message);
    }
  };

  return (
    <button
      className={
        "bg-white py-2 px-4 text-sm font-light rounded-sm text-center align-middle shadow-lg " +
        theme.theme
      }
    >
      {borderCountry}
    </button>
  );
};

export default BorderCountry;
