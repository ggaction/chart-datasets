import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-cffb363a4b862ced doc-ef5a28c0c3f3c920
export function buildChart() {
  return chart()
    .createCanvas({ width: 376, height: 392, margin: { left: 68, top: 40, right: 18, bottom: 52 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0342-own-source-SVG-observer", measurements: [{ text: "1960", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }] } })
    .createData({ values: data })
    .createWindowData({ id: "lagged", operations: [{ op: "lag", field: "value", as: "laggedValue", offset: 12 }] })
    .filterData({ id: "validLag", field: "laggedValue", predicate: { op: "neq", value: null } })
    .createComputedData({ id: "ratio", as: "data", expression: { op: "subtract", left: { op: "divide", left: { op: "toNumber", operand: { field: "value" } }, right: { op: "toNumber", operand: { field: "laggedValue" } } }, right: { constant: 1 } } })    .createLinePlot({
      x: { field: "date", fieldType: "temporal", scale: { domain: [-315619200000, 1680307200000] } },
      y: { field: "data", scale: { domain: [-0.02, 0.12] } },
      guides: false
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 0 }
        },
        title: { text: "date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [-0.02, 0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: ".2f", labelMap: [{ value: -0.02, label: "−0.02" }], offset: 6.5, alongOffset: 0.890625 }
        },
        title: { text: "data", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 40.724609375, alongOffset: 0.5 }
      }
    })
    .createGrid({
      vertical: { values: [-315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000], color: "#ddd", alongOffset: 0.5 },
      horizontal: { values: [-0.02, 0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12], color: "#ddd", alongOffset: 0.5 }
    })
    .editLineMark({ stroke: "red", strokeWidth: 2, curve: "step" })
    .createScatterPlot({
      x: { field: "date", fieldType: "temporal", scale: { domain: [-315619200000, 1680307200000] } },
      y: { field: "data", scale: { domain: [-0.02, 0.12] } },
      guides: false
    })
    .encodePointRadius({ value: 7.0710678118654755 })
    .editPointMark({ fill: "red", stroke: "rgba(220,220,220,0.8)", strokeWidth: 5 })
    .createRuleMark({ data: "ratio", stroke: "black", opacity: 0 })
    .encodeX({ field: "date", fieldType: "temporal", scale: { domain: [-315619200000, 1680307200000] } })
    .editRuleMark({ strokeWidth: 1 })
    .createTitle({ text: "US inflation", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "PCE, rate of change on a year ago", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -47.302734375 });
}