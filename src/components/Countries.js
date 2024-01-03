import Country from "./Country";
import Shimmer from "./Shimmer";
import Error from "./Error";
import { Context } from "../App";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import { useState } from "react";

const Countries = (props) => {
  const {
    error,
    listOfCountries,
    searchCountry,
    regionName,
    subRegionName,
    sortByOption,
  } = props;

  const [theme] = useContext(Context);

  if (error) {
    return (
      <div
        id="countries"
        className="realtive bg-stone-200 text-9xl text-red-600 font-extrabold h-96 px-9 desktop:px-0 mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-24 rounded-lg "
      >
        ERROR
        <Error />
      </div>
    );
  }

  if (listOfCountries.length === 0) {
    return (
      <div
        id="countries"
        className="px-9 desktop:px-20 mt-8 flex flex-wrap justify-between items-center gap-x-4 gap-y-24"
      >
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
      </div>
    );
  }

  let filteredCountries = listOfCountries
    .filter((country) => {
      if (regionName === "Filter by Region") {
        return country;
      }
      return country.region === regionName;
    })
    .filter((country) => {
      if (subRegionName === "Sub Regions") {
        return country;
      }
      return country.subregion === subRegionName;
    })
    .filter((country) => {
      return country.name.common
        .toLowerCase()
        .includes(searchCountry.toLowerCase());
    });

  let sortedCountries;

  if (sortByOption === "Population ASC") {
    sortedCountries = filteredCountries.slice().sort((countryA, countryB) => {
      return countryA.population - countryB.population;
    });
  } else if (sortByOption === "Population DSC") {
    sortedCountries = filteredCountries.slice().sort((countryA, countryB) => {
      return countryB.population - countryA.population;
    });
  } else if (sortByOption === "Area ASC") {
    sortedCountries = filteredCountries.slice().sort((countryA, countryB) => {
      return countryA.area - countryB.area;
    });
  } else if (sortByOption === "Area DSC") {
    sortedCountries = filteredCountries.slice().sort((countryA, countryB) => {
      return countryB.area - countryA.area;
    });
  } else {
    sortedCountries = filteredCountries;
  }

  sortedCountries.filter((country) => {
    return country.name.common
      .toLowerCase()
      .includes(searchCountry.toLowerCase());
  });

  if (sortedCountries.length === 0) {
    return (
      <div
        id="countries"
        className="px-9 desktop:px-0 mt-8 flex flex-wrap justify-center items-center gap-x-4 gap-y-24 rounded-lg bg-gradient-to-r from-indigo-200 from-10% via-sky-300 via-30% to-emerald-400 to-90%"
      >
        <div className="h-1/2 w-1/2 text-3xl text-indigo-900 font-semibold backdrop-blur-sm bg-white/30 flex flex-wrap justify-center items-center rounded-md shadow-2xl">
          No country found in this region!!
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="countries"
        className={
          "px-9 bg-red-400 desktop:px-20 mt-8 flex flex-wrap justify-between items-center gap-x-4 gap-y-24 " +
          theme.themeBackground
        }
      >
        {sortedCountries.map((country) => (
          <Link to={"/country/" + country.cca3}>
            <Country countryData={country} />
          </Link>
        ))}
      </div>
    );
  }
};

export default Countries;
