// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
  .createCanvas({ width: 861, height: 499, margin: { left: 53, top: 27, right: 8, bottom: 22 } })
  .createData({ values: data })
  .createComputedData({
    id: "signData",
    as: "dir",
    expression: {
      op: "if",
      condition: { op: "lt", left: { field: "YoY" }, right: { constant: 0 } },
      then: { constant: "negative" },
      else: { constant: "nonnegative" }
    }
  })
  .createTitle({
    text: "CASS per-mile Intermodal Pricing Index",
    titleStyle: { fontSize: 13, fontWeight: 700 },
    offset: -13
  })
  .editTitle({ align: "center" })
  .createBarPlot({
    x: { field: "Date", fieldType: "temporal", temporalUnit: "auto" },
    y: { field: "YoY", fieldType: "quantitative" },
    guides: false
  })
  .editXScale({ domain: [656463918987, 1652316881012], nice: false, range: [53, 853] })
  .editYScale({ domain: [-0.3, 0.6] })
  .encodeColor({
    field: "dir",
    layout: "overlay"
  })
  .editColorScale({ type: "ordinal", domain: ["nonnegative", "negative"], range: ["black", "orange"] })
  .editBarMark({ stroke: false })
  .encodeBarWidth({ pixels: 2 })
  .createAxes({
    x: {
      line: { color: "#888" },
      ticksAndLabels: { count: 20, labels: { fontSize: 10, offset: 7 } },
      title: false
    },
    y: {
      line: { color: "#888" },
      ticksAndLabels: { count: 12, labels: { fontSize: 10, offset: 7, format: ".0%" } },
      title: { text: "Year-over-year Index Change [%]", fontSize: 11, fontWeight: 700, offset: 36 }
    }
  })
  .createGrid({
    horizontal: { color: "#ddd", lineWidth: 1 },
    vertical: { color: "#ddd", lineWidth: 1 }
  });
}