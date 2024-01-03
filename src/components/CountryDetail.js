/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CountryDetailsPage from "./CountryDetailsPage";
import ShimmerDetail from "./ShimmerDetail";

const CountryDetail = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, [id]);

  // const [countryId, setCountryId] = useState("");
  // setCountryId(id);

  const [countryDetails, setCountryDetails] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);

      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await data.json();

      setCountryDetails(json);
    } catch (error) {
      setCountryDetails(error.message);
    }
  };

  if (countryDetails.length === 0) {
    return <ShimmerDetail />;
  }
  if (countryDetails.length !== 0) {
    let currencyArray = Object.values(countryDetails[0].currencies);
    let languagesArray = Object.values(countryDetails[0].languages).sort();
    let bordersArray = countryDetails[0].borders;

    return (
      <CountryDetailsPage
        countryDetails={countryDetails}
        currencyArray={currencyArray}
        languagesArray={languagesArray}
        bordersArray={bordersArray}
      />
    );
  }

  // const currencyArray = Object.values(countryDetails[0].currencies);
  // const languagesArray = Object.values(countryDetails[0].languages).sort();
  // const bordersArray = countryDetails[0].borders;
};

export default CountryDetail;
