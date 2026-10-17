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
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "ValuePCTNum", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "rgb(128,0,0)", strokeWidth: 2 })
    .editXScale({ target: "linePlot", domain: [315532800000, 1609459200000] })
    .editYScale({ target: "linePlot", domain: [0, 0.14] })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "ValuePCTNum", fieldType: "quantitative" },
      guides: false
    })
    .editPointMark({ fill: "rgb(128,0,0)", opacity: 1 })
    .encodePointRadius({ value: 3.5355339059327378 })
    .editXScale({ target: "scatterPlot", domain: [315532800000, 1609459200000] })
    .editYScale({ target: "scatterPlot", domain: [0, 0.14] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 9,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 8,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".0%" }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createGrid({ horizontal: { count: 8, color: "#ddd" }, vertical: { count: 9, color: "#ddd" } })
    .createTitle({
      text: "Eldery workers - Japan",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Share of workforce that is 65+", offset: -11, alongOffset: -27.0146484375 });
}
