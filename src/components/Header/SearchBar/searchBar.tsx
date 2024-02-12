import React, { useState } from "react";
import { RootState } from "@/state/store";
import { useSelector } from "react-redux";
import { api } from "@/utils/DataRetriever";
import type { Coin } from "@/utils/DataTypes";

export default function SearchBar() {
  const { isDark } = useSelector((state: RootState) => state.theme);

  const [searchTerm, setSearch] = useState("");
  const [results, setResults] = useState<Coin[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    typeof e === "object" ? e.preventDefault() : null;

    setIsVisible(true);
    getCoins(searchTerm);
  };

  //   const handleImageSubmit = (e: React.MouseEventHandler<HTMLImageElement>) => {
  //     typeof e === "object" ? e.preventDefault() : null;

  //     setIsVisible(true);
  //     getCoins(searchTerm);
  //   };

  const handleLinkClick = () => {
    setSearch("");
    setIsVisible(false);
  };

  const getCoins = async (searchTerm: string) => {
    try {
      setLoading(true);

      const response = await api("/search", `?query=${searchTerm}`);
      let coins: Coin[] = [];

      if ("coins" in response) {
        coins = response.coins;
        console.log("🚀 ~ getCoins ~ coins", coins);
      } else {
        console.error("Response doesn't contain coins property");
      }

      console.log("🚀 ~ getCoins ~ response:", coins);

      setLoading(false);
      setResults(coins);
      setIsVisible(true);
    } catch (err) {
      // setError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        className="canvas-item w-[356px] h-12 gap-3 py-2 px-4"
        onSubmit={handleFormSubmit}
      >
        <img
          src={
            isDark
              ? "src/assets/magnifing-glass-galaxy.svg"
              : "src/assets/magnifing-glass-glacier.svg"
          }
          alt="currency-selector-icon"
          className="w-4 h-4 top-[2.08px] left-[2.08px]"
          //   onClick={handleImageSubmit}
        />

        <input
          className="w-full h-full bg-header-muted placeholder:text-header-base text-header-base"
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          value={searchTerm}
        />
      </form>

      <>
        {isVisible && (
          <>
            {isLoading ? (
              <div>Loading....</div>
            ) : (
              <ul
                className="w-[356px] h-36 bg-header-muted border border-header-base overflow-auto flex flex-col gap-1"
                onClick={handleLinkClick}
              >
                {results.map(({ name, symbol, id }) => (
                  <li
                    key={id}
                    className="hover:bg-header-base text-header-accent"
                  >
                    <p onClick={handleLinkClick}>
                      {name} ({symbol})
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
      </>
    </div>
  );
}
