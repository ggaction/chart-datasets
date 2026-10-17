// DOCS: doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

const FONT = "-apple-system,BlinkMacSystemFont,\"Segoe UI\",Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 167, margin: { left: 85, top: 5, right: 5, bottom: 22 } })
    .editCanvas({ background: "transparent" })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "time", fieldType: "quantitative" },
      y: { field: "tool", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 65] })
    .editYScale({ domain: ["Ruff", "Autoflake", "Flake8", "Pyflakes", "Pycodestyle", "Pylint"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeBarWidth({ pixels: 13 })
    .editBarMark({ fill: "#E15759", stroke: false })
    .filterData({ id: "textRegular", field: "tool", noneOf: ["ruff"] })
    .filterData({ id: "textBold", field: "tool", oneOf: ["ruff"] })
    .createTextMark({ data: "textRegular", fontSize: 12, fontFamily: FONT })
    .editTextMark({ fill: "#333333", baseline: "middle", dx: 6 })
    .encodeX({ target: "text", field: "time" })
    .encodeY({ target: "text", field: "tool", fieldType: "nominal" })
    .encodeText({ target: "text", field: "timeFormat" })
    .createTextMark({ id: "labelBold", data: "textBold", fontFamily: FONT })
    .editTextMark({ fill: "#333333", baseline: "middle", dx: 6 })
    .encodeX({ target: "labelBold", field: "time" })
    .encodeY({ target: "labelBold", field: "tool", fieldType: "nominal" })
    .encodeText({ target: "labelBold", field: "timeFormat" })
    .editTextMark({ target: "labelBold", fontWeight: "bold" })
    .createAxes({
      x: {
        line: false,
        ticksAndLabels: {
          values: [0, 20, 40, 60],
          ticks: { length: 0 },
          labels: {
            offset: 6, fontSize: 12, fontFamily: FONT, color: "#333333",
            labelMap: [{ value: 0, label: "0s" }, { value: 20, label: "20s" }, { value: 40, label: "40s" }, { value: 60, label: "60s" }]
          }
        },
        title: false
      },
      y: {
        line: false,
        ticksAndLabels: {
          ticks: { length: 0 },
          labels: { offset: 10, fontSize: 12, fontFamily: FONT, color: "#333333" }
        },
        title: false
      }
    })
    .createGrid({ horizontal: false, vertical: true })
    .editVerticalGrid({ values: [0, 20, 40, 60], color: "rgba(127,127,127,0.25)" });
}
