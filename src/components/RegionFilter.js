/* eslint-disable array-callback-return */
import { useContext, useState } from "react";
import { Context } from "../App";
import FilterDrop from "./FilterDrop";

const regionSet = new Set();

const RegionFilter = (props) => {
  const [theme] = useContext(Context);

  const {
    listOfCountries,
    regionName,
    setRegionName,
    setSubRegions,
    setIsVisibleSubRegion,
    setSubRegionName,
  } = props;

  const [isVisibleRegion, setIsVisibleRegion] = useState(false);

  listOfCountries.map((country) => {
    regionSet.add(country.region);
  });

  const sortedRegions = Array.from(regionSet).sort();
  sortedRegions.unshift("Filter by Region");

  return (
    <div
      id="filter-bar"
      className={
        "relative mt-10 px-3 h-12 bg-white desktop:h-14 w-7/12 desktop:w-2/12 desktop:mt-0 flex flex-wrap justify-center items-center rounded-md shadow-md " +
        theme.theme
      }
    >
      <button
        type="submit"
        className={
          "w-full text-xs flex flex-wrap justify-between items-center " +
          theme.theme
        }
        onClick={() => {
          setIsVisibleRegion(!isVisibleRegion);
        }}
      >
        {regionName}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon w-4"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M112 184l144 144 144-144"
          />
        </svg>
      </button>

      {isVisibleRegion && (
        <div
          id="filter"
          class={
            "absolute z-10 bg-white w-full text-sm top-16 rounded-md ps-3 py-3 shadow-lg " +
            theme.theme
          }
        >
          <ul
            className="space-y-2 text-start"
            onClick={(e) => {
              setRegionName(e.target.value);
              setIsVisibleRegion(!isVisibleRegion);
              setIsVisibleSubRegion(false);
              // setSubRegionName
              setSubRegionName("Sub Regions");

              const subRegionSet = new Set();
              listOfCountries
                .filter((country) => {
                  return country.region === e.target.value;
                })
                .map((country) => {
                  if (country.subregion) {
                    subRegionSet.add(country.subregion);
                  }
                });

              const sortedSubRegions = Array.from(subRegionSet).sort();
              sortedSubRegions.unshift("Sub Regions");

              setSubRegions(sortedSubRegions);
            }}
          >
            {sortedRegions.map((option) => (
              <FilterDrop option={option} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RegionFilter;
