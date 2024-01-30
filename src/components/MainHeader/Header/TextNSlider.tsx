
export const TextNSlider = () => {

let fill: number = 30;
let color: string = "#F7931A"

  return (
    <div className="h-[6px] bg-[#FFFFFF66] w-[51px]">
        <div 
        className=" h-[6px]"
        style={{ width: `${fill}px`, background:`${color}`}}
        ></div>
    </div>
  )
}
