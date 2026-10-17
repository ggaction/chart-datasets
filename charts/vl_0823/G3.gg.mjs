// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17, doc-a743281cbd97a819
import { chart } from "ggaction";
import data from "./data.json";

const TEAMS = [
  "Arsenal","Aston Villa","Brentford","Brighton and Hove Albion","Burnley",
  "Chelsea","Crystal Palace","Everton","Leeds","Leicester","Liverpool",
  "Manchester City","Manchester United","Newcastle","Norwich","Southampton",
  "Tottenham Hotspur","Watford","West Ham","Wolves"
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 461, height: 1105, margin: { left: 41, top: 108, right: 220, bottom: 697 } })
    .createData({ values: data })
    .createComputedData({ id: "numOwnership", as: "Selected_By_Percent_num", expression: { op: "toNumber", operand: { field: "Selected_By_Percent" } } })
    .createComputedData({ id: "numValue", as: "Points_per_M_per_90_num", expression: { op: "toNumber", operand: { field: "Points_per_M_per_90" } } })
    .createComputedData({ id: "numCost", as: "Now_cost_num", expression: { op: "toNumber", operand: { field: "Now_cost" } } })
    .createScatterPlot({
      x: { field: "Selected_By_Percent_num", fieldType: "quantitative" },
      y: { field: "Points_per_M_per_90_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 45] })
    .editYScale({ domain: [0, 1.6] })
    .encodeColor({ field: "Team", fieldType: "nominal", scale: { domain: TEAMS, palette: { name: "turbo", count: 20, extent: [1 / 21, 20 / 21] } } })
    .encodeSize({ field: "Now_cost_num", fieldType: "quantitative", scale: { domain: [0, 13.1], range: [Math.PI, (361 * Math.PI) / 4] } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "actual-source-title-lines-0823",
        measurements: [
          { text: "Fantasy Premier League (FPL) 2021/22:", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 335.140625 },
          { text: "Value vs Ownership (%)", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 203.078125 },
          { text: "Figure 7", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", width: 45.375 },
          { text: "Ownership (%) in FPL (x), FPL Points per Million per 90 (y). size by FPL Player Price", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", width: 449.12109375 },
          { text: "Select a team in the legend to focus", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", width: 191.232421875 },
          { text: "Source: Vaastav via Github", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", width: 145.095703125 }
        ]
      }
    })
    .createTitle({
      text: "Fantasy Premier League (FPL) 2021/22:\nValue vs Ownership (%)",
      titleStyle: { fontSize: 18, fontWeight: 700, color: "black" },
      alongOffset: -35.9013671875
    })
    .editTitle({
      subtitleStyle: { fontSize: 12, fontStyle: "italic", color: "black" },
      offset: -11,
      gap: 1
    })
    .editTitle({
      subtitle: "Figure 7\nOwnership (%) in FPL (x), FPL Points per Million per 90 (y). size by FPL Player Price\nSelect a team in the legend to focus\nSource: Vaastav via Github"
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
      },
      title: { text: "Ownership (%)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28, color: "black" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6],
        ticks: { color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", format: ".1f" }
      },
      title: { text: "Value", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28, color: "black" }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        position: "bottom",
        columns: 1,
        title: "Team",
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        border: { background: "#FfFfFf", lineWidth: 0 }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["size"],
        position: "right",
        title: "Non-Penalty Expected Goals",
        values: [0, 2, 4, 6, 8, 10, 12],
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        border: false
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "size", symbol: { fill: "black", stroke: "transparent", strokeWidth: 0 } });
}