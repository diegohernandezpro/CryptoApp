import GetTheme from "@/utils/GetTheme";

export default function Navigation() {
  return (
    <div className="h-12 w-[265px] flex gap-6 ">
      <span className={GetTheme("w-[110px] nav-item")}>
        <img src={"/src/assets/home.svg"} alt="bitcoin-icon" />
        <p>Home</p>
      </span>
      <span className={GetTheme("w-[131px] nav-item")}>
        <img src={"/src/assets/portfolio.svg"} alt="bitcoin-icon" />
        <p>Portfolio</p>
      </span>
    </div>
  );
}
