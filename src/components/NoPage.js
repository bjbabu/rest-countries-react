import { Link } from "react-router-dom";
const NoPage = () => {
  return (
    <div className=" text-3xl font-semibold bg-slate-300 h-dvh flex flex-col justify-center items-center gap-y-8">
      No Page Found
      <Link to={"/"}>
        <button className="p-4 text-base font-normal text-cyan-200 bg-cyan-600 rounded-full shadow-xl shadow-cyan-950">
          Back to Home Page
        </button>
      </Link>
    </div>
  );
};

export default NoPage;
