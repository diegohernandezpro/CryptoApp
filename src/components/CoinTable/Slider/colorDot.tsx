export default function ColorDot({ color }: { color: string }) {
  return (
    <div
      className={`w-1.5 h-1.5 rounded-full`}
      style={{ backgroundColor: color }}
    ></div>
  );
}
