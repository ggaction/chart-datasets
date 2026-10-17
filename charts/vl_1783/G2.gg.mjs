// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 512,
      height: 438,
      margin: { left: 33, top: 5, right: 79, bottom: 33 }
    })
    .createData({ values: data })
    .createWindowData({
      id: "ranked",
      sortBy: [{ field: "point", order: "descending" }],
      operations: [{ op: "rank", as: "rank" }]
    })
    .editWindowData({
      target: "ranked",
      partitionBy: "matchday"
    })
    .createLinePlot({
      x: { field: "matchday", fieldType: "nominal" },
      y: { field: "rank", fieldType: "quantitative", scale: { type: "linear", domain: [0.5, 4.5], reverse: true, zero: false, nice: false } },
      guides: false
    })
    .encodeGroup({ field: "team" })
    .encodeColor({
      field: "team",
      fieldType: "nominal",
      scale: {
        domain: ["Man Utd", "Chelsea", "Man City", "Spurs"],
        range: ["#cc2613", "#125dc7", "#8bcdfc", "#d1d1d1"]
      }
    })
    .editXScale({ type: "point", domain: [1, 2, 3] })
    .editLineMark({ strokeWidth: 2 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            offset: 7,
            rotation: { value: -90, unit: "degrees" }
          }
        },
        title: { text: "matchday", fontSize: 11, fontWeight: 700, offset: 26 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          values: [1, 2, 3, 4],
          labels: { fontSize: 10, offset: 7 }
        },
        title: {
          text: "rank",
          fontSize: 11,
          fontWeight: 700,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createLegend({
      symbol: { length: 16 },
      labels: { fontSize: 10, offset: 4 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
  .editYAxis({ title: { offset: 20.9833984375 } });
}
