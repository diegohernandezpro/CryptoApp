import CurrencySelector from "./CurrencySelector/currencySelector";

function Header(){
  
    return(
      <div className="flex h-[48px] justify-between"> 
        <CurrencySelector/> 
      </div>
    )
}

 
export default Header;