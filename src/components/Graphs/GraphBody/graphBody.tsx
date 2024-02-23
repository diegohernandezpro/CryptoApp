import GraphSummary from "../GraphSummary/graphSummary";
export default function GraphBody() {
  return (
    <div className="graph-body-container">
      <span className="graph-body-wrapper">
        <GraphSummary />
      </span>
      <span className="graph-body-wrapper">
        <GraphSummary volume={true} />
      </span>
    </div>
  );
}
