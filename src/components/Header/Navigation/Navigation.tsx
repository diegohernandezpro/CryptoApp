import { useState } from "react";
import { useIsDark } from "@/state/theme/themeSlice";
import { Link } from "react-router-dom";

export default function Navigation() {
  const [isHomeActive, setIsHomeActive] = useState(true);

  return (
    <div className="h-12 w-[265px] flex gap-6">
      <Link
        to={"/"}
        onClick={() => setIsHomeActive(true)}
        className={`w-[110px] nav-item ${
          isHomeActive ? "opacity-100 font-bold" : "opacity-50"
        }`}
      >
        <img
          src={
            useIsDark()
              ? "/src/assets/home-galaxy.svg"
              : "/src/assets/home-glacier.svg"
          }
          alt="home-icon"
        />
        <p>Home</p>
      </Link>
      <Link
        to={"/portfolio"}
        onClick={() => setIsHomeActive(false)}
        className={`w-[131px] nav-item ${
          isHomeActive ? "opacity-50" : "opacity-100 font-bold"
        }`}
      >
        <img
          src={
            useIsDark()
              ? "/src/assets/portfolio-galaxy.svg"
              : "/src/assets/portfolio-glacier.svg"
          }
          alt="portfolio-icon"
        />
        <p>Portfolio</p>
      </Link>
    </div>
  );
}
