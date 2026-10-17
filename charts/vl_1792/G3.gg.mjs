import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-fc11e9fb291905d1, doc-b257fb08998617a5, doc-ba092ec842bafcc1

const CATEGORIES = [
  "Binging", "Compare self to others", "Mastery", "Punching self", "Self-care",
  "Self-harm / cutting", "Substance abuse", "Verbal assualts to others",
  "Violence towards others"
];
const COLORS = [
  "#4C66D6", "#65DEB4", "#F1BD39", "#E46759", "rgba(0, 0, 0, 0.25)",
  "#7DB2FF", "#FE8470", "#FFD645", "#2F9D7E"
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 487, height: 640, margin: { left: 42, top: 22, right: 5, bottom: 418 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "action", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "action", layout: "overlay" })
    .encodeOpacity({ value: 1 })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: CATEGORIES, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 26] })
    .editColorScale({ domain: CATEGORIES, range: COLORS })
    .createTitle({ text: "Actions (Summary)", offset: -8, titleStyle: { fontSize: 13 } })
    .createAxes({
      x: {
        ticksAndLabels: {
          ticks: { length: 0 },
          labels: {
            offset: 12, fontSize: 12, fontFamily: "Inter", fontWeight: 500,
            color: "rgba(0, 0, 0, 0.4)", rotation: -Math.PI / 2
          }
        },
        title: { text: "action", fontSize: 11, fontWeight: 700, offset: 152 }
      },
      y: {
        ticksAndLabels: {
          count: 6,
          ticks: { length: 0 },
          labels: { offset: 10, fontSize: 12, fontFamily: "Inter", fontWeight: 500, color: "rgba(0, 0, 0, 0.4)" }
        },
        title: { text: "Units", fontSize: 11, fontWeight: 700, offset: 33 }
      }
    })
    .createLegend({
      position: "bottom", offset: 180, columns: 2
    })
    .editLegend({
      title: "action",
      labels: { fontSize: 14, fontFamily: "Inter", fontWeight: 600, color: "rgba(0, 0, 0, 0.75)" },
      symbol: { layers: [{ type: "point", shape: "circle", size: 11.180339887498949 }] }
    });
}
