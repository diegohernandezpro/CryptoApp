import GetTheme from "@/utils/GetTheme";

export default function AppName() {
  return (
    <div className="w-[170px] h-12 flex gap-2">
      <img
        className="w-[36px] top-[10px] h-[20px] left-[3px]"
        src="/src/assets/logo.svg"
        alt="logo"
      />
      <span
        className={GetTheme(
          "w-[101px] h-[25px] top-[8px] left-[49px] font-bold leading-6 text-xl text-header-base"
        )}
      >
        CryptoApp
      </span>
    </div>
  );
}
