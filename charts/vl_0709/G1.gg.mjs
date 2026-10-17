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
      x: { field: "GDP per capita →", fieldType: "nominal", scale: { domain: ["A", "B", "C"], paddingInner: 0, paddingOuter: 0 } },
      y: { field: "High Giving Index →", fieldType: "nominal", scale: { domain: ["A", "B", "C"], paddingInner: 0, paddingOuter: 0 } },
      guides: false
    })
    .encodeColor({
      field: "color",
      fieldType: "nominal",
      scale: {
        domain: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
        range: ["#FFC390", "#FFC300", "#F1920E", "#E3611E", "#F41", "#839", "#C70089", "#900C3F", "#5A1846"]
      }
    })
    .editRectMark({ stroke: false })
    .createAxes({
      x: {
        line: { color: "transparent" },
        ticksAndLabels: false,
        title: {
          text: "GDP per capita →",
          offset: 10,
          color: "white",
          fontSize: 11,
          fontWeight: "bold",
          fontFamily: "sans-serif"
        }
      },
      y: {
        line: { color: "transparent" },
        ticksAndLabels: false,
        title: {
          text: "High Giving Index →",
          offset: 10,
          color: "white",
          fontSize: 11,
          fontWeight: "bold",
          fontFamily: "sans-serif"
        }
      }
    });
}