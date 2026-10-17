// DOCS: doc-76573a465e2b6a33, doc-dfae58344d5a524e, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 331,
      height: 362,
      margin: { left: 24, top: 40, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "unempNum",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [31536000000, 1735689600000] })
    .editYScale({ domain: [0, 12], zero: true })
    .encodeStroke({ value: "seagreen" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [
            157766400000, 473385600000, 788918400000,
            1104537600000, 1420070400000, 1735689600000
          ],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, format: "%Y", flush: true }
        },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    })
    .createTitle({
      text: "Unemployment level (16+)",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "United Kingdom (thousands) seasonally adjusted",
      gap: 1,
      alongOffset: -18.123046875
    });
}
