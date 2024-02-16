import React, { useState } from "react";
import { api } from "@/utils/DataRetriever";
import type { Coin } from "@/utils/DataTypes";
import SearchResult from "./searchResult";
import { useIsDark } from "@/state/theme/themeSlice";

export default function SearchBar() {
  const [searchTerm, setSearch] = useState("");
  const [results, setResults] = useState<Coin[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchQuery = e.target.value;
    setSearch(searchQuery);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    typeof e === "object" ? e.preventDefault() : null;

    setIsVisible(true);
    getCoins(searchTerm);
  };

  const handleLinkClick = () => {
    setSearch("");
    setIsVisible(false);
  };

  const getCoins = async (searchTerm: string) => {
    try {
      setLoading(true);

      const response = await api("/search", `?query=${searchTerm}`);
      let coins: Coin[] = [];

      "coins" in response
        ? (coins = response.coins)
        : console.error("Response doesn't contain coins property");

      setLoading(false);
      setResults(coins);
      setIsVisible(true);
    } catch (err) {
      setError(true);
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
            useIsDark()
              ? "src/assets/magnifing-glass-galaxy.svg"
              : "src/assets/magnifing-glass-glacier.svg"
          }
          alt="currency-selector-icon"
          className="w-4 h-4 top-[2.08px] left-[2.08px]"
          //   onClick={handleImageSubmit}
        />

        <input
          className="w-full h-full bg-header-muted placeholder:text-header-base text-header-base outline-none focus:outline-none"
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          value={searchTerm}
        />
      </form>
      <>
        {isVisible && (
          <SearchResult
            results={results}
            isLoading={isLoading}
            hasError={hasError}
            handleLinkClick={handleLinkClick}
          />
        )}
      </>
    </div>
  );
}
