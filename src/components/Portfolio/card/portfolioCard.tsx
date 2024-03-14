import { Slider } from "@/components";

export default function PortfolioCard() {
  return (
    <div className="w-[1296px] h-[242px] flex gap-[32px] bg-portfolio-base rounded-2xl overflow-hidden border-2 border-[goldenrod] text-portfolio-base">
      <span className="w-[1296px] h-[88px] p-6 gap-6 bg-portfolio-muted flex items-center justify-center flex-row border-2 border-[yellow]">
        <span className="h-[24px] w-[208px] flex flex-row justify-start gap-[16px] items-center border-2 border-[red]">
          <img src="src/assets/bitcoin.svg" className="w-6 h-6" />
          <p className="h-[24px] text-[16px] font-medium flex items-center justify-center">
            Bitcoin (BTC)
          </p>
        </span>
        <span className="w-[242px] h-[42px] border border-[orange]">
          <p className="h-[24px] font-medium text-[16px] leading-6">$56,000</p>
          <p className="h-[18px] text-sm text-portfolio-muted">Price</p>
        </span>
        <span className="w-[242px] h-[42px] border border-[orange]">
          <span className="h-[24px] font-medium text-[16px] leading-[17.86px] flex justify-start items-center">
            <img src="src/assets/up-arrow.svg" className="p-1" />
            <p>11.32%</p>
          </span>
          <p className="h-[18px] text-sm text-portfolio-muted">24h%</p>
        </span>
        <span className="w-[242px] h-[42px] border border-[orange]">
          <span className="h-[24px] font-medium text-[16px] leading-[17.86px] flex flex-col justify-start items-start">
            <p className=" w-full text-[12px] leading-[15.31px] flex justify-start">
              44%
            </p>
            <Slider color={"#01F1E3"} percent={33} />
          </span>
          <p className="h-[18px] text-sm text-portfolio-muted">
            Market cap vs volume
          </p>
        </span>
        <span className="w-[242px] h-[42px] border border-[orange]">
          <span className="h-[24px] font-medium text-[16px] leading-[17.86px] flex justify-start items-center">
            <img src="src/assets/up-arrow.svg" className="p-1" />
            <p>4.32%</p>
          </span>
          <p className="h-[18px] text-sm text-portfolio-muted">
            Circ supply vs max supply
          </p>
        </span>
      </span>
    </div>
  );
}
