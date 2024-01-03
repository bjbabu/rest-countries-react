const Shimmer = () => {
  return (
    <div id="country" className="w-64 shadow-lg rounded-md animate-pulse">
      <div id="flag">
        <div className="h-40 w-full bg-slate-400 rounded-t-md"></div>
      </div>

      <div
        id="statistics"
        className="bg-white h-40 ps-6 pt-6 pb-10 text-start rounded-md flex flex-col justify-around"
      >
        <div className="h-3 w-8/12 bg-slate-400 rounded-md"></div>
        <div className="h-3 w-8/12 bg-slate-400 rounded-md"></div>
        <div className="h-3 w-8/12 bg-slate-400 rounded-md"></div>
      </div>
    </div>
  );
};

export default Shimmer;
