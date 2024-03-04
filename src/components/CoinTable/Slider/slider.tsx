export default function Slider({
  color,
  percent,
}: {
  color: string;
  percent: number | undefined;
}) {
  console.log("🚀 ~ percent:", percent);

  if (!percent) {
    return null;
  }

  return (
    <div className="w-[228px] h-[6px] rounded-sm absolute">
      <div
        className={`w-[228px] h-[6px] rounded-sm top-[20px] opacity-50 bottom-0 left-0 absolute `}
        style={{ backgroundColor: color }}
      ></div>
      <div
        className={`h-[6px] rounded-sm top-[20px] relative bottom-0 left-0 `}
        style={{ width: `${percent * 228}px`, backgroundColor: color }}
      ></div>
    </div>
  );
}
