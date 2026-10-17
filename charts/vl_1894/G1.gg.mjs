import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e
export function buildChart() {
  return chart()
    .createCanvas({ width: 331, height: 357, margin: { left: 24, top: 35, right: 7, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "definedValues", field: "Value", noneOf: ["null"] })
    .createComputedData({ id: "co2Num", as: "valueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({
      x: { field: "Time", fieldType: "temporal", temporalUnit: "year", scale: { domain: [-2177452800000, 1546300800000] } },
      y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [-0.25, 25] } },
      guides: false
    })
    .encodeColor({
      field: "Country",
      fieldType: "nominal",
      scale: { domain: ["Brazil", "China", "United Kingdom", "United States", "India", "World"], range: ["rgb(206, 236, 180)", "rgb(154, 215, 184)", "rgb(95, 192, 191)", "rgb(51, 164, 193)", "rgb(33, 126, 182)", "rgb(34, 83, 162)"] }
    })
    .editLineMark({ strokeWidth: 2 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [-1577923200000, -946771200000, -315619200000, 315532800000, 946684800000],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: false
      }
    })
    .createTitle({
      text: "CO2 Emissions",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -18, gap: 3 })
    .editTitle({ subtitle: "Tonnes per capita. Source: Global Carbon Project" })
    .createLegend({ channels: ["color"], position: "top-left", title: false })
    .editLegend({ symbol: { length: 10, lineWidth: 1.5 }, labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" } });
}