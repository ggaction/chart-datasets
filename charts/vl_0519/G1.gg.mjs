// DOCS: doc-b11b4627b143730d, doc-a929fd81abd909f8, doc-1740a98a3616e322
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 345, height: 362, margin: { left: 38, top: 40, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "dates", as: "dateTs", expression: { op: "parseTime", operand: { field: "date" }, format: "auto" } })
    .createComputedData({ id: "vals", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "dateTs", fieldType: "temporal", scale: { domain: [31536000000, 1640995200000] } },
      y: { field: "valueNum", scale: { domain: [0, 3500], zero: true } },
      guides: false
    })
    .editLineMark({ stroke: "seagreen", strokeWidth: 2, opacity: 1 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: {},
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500],
          ticks: {},
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            labelMap: [
      { value: 0, label: "0" },
      { value: 500, label: "500" },
      { value: 1000, label: "1,000" },
      { value: 1500, label: "1,500" },
      { value: 2000, label: "2,000" },
      { value: 2500, label: "2,500" },
      { value: 3000, label: "3,000" },
      { value: 3500, label: "3,500" }
    ]
          }
        },
        title: false
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({
      text: "Unemployment level (16+)",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      alongOffset: -32.0244140625
    })
    .editTitle({ offset: -13 })
    .editTitle({
      subtitle: "United Kingdom (thousands) seasonally adjusted",
      gap: 3,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    });
}
