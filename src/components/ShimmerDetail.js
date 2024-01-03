import { Link } from "react-router-dom";

const ShimmerDetail = () => {
  return (
    <div className={" h-dvh px-7 desktop:px-20 pt-28 "}>
      <Link to={"/"}>
        <button
          className={
            "h-8 desktop:h-10 w-4/12 desktop:w-36 px-6 desktop:px-11 mt-2 desktop:mt-12 bg-white text-sm font-light flex flex-wrap  justify-between items-center shadow-lg "
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className={"w-4 "}
          >
            <path
              d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
              data-name="4-Arrow Left"
            />
          </svg>
          Back
        </button>
      </Link>

      <div className={"my-16 desktop:my-20 desktop:flex animate-pulse"}>
        <div className=" h-40 desktop:w-6/12 bg-slate-400"></div>
        <div className="py-6 desktop:py-12 w-full desktop:w-6/12 desktop:ps-12">
          <div className=" desktop:w-full desktop:flex desktop:justify-between">
            <div className="h-5 w-6/12 desktop:w-4/12 bg-slate-400 rounded-md">
              <ul className="my-8 text-sm flex flex-col gap-y-3">
                <div className="h-3 w-8/12 bg-slate-400 rounded-md"></div>
                <div className="h-3 w-5/12 bg-slate-400 rounded-md"></div>
                <div className="h-3 w-7/12 bg-slate-400 rounded-md"></div>
                <div className="h-3 w-6/12 bg-slate-400 rounded-md"></div>
                <div className="h-3 w-9/12 bg-slate-400 rounded-md"></div>
              </ul>
            </div>
            <div className="my-12 h-3 desktop:h-3 w-4/12 desktop:w-3/12 bg-slate-400 rounded-md">
              <ul className="my-28  desktop:my-12 text-sm flex flex-col gap-y-3">
                <div className="h-3 w-8/12 bg-slate-400 rounded-md"></div>
                <div className="h-3 w-5/12 bg-slate-400 rounded-md"></div>
                <div className="h-3 w-7/12 bg-slate-400 rounded-md"></div>
              </ul>
            </div>
          </div>
          <div className="desktop:mt-7 desktop:flex desktop:justify-start desktop:items-start ">
            <div className="text-sm my-2 h-5 w-4/12 "></div>
            <div className="flex flex-wrap justify-between gap-y-4 desktop:gap-x-4 desktop:px-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerDetail;
