import { useState } from "react";
import SearchBar from "./SearchBar";
import RegionFilter from "./RegionFilter";
import SubRegionFilter from "./SubRegionFilter";
import SortByFilter from "./SortByFilter";

const Bars = (props) => {
  const {
    listOfCountries,
    searchCountry,
    setSearchCountry,
    regionName,
    setRegionName,
    subRegionName,
    setSubRegionName,
    sortByOption,
    setSortByOption,
  } = props;

  const [isVisibleSubRegion, setIsVisibleSubRegion] = useState(false);
  const [subRegions, setSubRegions] = useState([]);

  return (
    <div id="bars" className="mt-2 desktop:mt-4 flex flex-wrap justify-between">
      <SearchBar
        searchCountry={searchCountry}
        setSearchCountry={setSearchCountry}
      />

      {/*Filter by regions*/}
      <RegionFilter
        listOfCountries={listOfCountries}
        regionName={regionName}
        setRegionName={setRegionName}
        setSubRegions={setSubRegions}
        isVisibleSubRegion={isVisibleSubRegion}
        setIsVisibleSubRegion={setIsVisibleSubRegion}
        setSubRegionName={setSubRegionName}
      />

      {/*Filter by Sub Regions*/}
      <SubRegionFilter
        subRegions={subRegions}
        subRegionName={subRegionName}
        setSubRegionName={setSubRegionName}
        isVisibleSubRegion={isVisibleSubRegion}
        setIsVisibleSubRegion={setIsVisibleSubRegion}
      />

      {/* Sort by Filter */}
      <SortByFilter
        sortByOption={sortByOption}
        setSortByOption={setSortByOption}
      />
    </div>
  );
};

export default Bars;
