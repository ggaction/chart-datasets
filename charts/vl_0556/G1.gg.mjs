// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-4aba5fb850bbed9c, doc-eacb474f181ce5c3, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 392,
      height: 374,
      margin: { left: 33, top: 52, right: 9, bottom: 22 }
    })
    .createData({ id: "source", values: data })
    .createComputedData({
      id: "pct",
      as: "ValuePCTNum",
      expression: { op: "toNumber", operand: { field: "ValuePCT" } }
    })
    .createLinePlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year",
        scale: { domain: [315532800000, 1609459200000] }
      },
      y: {
        field: "ValuePCTNum",
        fieldType: "quantitative",
        scale: { domain: [0, 0.14] }
      },
      guides: false
    })
    .editLineMark({ stroke: "rgb(128,0,0)", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year", scale: { domain: [315532800000, 1609459200000] } },
      y: { field: "ValuePCTNum", fieldType: "quantitative", scale: { domain: [0, 0.14] } },
      guides: false
    })
    .editPointMark({ fill: "rgb(128,0,0)", opacity: 1 })
    .encodePointRadius({ value: 3.5355339059327378 })
    .createAxes({
      x: {
        position: "bottom",
        line: { color: "#888" },
        ticksAndLabels: {
          count: 9,
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
        },
        title: false
      },
      y: {
        position: "left",
        line: { color: "#888" },
        ticksAndLabels: {
          count: 8,
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black", format: ".0%" }
        },
        title: false
      }
    })
    .createGrid({ horizontal: { count: 8, color: "#ddd" }, vertical: { count: 9, color: "#ddd" } })
    .createTitle({
      text: "Eldery workers - Japan",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Share of workforce that is 65+", offset: -11, alongOffset: -27.0146484375 });
}
