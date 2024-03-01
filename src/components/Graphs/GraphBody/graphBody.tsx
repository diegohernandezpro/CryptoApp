import GraphSummary from "../GraphSummary/graphSummary";
import Charts from "../Charts/charts";
export default function GraphBody() {
  return (
    <div className="graph-body-container">
      <span className="graph-body-wrapper">
        <GraphSummary />
        <Charts chartType="line" />
      </span>
      <span className="graph-body-wrapper">
        <GraphSummary volume={true} />
        <Charts chartType="bar" />
      </span>
    </div>
  );
}
