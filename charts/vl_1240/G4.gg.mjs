import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({
      width: 324,
      height: 242,
      margin: { left: 39, top: 5, right: 85, bottom: 37 }
    })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_1240-source-font-widths", measurements: [{ text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "bits", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 19.5625 }, { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 }, { text: "precision", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 48.90625 }, { text: "CN", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 }, { text: "KCF", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20 }, { text: "Staple", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 }, { text: "ECO_HC", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.6875 }, { text: "AutoTrack", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.21875 }] } })
    .createData({ values: data })
    .createFoldData({
      id: "folded",
      fields: ["CN", "KCF", "Staple", "ECO_HC", "AutoTrack"]
    })
    .createLinePlot({ x: { field: "bits", fieldType: "quantitative" }, y: { field: "value", fieldType: "quantitative" }, guides: false })
    .editXScale({ domain: [1, 8], nice: false, reverse: true })
    .editYScale({ domain: [0, 90], nice: false })
    .encodeColor({ field: "key" })
    .editColorScale({ type: "ordinal", domain: ["CN", "KCF", "Staple", "ECO_HC", "AutoTrack"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [1, 2, 3, 4, 5, 6, 7, 8],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, flush: true }
      },
      title: { text: "bits", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "precision", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      title: false,
      symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] },
      labels: { fontSize: 10, color: "black" }
    });
}