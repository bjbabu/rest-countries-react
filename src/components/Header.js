/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Context } from "../App";

const Header = () => {
  const [darkMode, setDarkMode] = useState("Dark Mode");

  const [theme, setTheme] = useContext(Context);
  return (
    <div
      id="header"
      className={
        "absolute h-20 w-full px-4 z-10 desktop:px-20 font-nunito-sans text-veryDarkBlue  flex flex-wrap justify-between items-center shadow-md " +
        theme.theme
      }
    >
      <h1 id="heading" className="text-sm font-bold desktop:text-2xl">
        Where in the world?
      </h1>
      <button
        id="mode"
        type="submit"
        className="text-xs desktop:text-base font-semibold flex flex-wrap justify-between items-center"
        onClick={() => {
          if (darkMode === "Dark Mode") {
            setDarkMode("Light Mode");
            setTheme({
              theme: "dark-theme",
              themeBackground: "dark-theme-background",
            });
          } else {
            setDarkMode("Dark Mode");
            setTheme({
              theme: "light-theme",
              themeBackground: "light-theme-background",
              themeInput: "light-theme-input",
            });
          }

          // if (theme === "light-theme") {
          //   setTheme("dark-theme");
          // } else {
          //   setTheme("light-theme");
          // }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon w-3 me-1 desktop:w-4 desktop:me-2"
          viewBox="0 0 512 512"
        >
          <path
            d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          />
        </svg>
        {darkMode}
      </button>
    </div>
  );
};

export default Header;
