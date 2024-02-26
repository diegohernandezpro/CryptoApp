import GraphHeader from "./GraphHeader/graphHeader";
import GraphBody from "./GraphBody/graphBody";
import GraphTimeSelector from "./GraphTimeSelector/graphTimeSelector";

export default function Graphs() {
  return (
    <div className="graph-container">
      <GraphHeader />
      <GraphBody />
      <GraphTimeSelector />
    </div>
  );
}
