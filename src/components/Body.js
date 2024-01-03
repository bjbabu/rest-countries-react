import { useState, useEffect, useContext } from "react";
import { Context } from "../App";
import Bars from "./Bars";
import Countries from "./Countries";

const Body = () => {
  const [theme] = useContext(Context);

  const [searchCountry, setSearchCountry] = useState("");

  const [listOfCountries, setListOfCountries] = useState([]);

  const [error, setError] = useState(false);

  // Region useState
  const [regionName, setRegionName] = useState("Filter by Region");
  //SubRegion useState
  const [subRegionName, setSubRegionName] = useState("Sub Regions");
  //Sort by useState
  const [sortByOption, setSortByOption] = useState("Sort By");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://restcountries.com/v3.1/all");

      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await data.json();

      setListOfCountries(json);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      id="container"
      className={
        "px-4 pt-24 desktop:h-dvh desktop:px-0 desktop:pt-28 " +
        theme.themeBackground
      }
    >
      <Bars
        listOfCountries={listOfCountries}
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
        regionName={regionName}
        setRegionName={setRegionName}
        subRegionName={subRegionName}
        setSubRegionName={setSubRegionName}
        sortByOption={sortByOption}
        setSortByOption={setSortByOption}
      />
      <Countries
        error={error}
        listOfCountries={listOfCountries}
        searchCountry={searchCountry}
        regionName={regionName}
        subRegionName={subRegionName}
        sortByOption={sortByOption}
      />
    </div>
  );
};

export default Body;
