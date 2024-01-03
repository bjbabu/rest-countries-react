import { useContext, useState } from "react";
import { Context } from "../App";
import FilterDrop from "./FilterDrop";

const SortByFilter = (props) => {
  const { sortByOption, setSortByOption } = props;
  const [theme] = useContext(Context);

  const sortOptions = [
    "Sort By",
    "Population ASC",
    "Population DSC",
    "Area ASC",
    "Area DSC",
  ];

  const [isVisibleSortBy, setIsVisibleSortBy] = useState(false);

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
          setIsVisibleSortBy(!isVisibleSortBy);
        }}
      >
        {sortByOption}
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

      {isVisibleSortBy && (
        <div
          id="filter"
          class={
            "absolute z-10 w-full bg-white text-sm top-16 rounded-md ps-3 py-3 shadow-lg " +
            theme.theme
          }
        >
          <ul
            className="space-y-2 text-start"
            onClick={(e) => {
              setSortByOption(e.target.value);
              setIsVisibleSortBy(!isVisibleSortBy);
            }}
          >
            {sortOptions.map((option) => (
              // <SortByFilterDrop option={option} />
              <FilterDrop option={option} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortByFilter;
