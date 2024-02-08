
export const TextNSlider = (props: { percentage: number, name: "bitcoin" | "ethereum" | "currency"}) =>{

const fillAmount: number = (props.percentage / 100) * 51;
const color = {
  bitcoin: "#F7931A",
  ethereum: "#849DFF",
  currency: "#FFFFFF"
}

  return (
    <div className="h-[6px] bg-[#FFFFFF66] w-[51px]">
        <div 
        className=" h-[6px]"
        style={{ width: `${fillAmount}px`, background:`${color[props.name]}`}}
        ></div>
    </div>
  )
}
