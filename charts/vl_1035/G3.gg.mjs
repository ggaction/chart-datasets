// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 305,
      height: 247,
      margin: { left: 39, top: 10, right: 66, bottom: 37 }
    })
    .createData({ values: data })
    .createSortedData({ id: "countryStackOrder", sortBy: [{ field: "Country", order: "descending" }] })
.createStackData({ category: "Date", group: "Country", value: "Unemployment Rate" })
    .createBarPlot({
      x: {
        field: "Date",
        fieldType: "temporal",
        temporalUnit: "auto"
      },
      y: {
        lower: "Unemployment Rate_start",
        upper: "Unemployment Rate_end",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [1090008757894, 1671162442105], nice: false, range: [39, 239] })
    .editYScale({ domain: [0, 20] })
    .encodeBarWidth({ pixels: 5 })
    .encodeColor({
      field: "Country",
      layout: "overlay"
    })
    .editColorScale({ target: "barPlot", domain: ["GBR", "USA"], range: ["#033542", "#78969d"] })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7, format: "%Y" }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20],
          ticks: { length: 5 },
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Unemployment Rate", fontSize: 11, fontWeight: 700, offset: 32 }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createLegend({
      channels: ["color"],
      position: "right",
      title: "Country"
    })
    .editLegendTitle({ fontSize: 11, fontWeight: 700 })
    .editLegendLabels({ fontSize: 10 });
}
