import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e

const X_TICKS = [157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000];
const Y_TICKS = [0, 2000000000000, 4000000000000, 6000000000000, 8000000000000, 10000000000000, 12000000000000, 14000000000000, 16000000000000, 18000000000000, 20000000000000];

export function buildChart() {
  return chart()
    .createCanvas({ width: 730, height: 477, margin: { left: 116, top: 40, right: 114, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", temporalUnit: "auto", scale: { domain: [63072000000, 1609459200000], nice: false } },
      y: { field: "valueNum", fieldType: "quantitative", scale: { domain: [0, 20000000000000] } },
      guides: false
    })
    .encodeGroup({ field: "country" })
    .encodeColor({ field: "country", fieldType: "nominal", scale: { palette: "set1", domain: ["Canada", "France", "Germany", "Italy", "Japan", "United Kingdom", "United States"] } })
    .editLineMark({ strokeWidth: 2.5 })
    .createTitle({
      text: "The total consumption of G7 Countries since 1972 (Last 50 years)",
      titleStyle: { fontSize: 13, fontFamily: "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif", fontWeight: 700, color: "darkblue" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -111 })
    .editTitle({ subtitle: "Source: World Bank" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-axis-glyphs",
        measurements: [
          { text: "1975", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "2,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 83.421875 },
          { text: "4,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 83.421875 },
          { text: "6,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 83.421875 },
          { text: "8,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 83.421875 },
          { text: "10,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 88.984375 },
          { text: "12,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 88.984375 },
          { text: "14,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 88.984375 },
          { text: "16,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 88.984375 },
          { text: "18,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 88.984375 },
          { text: "20,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 88.984375 }
        ]
      }
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: X_TICKS,
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
          },
          title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 30 }
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: Y_TICKS,
            ticks: { color: "#888", length: 5 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
          },
          title: { text: "Total accumulated spending in US$ ", fontSize: 11, fontWeight: 700, offset: 105 }
        }
      },
      grid: {
        horizontal: { values: Y_TICKS, color: "#ddd" },
        vertical: { values: X_TICKS, color: "#ddd" }
      },
      legend: {
        channels: ["color"],
        position: "right",
        title: "G7 Countries",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { length: 10, lineWidth: 1.5 }
      }
    });
}