import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc

export function buildChart() {
  return chart()
    .createCanvas({ width: 501, height: 492, margin: { left: 145, top: 5, right: 6, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "1367-source-browser-fonts",
        measurements: [
          { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.3", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.7", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "0.9", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.90625 },
          { text: "Accuracy", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 49.546875 },
          { text: "Continuous (Square)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 92.28125 },
          { text: "Continuous (Wedge)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 91.546875 },
          { text: "Juxtaposed (Continuous)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 111.1875 },
          { text: "Juxtaposed (Discrete)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 97.265625 },
          { text: "Traditional (Square)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 88.015625 },
          { text: "Traditional (Wedge)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 87.28125 },
          { text: "VSUP (Wedge)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 68.015625 },
          { text: "VSUP (Square)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 68.75 },
          { text: "Chart Type (Legend Type)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 134.0625 }
        ]
      }
    })
    .createData({ values: data })
    .createRuleMark({ id: "ciRule", stroke: "black" })
    .encodeXRange({ target: "ciRule", lower: "ci1", upper: "ci2" })
    .editRuleMark({ target: "ciRule", strokeWidth: 1 })
    .encodeY({ field: "key", fieldType: "ordinal", scale: { type: "band", domain: ["Continuous (Square)", "Continuous (Wedge)", "Juxtaposed (Continuous)", "Juxtaposed (Discrete)", "Traditional (Square)", "Traditional (Wedge)", "VSUP (Wedge)", "VSUP (Square)"], paddingInner: 0, paddingOuter: 0 } })
    .createScatterPlot({ x: "midmean", y: { field: "key", fieldType: "ordinal" }, guides: false })
    .encodePointRadius({ value: 3.5355339059327378 })
    .editPointMark({ stroke: "none", fill: "#4c78a8", opacity: 1 })
    .editXScale({ domain: [0, 1], nice: false })
    .editYScale({ type: "band", domain: ["Continuous (Square)", "Continuous (Wedge)", "Juxtaposed (Continuous)", "Juxtaposed (Discrete)", "Traditional (Square)", "Traditional (Wedge)", "VSUP (Wedge)", "VSUP (Square)"] })
    .editYScale({ paddingInner: 0, paddingOuter: 0 })
    .createGrid({ horizontal: false, vertical: { values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1], color: "#ddd" } })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", format: ".1f", flush: true, offset: 5.5, alongOffset: 0.5 }
        },
        title: { text: "Accuracy", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: ["Continuous (Square)", "Continuous (Wedge)", "Juxtaposed (Continuous)", "Juxtaposed (Discrete)", "Traditional (Square)", "Traditional (Wedge)", "VSUP (Wedge)", "VSUP (Square)"],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 }
        },
        title: { text: "Chart Type (Legend Type)", fontSize: 11, fontWeight: 700, color: "black", offset: 132.5986328125, rotation: { value: -90, unit: "degrees" } }
      }
    });
}