import { Coin } from "@/utils/DataTypes";
import LoadingCircle from "@/utils/LoadingCricle";

const SearchResult = ({
  results,
  isLoading,
  handleLinkClick,
  hasError,
}: {
  results: Coin[];
  isLoading: boolean;
  hasError: boolean;
  handleLinkClick: () => void;
}) => {
  return (
    <>
      {!hasError ? (
        <>
          {!isLoading ? (
            <ul
              className="w-[356px] h-36 bg-header-muted border border-header-base overflow-auto flex flex-col gap-1 text-header-base"
              onClick={handleLinkClick}
            >
              {results.map(({ name, symbol, id }) => (
                <li key={id} className="hover:bg-header-accent">
                  <p onClick={handleLinkClick}>
                    {name} ({symbol})
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="w-[356px] h-36 bg-header-muted border border-header-base overflow-auto flex flex-col gap-1 text-header-base justify-center items-center">
              <LoadingCircle />
            </div>
          )}
        </>
      ) : (
        <ul>
          <div>
            <h3>Error Finding Coin.</h3>
            <p>Try Again Later.</p>
          </div>
        </ul>
      )}
    </>
  );
};

export default SearchResult;
