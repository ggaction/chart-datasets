import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33
export function buildChart() {
  return chart()
    .createCanvas({
      width: 331,
      height: 257.390625,
      margin: { top: 19.390625, right: 71, bottom: 38, left: 60 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "year",
        fieldType: "temporal",
        scale: { type: "time", domain: [1230768000000, 1483228800000] }
      },
      y: {
        field: "value",
        fieldType: "quantitative",
        scale: { domain: [0, 45000] }
      },
      guides: false
    })
    .encodeColor({
      field: "category",
      fieldType: "nominal",
    })
    .editColorScale({
      domain: ["Col1", "Col2", "Col3", "Col4"],
      range: ["#1f77b4", "#EDAD08", "#73AF48", "#94346E"]
    })
    .editLineMark({ strokeWidth: 1, opacity: 1 })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [1262304000000, 1325376000000, 1388534400000, 1451606400000],
          ticks: { length: 5, color: "#888" },
          labels: { format: "%Y", fontSize: 10, color: "black", offset: 7 }
        },
        line: { color: "#888" },
        title: {
          text: "Time",
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          offset: 27.484375
        }
      },
      y: {
        ticksAndLabels: {
          values: [0, 10000, 20000, 30000, 40000],
          ticks: { length: 5, color: "#888" },
          labels: { format: ",.0f", fontSize: 10, color: "black", offset: 7 }
        },
        line: { color: "#888" },
        title: {
          text: "value",
          fontSize: 11,
          fontWeight: 700,
          color: "black",
          offset: 47.5859375
        }
      }
    })
    .createHorizontalGrid({
      values: [0, 10000, 20000, 30000, 40000],
      lineWidth: 1
    })
    .createVerticalGrid({
      values: [1262304000000, 1325376000000, 1388534400000, 1451606400000],
      lineWidth: 1
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
    })
    .facet({
      field: "category",
      values: ["Col1", "Col2", "Col3", "Col4"],
      headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 10.609375 }
    })
    .editFacetGuides({ axes: "outer", legend: "shared" })
    .editCompositionLayout({ gap: 24, spacing: "plot", align: "start" })
    .createTitle({
      text: "category",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      align: "center"
    })
    .editTitle({ offset: -2.421875 })
    ;
}