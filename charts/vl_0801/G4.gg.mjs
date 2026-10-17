// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 300, height: 314, margin: { left: 44, top: 27, right: 6, bottom: 37 } })
    .editCanvas({ background: "rgba(255,255,255,0)" })
    .createData({ values: data })
    .createComputedData({ id: "heightNum", as: "HeightNum", expression: { op: "toNumber", operand: { field: "Height" } } })
    .createComputedData({ id: "weightNum", as: "WeightNum", expression: { op: "toNumber", operand: { field: "Weight" } } })
    .createScatterPlot({
      x: { field: "HeightNum", fieldType: "quantitative" },
      y: { field: "WeightNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 250] })
    .editYScale({ domain: [0, 250] })
    .encodePointRadius({ value: 2.7386 })
    .encodeOpacity({ value: 0.7 })
    .encodeStroke({ value: "#00A14E" })
    .editPointMark({ fill: "none", strokeWidth: 2 })
    .createXAxis({
      line: { color: "#00A14E" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: { color: "#00A14E", length: 5 },
        labels: { color: "#00A14E", fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: { text: "Height", color: "#00A14E", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: { color: "#00A14E" },
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: { color: "#00A14E", length: 5 },
        labels: { color: "#00A14E", fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Weight", color: "#00A14E", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 32, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: { color: "#b9d4c7" }, vertical: { color: "#b9d4c7" } })
    .createTitle({
      text: "Oceania",
      offset: -13,
      titleStyle: { color: "#00A14E", fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center" });
}