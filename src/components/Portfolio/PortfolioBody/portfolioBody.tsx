import PortfolioCard from "../card/portfolioCard";

export default function PortfolioBody() {
  return (
    <div className="w-[1296px] h-full gap-[72px] flex flex-col items-center justify-between border-2 border-[orange]">
      <span className="w-[1296px] h-[45px] flex justify-between items-center border-2 border-[red]">
        <p className="w-[150px] h-[24px] leading-6 text-[20px]">
          Your Statistics
        </p>
        <button className="w-[244px] h-full rounded-md flex items-center justify-center bg-converter-accent text-converter-accent cursor-pointer hover:shadow-custom">
          Add Asset
        </button>
      </span>
      <div className="w-[1296px] h-full gap-[24px]">
        <PortfolioCard />
      </div>
    </div>
  );
}
