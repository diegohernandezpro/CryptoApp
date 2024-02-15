import { useState } from "react";
import GetTheme, { GetThemeBoolean } from "@/utils/GetTheme";

export default function Navigation() {
  const [isHomeActive, setIsHomeActive] = useState(true);

  return (
    <div className="h-12 w-[265px] flex gap-6 ">
      <span
        onClick={() => {
          console.log("isHomeActive", isHomeActive);
          setIsHomeActive(true);
        }}
        className={GetTheme(
          `w-[110px] nav-item ${
            isHomeActive ? "opacity-100 font-bold" : "opacity-50"
          }`
        )}
      >
        <img
          src={
            GetThemeBoolean()
              ? "/src/assets/home-galaxy.svg"
              : "/src/assets/home-glacier.svg"
          }
          alt="bitcoin-icon"
        />
        <p>Home</p>
      </span>
      <span
        onClick={() => {
          console.log("isHomeActive", isHomeActive);
          setIsHomeActive(false);
        }}
        className={GetTheme(
          `w-[131px] nav-item ${
            isHomeActive ? "opacity-50" : "opacity-100 font-bold"
          }`
        )}
      >
        <img
          src={
            GetThemeBoolean()
              ? "/src/assets/portfolio-galaxy.svg"
              : "/src/assets/portfolio-glacier.svg"
          }
          alt="bitcoin-icon"
        />
        <p>Portfolio</p>
      </span>
    </div>
  );
}
