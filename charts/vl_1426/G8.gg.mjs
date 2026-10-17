import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1

export function buildChart() {
  return chart()
    .createCanvas({ width: 560, height: 154, margin: { left: 204, top: 5, right: 6, bottom: 37 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-all-guide-glyphs", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "8,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "12,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "14,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "16,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "18,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 }, { text: "counts for variant", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 92.90625 }, { text: "Lib-1 2021-10-28_thaw-1_VSVG_control_1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }, { text: "Lib-1 2021-10-28_thaw-1_VSVG_control_2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }, { text: "Lib-2 2021-10-28_thaw-1_VSVG_control_1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }, { text: "Lib-2 2021-10-28_thaw-1_VSVG_control_2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }, { text: "Lib-3 2021-10-28_thaw-1_VSVG_control_1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }, { text: "Lib-3 2021-10-28_thaw-1_VSVG_control_2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }, { text: "Lib-4 2021-10-28_thaw-1_VSVG_control_1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }, { text: "Lib-4 2021-10-28_thaw-1_VSVG_control_2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 191.796875 }] } })
    .createData({ values: data })
    .createBarPlot({ x: { lower: "percentile_25", upper: "percentile_75" }, y: { field: "library_sample" }, guides: false })
    .editXScale({ type: "symlog", constant: 20, domain: [0, 20000] })
    .editYScale({ domain: ["Lib-1 2021-10-28_thaw-1_VSVG_control_1", "Lib-1 2021-10-28_thaw-1_VSVG_control_2", "Lib-2 2021-10-28_thaw-1_VSVG_control_1", "Lib-2 2021-10-28_thaw-1_VSVG_control_2", "Lib-3 2021-10-28_thaw-1_VSVG_control_1", "Lib-3 2021-10-28_thaw-1_VSVG_control_2", "Lib-4 2021-10-28_thaw-1_VSVG_control_1", "Lib-4 2021-10-28_thaw-1_VSVG_control_2"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editBarMark({ fill: "blue" })
    .encodeBarWidth({ band: 1 })
    .createRuleMark({ id: "minmaxRule", stroke: "blue", opacity: 0.5 })
    .encodeXRange({ target: "minmaxRule", lower: "min", upper: "max" })
    .encodeY({ field: "library_sample", fieldType: "nominal", target: "minmaxRule" })
    .createTickMark({ id: "medianBar", length: 12.6 })
    .encodeX({ field: "median" })
    .encodeY({ field: "library_sample" })
    .editTickMark({ stroke: "black", strokeWidth: 2 })
    .createTickMark({ id: "thresholdBar", length: 12.6 })
    .encodeX({ field: "pre_count_threshold" })
    .encodeY({ field: "library_sample" })
    .editTickMark({ stroke: "red", strokeWidth: 2 })
    .createXAxis({

      line: {},
      ticksAndLabels: {
        values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 5.5, alongOffset: 0.5, labelMap: [{ value: 0, label: "0" }, { value: 2000, label: "2,000" }, { value: 4000, label: "4,000" }, { value: 6000, label: "" }, { value: 8000, label: "8,000" }, { value: 10000, label: "" }, { value: 12000, label: "" }, { value: 14000, label: "14,000" }, { value: 16000, label: "" }, { value: 18000, label: "" }, { value: 20000, label: "" }] }
      },
      title: { text: "counts for variant", fontSize: 11, offset: 27.578125 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black", fontWeight: 700 })
    .createYAxis({

      line: {},
      ticksAndLabels: {
        values: ["Lib-1 2021-10-28_thaw-1_VSVG_control_1", "Lib-1 2021-10-28_thaw-1_VSVG_control_2", "Lib-2 2021-10-28_thaw-1_VSVG_control_1", "Lib-2 2021-10-28_thaw-1_VSVG_control_2", "Lib-3 2021-10-28_thaw-1_VSVG_control_1", "Lib-3 2021-10-28_thaw-1_VSVG_control_2", "Lib-4 2021-10-28_thaw-1_VSVG_control_1", "Lib-4 2021-10-28_thaw-1_VSVG_control_2"],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.390625 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createGrid({
      horizontal: false,
      vertical: { values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000, 20000] }
    })
    .editVerticalGrid({ color: "#ddd" });
}