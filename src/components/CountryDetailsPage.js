import { Link } from "react-router-dom";
import BorderCountry from "./BorderCountry";
import { Context } from "../App";
import { useContext } from "react";

const CountryDetailsPage = (props) => {
  const { countryDetails, currencyArray, languagesArray, bordersArray } = props;

  const [theme] = useContext(Context);

  return (
    <div
      className={
        " desktop:h-screen  px-7 desktop:px-20 pt-28 " + theme.themeBackground
      }
    >
      <Link to={"/"}>
        <button
          className={
            "h-8 desktop:h-10 w-4/12 desktop:w-36 px-6 desktop:px-11 mt-2 desktop:mt-12 bg-white text-sm font-light flex flex-wrap  justify-between items-center shadow-lg " +
            theme.theme
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={"w-4 " + theme.theme}
          >
            <path
              d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
              data-name="4-Arrow Left"
            />
          </svg>
          Back
        </button>
      </Link>

      <div
        className={"my-16 desktop:my-20 desktop:flex " + theme.themeBackground}
      >
        <div className=" desktop:w-6/12">
          <img
            className="object-fill object-center h-56 desktop:h-96 w-full desktop:w-11/12"
            src={countryDetails[0].flags.png}
            alt="flag"
          />
        </div>
        <div className="py-12  desktop:w-6/12 desktop:ps-12">
          <div className=" desktop:w-full desktop:flex desktop:justify-between">
            <div>
              <h2 className=" text-2xl font-semibold desktop:text-3xl">
                {countryDetails[0].name.common}
              </h2>
              <ul className="my-5 text-sm flex flex-col gap-y-3">
                <li>
                  Native Name:{" "}
                  <span className=" font-light">
                    {countryDetails[0].altSpellings[1]}
                  </span>
                </li>
                <li>
                  Population:{" "}
                  <span className=" font-light">
                    {countryDetails[0].population}
                  </span>
                </li>
                <li>
                  Region:{" "}
                  <span className=" font-light">
                    {countryDetails[0].region}
                  </span>
                </li>
                <li>
                  Region:{" "}
                  <span className=" font-light">
                    {countryDetails[0].subregion}
                  </span>
                </li>
                <li>
                  Capital:{" "}
                  <span className=" font-light">
                    {countryDetails[0].capital}
                  </span>
                </li>
              </ul>
            </div>
            <div className="my-12">
              <ul className="my-4 text-sm flex flex-col gap-y-3">
                <li>
                  Top Level Domain:{" "}
                  <span className=" font-light">
                    {countryDetails[0].tld.join(",")}
                  </span>
                </li>
                <li>
                  Currencies:{" "}
                  <span className=" font-light">{currencyArray[0].name}</span>
                </li>
                <li>
                  Languages:{" "}
                  <span className=" font-light">
                    {languagesArray.join(", ")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="desktop:mt-7 desktop:flex desktop:justify-start desktop:items-center align-middle">
            <h3 className="text-sm w-40">Border Countries:</h3>
            <div className="flex flex-wrap justify-between items-center gap-y-4 desktop:gap-x-4 desktop:px-2">
              {!bordersArray ? (
                <div className="text-sm font-light text-center align-middle">
                  {" "}
                  No Borders{" "}
                </div>
              ) : (
                bordersArray.map((border) => (
                  <Link to={"/country/" + border}>
                    <BorderCountry border={border} />
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetailsPage;
