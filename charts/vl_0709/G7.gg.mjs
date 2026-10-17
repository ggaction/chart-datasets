// DOCS: doc-eb6e59db232dc6c0 (createHeatmap), doc-3558b809b504c100 (createHeatmap pre-gridded flow)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 165,
      height: 165,
      margin: { left: 20, top: 5, right: 5, bottom: 20 }
    })
    .editCanvas({ background: "transparent" })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "GDP per capita →", fieldType: "nominal" },
      y: { field: "High Giving Index →", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: ["A", "B", "C"], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: ["A", "B", "C"], paddingInner: 0, paddingOuter: 0 })
    .encodeColor({ field: "color", fieldType: "nominal" })
    .editColorScale({
      domain: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      range: ["#FFC390", "#FFC300", "#F1920E", "#E3611E", "#F41", "#839", "#C70089", "#900C3F", "#5A1846"]
    })
    .editRectMark({ stroke: false })
    .createXAxis({
      line: {},
      ticksAndLabels: false,
      title: {
        text: "GDP per capita →",
        offset: 10,
        fontSize: 11
      }
    })
    .editXAxisLine({ color: "transparent" })
    .editXAxisTitle({ color: "white", fontWeight: "bold", fontFamily: "sans-serif" })
    .createYAxis({
      line: {},
      ticksAndLabels: false,
      title: {
        text: "High Giving Index →",
        offset: 10,
        fontSize: 11
      }
    })
    .editYAxisLine({ color: "transparent" })
    .editYAxisTitle({ color: "white", fontWeight: "bold", fontFamily: "sans-serif" });
}