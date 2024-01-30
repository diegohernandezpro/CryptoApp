
export function Header(){


    return(
        <header className="fixed f w-full h-14 px-[72px] py-4 text-yellow-500 border rounded-md  border-red-300 bg-prim-blueish-black">
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
                <li className="header-item">1.66T</li>
                <li className="header-item">$124.900B</li>
                <li className="header-item">
                <img
                    src={"/src/assets/bitcoin.svg"}
                    alt='bitcoin-icon'
                /> 
                <span>44%</span></li>
                <li className="header-item">

                <img
                    src={"/src/assets/etherum.svg"}
                    alt='etherum-icon'
                /><span>21%</span>
                </li>
            </ul>
        </header>
    )
}

 
