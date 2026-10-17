// DOCS: doc-e790db38fc2a278a, doc-2fcdfbdfb290e440, doc-bc26da5598d35bae, doc-847cb1497a53c317
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 274, height: 102, margin: { left: 66, top: 5, right: 8, bottom: 37 } })
    .createData({ id: "rows", values: data })
    .filterData({
      id: "temps2017Only",
      field: "year",
      predicate: { op: "eq", value: 2017 }
    })
    .createSummaryData({
      id: "cityTemps",
      groupBy: "city",
      aggregates: [{ field: "temp", op: "mean", as: "2017" }]
    })
    .createScatterPlot({
      x: { field: "2017", fieldType: "quantitative" },
      y: { field: "city", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 12], nice: false })
    .editYScale({ type: "point", domain: ["Bristol", "Glasgow", "Sheffield"] })
    .editPointMark({ fill: "#4c78a8", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, flush: true }
        },
        title: { text: "2017", fontSize: 11, fontWeight: 700, offset: 30 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "City", fontSize: 11, fontWeight: 700, offset: 54 }
      }
    })
    .createGrid({ horizontal: false, vertical: { color: "#ddd" } });
}
