import { AppDispatch, RootState } from "@/state/store"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getData } from "@/state/infographic/infographicSlice";
import {TextNSlider} from "./TextNSlider"


const Infographic = () => {
  const {coinsData} = useSelector((state: RootState) => state.infographic);
//   console.log("🚀 ~ Infographic ~ infographicState:", coinsData)
  
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getData())
    }, [dispatch]); 

  return (
    <header className="flex w-full h-14 px-[72px] py-4 border-4 rounded-md border-red-500 bg-prim-blueish-black">
        <ul className="flex justify-center gap-8">
            <li className="header-item">
                <img
                    src={"/src/assets/flash-cricle.svg"}
                    alt='flash-circle'
                /> 
                    <span className="text-[#D1D1D1]"></span>Coins<span>{coinsData?.numCoins}</span>
            
            </li>
            
            <li className="header-item">
                <img
                    src={"/src/assets/exchange-icon.svg"}
                    alt='exchange-icon'
                /> 
                <span className="text-[#D1D1D1]">Exchanges</span><span>{coinsData?.numExchange}</span></li>
        
            <li className="header-item">
                <img
                        src={"/src/assets/up-arrow.svg"}
                        alt='bitcoin-icon'
                    /> 
                <span>{coinsData?.formattedMarketCap}</span>
                
            </li>
            
            <li className="header-item">
                <span>{coinsData?.formattedCoinVolume}</span>
            
                <TextNSlider percentage={coinsData?.volumeVsMarketCap || 0} name="currency"/>
            </li>
            
            <li className="header-item">
                <img
                    src={"/src/assets/bitcoin.svg"}
                    alt='bitcoin-icon'
                /> 
                <span>{`${coinsData?.formattedBitCap} %`}</span> <TextNSlider percentage={coinsData?.formattedBitCap || 0} name= "bitcoin" /> </li>

            <li className="header-item">

                <img
                    src={"/src/assets/etherum.svg"}
                    alt='etherum-icon'
                /><span>{`${coinsData?.formattedEthCap} %`}</span> <TextNSlider percentage={coinsData?.formattedEthCap || 0} name="ethereum" /> </li>
    </ul>
    </header>
  )
}

export default Infographic;
