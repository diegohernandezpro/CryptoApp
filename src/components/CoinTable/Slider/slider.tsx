export default function Slider({
  color,
  percent,
}: {
  color: string;
  percent: number | undefined;
}) {
  if (!percent) {
    return null;
  }

  const colorOpaque = color + "80";

  return (
    <div className="w-[228px] h-[6px] rounded-sm">
      <div
        className={`w-[228px] h-[6px] rounded-sm top-[20px]`}
        style={{ backgroundColor: colorOpaque }}
      >
        <div
          className={`h-[6px] rounded-sm top-[20px `}
          style={{
            width: `${percent * 228}px`,
            maxWidth: "228px",
            backgroundColor: color,
          }}
        ></div>
      </div>
    </div>
  );
}
