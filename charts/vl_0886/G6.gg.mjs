// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-5f9c35fbf79658cc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 530, height: 413, margin: { left: 184, top: 36, right: 6, bottom: 37 } })
    .editCanvas({ background: "#fff0d8" })
    .createData({ values: data })
    .createComputedData({
      id: "barFillData",
      as: "barFill",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Industry" }, right: { constant: "Data Sceince & Data Engineers" } },
        then: { constant: "red" },
        else: { constant: "#da83278c" }
      }
    })
    .createBarPlot({
      x: { field: "Average Weekly Income", fieldType: "quantitative" },
      y: {
        field: "Industry", fieldType: "nominal"
      },
      guides: false
    })
    .editXScale({ domain: [0, 1800] })
    .editYScale({ domain: ["Accommodation and Food Service ", "Administrative and Support Service ", "Agriculture, Forestry and Fishing", "Arts, Entertainment and Recreation", "Construction", "Data Sceince & Data Engineers", "Education", "Electricity, Gas and Water Supply", "Financial & Insurance ", "Health and Social Work", "Information and Communication", "Manufacturing ", "Mining and Quarrying", "Other Service ", "Professional, Scientific & Technical ", "Public Administration", "Real Estate ", "Retail Trade and Repairs", "Transport and Storage", "Wholesale Trade"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeColor({ field: "barFill", layout: "overlay" })
    .editColorScale({ target: "barPlot", domain: ["#da83278c", "red"], range: ["#da83278c", "red"] })
    .encodeBarWidth({ pixels: 15 })
    .editBarMark({ stroke: false })
    .createSummaryData({
      id: "meanIncome",
      aggregates: [{ op: "mean", field: "Average Weekly Income", as: "mean_Average Weekly Income" }]
    })
    .createRuleMark({ id: "meanRule", data: "meanIncome", stroke: "#3e1812" })
    .editRuleMark({ target: "meanRule", strokeWidth: 3 })
    .encodeX({ field: "mean_Average Weekly Income", target: "meanRule", fieldType: "quantitative" })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-income-glyphs", measurements: [{ text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }, { text: "400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }, { text: "600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }, { text: "800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 }, { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "1,200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "1,400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "1,600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "1,800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }, { text: "Mean Weekly Income", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 110.46875 }, { text: "Accommodation and Food Service", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 152.859375 }, { text: "Administrative and Support Service", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 156.1875 }, { text: "Agriculture, Forestry and Fishing", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 144.515625 }, { text: "Arts, Entertainment and Recreation", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 156.203125 }, { text: "Construction", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 56.140625 }, { text: "Data Sceince & Data Engineers", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 140.640625 }, { text: "Education", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.484375 }, { text: "Electricity, Gas and Water Supply", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 147.84375 }, { text: "Financial & Insurance", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 96.171875 }, { text: "Health and Social Work", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 104.328125 }, { text: "Information and Communication", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 141.75 }, { text: "Manufacturing", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 63.375 }, { text: "Mining and Quarrying", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 95.609375 }, { text: "Other Service", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 61.140625 }, { text: "Professional, Scientific & Technical", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 154.34375 }, { text: "Public Administration", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 92.828125 }, { text: "Real Estate", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.703125 }, { text: "Retail Trade and Repairs", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 110.625 }, { text: "Transport and Storage", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 99.703125 }, { text: "Wholesale Trade", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 75.0625 }, { text: "Industry", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 43.40625 }, { text: "Weekly Income in the UK by Industry. Is there outsized demand for data professionals?", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 454.984375 }, { text: "Source: ONS & GlassDoor", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 118.375 }] } })
    .createTitle({
      text: "Weekly Income in the UK by Industry. Is there outsized demand for data professionals? ",
      titleStyle: { fontSize: 11 },
      alongOffset: -178.19140625
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .editTitle({ subtitleStyle: { fontSize: 10 }, offset: -10.421875, gap: 2.8125 })
    .editTitle({ subtitle: "Source: ONS & GlassDoor" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Mean Weekly Income", fontSize: 11, offset: 27.578125 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { format: ",.0f" } }, title: { fontWeight: 700 } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Industry", fontSize: 11, offset: 171.61328125, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { labelMap: [{ value: "Accommodation and Food Service ", label: "Accommodation and Food Service" }, { value: "Administrative and Support Service ", label: "Administrative and Support Service" }, { value: "Agriculture, Forestry and Fishing", label: "Agriculture, Forestry and Fishing" }, { value: "Arts, Entertainment and Recreation", label: "Arts, Entertainment and Recreation" }, { value: "Construction", label: "Construction" }, { value: "Data Sceince & Data Engineers", label: "Data Sceince & Data Engineers" }, { value: "Education", label: "Education" }, { value: "Electricity, Gas and Water Supply", label: "Electricity, Gas and Water Supply" }, { value: "Financial & Insurance ", label: "Financial & Insurance" }, { value: "Health and Social Work", label: "Health and Social Work" }, { value: "Information and Communication", label: "Information and Communication" }, { value: "Manufacturing ", label: "Manufacturing" }, { value: "Mining and Quarrying", label: "Mining and Quarrying" }, { value: "Other Service ", label: "Other Service" }, { value: "Professional, Scientific & Technical ", label: "Professional, Scientific & Technical" }, { value: "Public Administration", label: "Public Administration" }, { value: "Real Estate ", label: "Real Estate" }, { value: "Retail Trade and Repairs", label: "Retail Trade and Repairs" }, { value: "Transport and Storage", label: "Transport and Storage" }, { value: "Wholesale Trade", label: "Wholesale Trade" }] } }, title: { fontWeight: 700 } })
    .createGuides({ axes: false, grid: { horizontal: false, vertical: { scale: "x", color: "#ddd", lineWidth: 1 } }, legend: false });
}