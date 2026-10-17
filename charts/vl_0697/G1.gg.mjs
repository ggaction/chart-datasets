// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-7182bd642b5c2e5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 160,
      height: 178,
      margin: { left: 5, top: 23, right: 5, bottom: 5 }
    })
    .editCanvas({ background: "#fffcf9" })
    .createData({ values: data })
    .createComputedData({
      id: "pieData",
      as: "Pct",
      expression: { op: "toNumber", operand: { field: "Percentage" } }
    })
    .createPiePlot({ category: "Surface", value: "Pct", guides: false })
    .editArcMark({ innerRadius: { unit: "px", value: 50 }, stroke: false })
    .editColorScale({ domain: ["Grass", "Other"], range: ["#32a850", "#95A5A6"] })
    .createComputedData({
      id: "labelRows",
      as: "sourceLabel",
      expression: { constant: "8.96%" }
    })
    .createAnnotation({
      text: "8.96%",
      anchor: "plot-center",
      fontSize: 25
    })
    .encodeText({ field: "sourceLabel" })
    .editTextMark({ fill: "black" })
    .createTitle({
      text: "Grass",
      titleStyle: { fontSize: 14, fontWeight: 700 },
      offset: -10.71875
    })
    .editTitle({ align: "center" });;
}
