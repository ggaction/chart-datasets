import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0
export function buildChart() {
  return chart()
    .createCanvas({ width: 560, height: 98, margin: { left: 204, top: 5, right: 6, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-all-guide-glyphs", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "3,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "7,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "8,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "9,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "11,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 29.859375 }, { text: "12,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "counts for variant", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 92.90625 }, { text: "Lib-1 2022-03-25_thaw-1_VSVG_control_1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }, { text: "Lib-1 2022-03-25_thaw-1_VSVG_control_2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }, { text: "Lib-2 2022-06-22_thaw-1_VSVG_control_1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }, { text: "Lib-3 2022-06-22_thaw-1_VSVG_control_1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }] } })
    .createData({ values: data })
    .createBarPlot({
      guides: false,
      x: {
        lower: "percentile_25",
        upper: "percentile_75",
        fieldType: "quantitative",
      },
      y: {
        field: "library_sample",
        fieldType: "nominal"
      }
    })
    .editXScale({ type: "symlog", constant: 20, domain: [0, 12000] })
    .editYScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ fill: "blue" })
    .encodeBarWidth({ band: 1 })
    .createRuleMark({ id: "rule", strokeWidth: 1 })
    .editRuleMark({ target: "rule", stroke: "blue", opacity: 0.5 })
    .encodeXRange({ target: "rule", lower: "min", upper: "max" })
    .encodeY({ target: "rule", field: "library_sample", fieldType: "nominal" })
    .createTickMark({ id: "median", length: 12.6 })
    .editTickMark({ target: "median", stroke: "black", strokeWidth: 2 })
    .encodeX({ target: "median", field: "median", fieldType: "quantitative" })
    .encodeY({ target: "median", field: "library_sample", fieldType: "nominal" })
    .createTickMark({ id: "threshold", length: 12.6 })
    .editTickMark({ target: "threshold", stroke: "red", strokeWidth: 2 })
    .encodeX({ target: "threshold", field: "pre_count_threshold", fieldType: "quantitative" })
    .encodeY({ target: "threshold", field: "library_sample", fieldType: "nominal" })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, color: "black", offset: 5.5, alongOffset: 0.5, labelMap: [{ value: 0, label: "0" }, { value: 1000, label: "1,000" }, { value: 2000, label: "2,000" }, { value: 3000, label: "" }, { value: 4000, label: "4,000" }, { value: 5000, label: "" }, { value: 6000, label: "" }, { value: 7000, label: "7,000" }, { value: 8000, label: "" }, { value: 9000, label: "" }, { value: 10000, label: "" }, { value: 11000, label: "" }, { value: 12000, label: "" }] }
          },
          title: { text: "counts for variant", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: ["Lib-1 2022-03-25_thaw-1_VSVG_control_1", "Lib-1 2022-03-25_thaw-1_VSVG_control_2", "Lib-2 2022-06-22_thaw-1_VSVG_control_1", "Lib-3 2022-06-22_thaw-1_VSVG_control_1"],
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.390625 }
          },
          title: false
        }
      },
      grid: {
        vertical: { values: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000], color: "#ddd" },
        horizontal: false
      }
    });
}