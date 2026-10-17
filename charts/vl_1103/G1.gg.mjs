// DOCS: doc-eb6e59db232dc6c0, doc-82e309a0b6ac0052, doc-0408a7975bd52e06
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 161,
      height: 132,
      margin: { left: 55, top: 10, right: 6, bottom: 22 }
    })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "y", fieldType: "ordinal", scale: { domain: ["France", "Morocco"] } },
      y: { field: "x", fieldType: "ordinal", scale: { domain: ["Argentina", "Croatia"] } },
      guides: false
    })
    .encodeColor({
      field: "Change",
      fieldType: "quantitative",
      scale: {
        domain: [8, 50],
        palette: "yellowgreenblue",
        interpolate: "hcl"
      }
    })
    .createComputedData({
      id: "textFill",
      as: "textFill",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "Change" }, right: { constant: 40 } },
        then: { constant: "black" },
        else: { constant: "white" }
      }
    })
    .createTextMark({
      id: "textMark",
      data: "textFill",
      fontSize: 11
    })
    .editTextMark({ target: "textMark", align: "center", baseline: "middle" })
    .encodeX({ target: "textMark", field: "y", fieldType: "ordinal" })
    .encodeY({ target: "textMark", field: "x", fieldType: "ordinal" })
    .encodeText({ target: "textMark", field: "Change" })
    .encodeColor({ target: "textMark", field: "textFill", scale: { id: "textColor", domain: ["black", "white"], range: ["black", "white"] } })
    .createAxes({
      x: { title: false, ticksAndLabels: { labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" } } },
      y: { title: false, ticksAndLabels: { labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" } } }
    })
    .editRectMark({ stroke: false })
    .createGrid({
      horizontal: { bandPosition: "boundary", color: "#ddd", lineWidth: 1 },
      vertical: { bandPosition: "boundary", color: "#ddd", lineWidth: 1 }
    });
}