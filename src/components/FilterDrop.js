/* eslint-disable array-callback-return */
const FilterDrop = (props) => {
  const { option } = props;

  return (
    <li>
      <button className="w-full text-start" value={option}>
        {option}
      </button>
    </li>
  );
};

export default FilterDrop;
