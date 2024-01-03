import { useContext } from "react";
import { Context } from "../App";

const Country = (props) => {
  const { countryData } = props;

  const [theme] = useContext(Context);

  return (
    <div
      id="country"
      className={"w-64 shadow-lg rounded-md hover:scale-105 " + theme.theme}
    >
      <div id="flag">
        <img
          src={countryData.flags.png}
          className="object-fill h-40 w-full rounded-t-md"
          alt="flag"
        />
      </div>

      <div
        id="statistics"
        className={" ps-6 pt-6 pb-10 text-start rounded-md " + theme.theme}
      >
        <h2 className="font-bold text-lg pb-3 items-start">
          {countryData.name.common}
        </h2>
        <ul className="text-sm font-semibold">
          <li id="population" className="pb-1.5">
            Population:{" "}
            <span className="font-normal">{countryData.population}</span>
          </li>
          <li id="region" className="pb-1">
            Region: <span className="font-normal">{countryData.region}</span>
          </li>
          <li id="capital">
            Capital: <span className="font-normal">{countryData.capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Country;
