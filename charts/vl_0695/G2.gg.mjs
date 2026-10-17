// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-7182bd642b5c2e5e, doc-18627fd264d621fc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 160,
      height: 178,
      margin: { left: 5, top: 23, right: 5, bottom: 5 }
    })
    .editCanvas({
      background: "#fffcf9"
    })
    .createData({ values: data })
    .createComputedData({
      id: "pct",
      as: "Pct",
      expression: { op: "toNumber", operand: { field: "Percentage" } }
    })
    .createTitle({
      text: "Hard",
      titleStyle: { fontSize: 14, fontWeight: 700 },
      offset: -10.71875
    })
    .editTitle({
      align: "center"
    })
    .createPiePlot({ category: "Surface", value: "Pct", guides: false })
    .encodeColor({
      field: "Surface"
    })
    .editColorScale({
      domain: ["Hard", "Other"],
      range: ["#2656b5", "#95A5A6"]
    })
    .editArcMark({
      innerRadius: { unit: "px", value: 50 },
      stroke: false
    })
    .createComputedData({
      id: "labelRows",
      as: "sourceLabel",
      expression: { constant: "39.04%" }
    })
    .createAnnotation({
      text: "39.04%",
      anchor: "plot-center",
      fontSize: 25
    })
    .encodeText({
      field: "sourceLabel"
    })
    .editTextMark({
      fill: "black"
    });
}
