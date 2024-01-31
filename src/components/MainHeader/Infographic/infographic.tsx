import { AppDispatch, RootState } from "@/state/store"
import { useSelector, useDispatch } from "react-redux"
import { decrement, incrementByAmount, incrementAsync} from "@/state/infographic/infographicSlice";
import {TextNSlider} from "./TextNSlider"


const InfoGraphic = () => {
  const count = useSelector((state: RootState) => state.infographic.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    // <div>
    //   <p>{count}</p>
    //   <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
    //   <button onClick={() => dispatch(decrement())}>Decrement</button>
    // </div>
    <header className="fixed f w-full h-14 px-[72px] py-4 text-yellow-500 border rounded-md border-none bg-prim-blueish-black">
    <ul className="flex justify-center gap-8">
        <li className="header-item">
            <img
                src={"/src/assets/flash-cricle.svg"}
                alt='flash-circle'
            /> 
                <span className="text-[#D1D1D1]">Coins</span><span>7884</span>
        
        </li>
        
        <li className="header-item">
            <img
                src={"/src/assets/exchange-icon.svg"}
                alt='exchange-icon'
            /> 
            <span className="text-[#D1D1D1]">Exchanges</span><span>662</span></li>
       
        <li className="header-item">
            <img
                    src={"/src/assets/up-arrow.svg"}
                    alt='bitcoin-icon'
                /> 
            <span> 1.66T</span>
            
           </li>
        
        <li className="header-item">
            <span>$124.900B</span>
        
            <TextNSlider />
        </li>
        
        <li className="header-item">
            <img
                src={"/src/assets/bitcoin.svg"}
                alt='bitcoin-icon'
            /> 
            <span>44%</span> <TextNSlider /> </li>

        <li className="header-item">

            <img
                src={"/src/assets/etherum.svg"}
                alt='etherum-icon'
            /><span>21%</span> <TextNSlider /> 
        </li>
    </ul>
</header>
  )
}

export default InfoGraphic;