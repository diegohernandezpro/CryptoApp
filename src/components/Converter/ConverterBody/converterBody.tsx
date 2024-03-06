export default function ConverterBody() {
  return (
    <div className="converter-body">
      <span className="w-[1296px] h-[277px] flex flex-col gap-[24px]">
        <div className="w-[253px] h-[53px] gap-2 flex flex-col">
          <span className="w-[253px] h-[24px] text-xl leading-6 font-medium text-converter-bodyBase">
            Online currency converter
          </span>
          <span className="w-[132px] h-[21px] font-normal leading-[20.42px] text-converter-bodyMuted">
            09/29/2023 14:15
          </span>
        </div>
        <div className="w-[1296px] h-[200px] gap-[24px] flex flex-row">
          <span className="converter-card">
            <p className="w-[55px] h-[24px] text-sm leading-6 opacity-80 text-converter-cardBase">
              You Sell
            </p>
            <div className="w-[588px] h-[88px] flex flex-col gap-[24px] ">
              <div className="w-[528px] h-[24px] flex justify-between items-center text-converter-cardBase">
                <div className="h-[24px] flex justify-center items-center gap-2">
                  <img
                    src="src/assets/bitcoin.svg"
                    className="w-6 h-6 flex justify-center items-center"
                  />
                  <span className="h-[16px] text-[20px] leading-[16px] font-medium">
                    Bitcoin (BTC)
                  </span>
                </div>
              </div>
            </div>
          </span>
          <span className="converter-card">
            <p className="w-[55px] h-[24px] text-sm leading-6 opacity-80 text-converter-cardBase">
              You Buy
            </p>
            <div className="w-[588px] h-[88px] flex flex-col gap-[24px] ">
              <div className="w-[528px] h-[24px] flex justify-between items-center text-converter-cardBase">
                <div className="h-[24px] flex justify-center items-center gap-2">
                  <img
                    src="src/assets/bitcoin.svg"
                    className="w-6 h-6 flex justify-center items-center"
                  />
                  <span className="h-[16px] text-[20px] leading-[16px] font-medium">
                    Bitcoin (BTC)
                  </span>
                </div>
              </div>
            </div>
          </span>
        </div>
      </span>
      <span className="w-[1296px] h-[375px] gap-[40px] border-2 border-[yellow]"></span>
      <span className="w-[463px] h-[42px] gap-[8px] rounded-lg p-1 border-2 border-[yellow]"></span>
    </div>
  );
}
