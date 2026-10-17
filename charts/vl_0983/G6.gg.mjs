import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33
const X_TICKS = [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000];
export function buildChart() {
  return chart()
    .createCanvas({ width: 248, height: 262, margin: { left: 39, top: 40, right: 34, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .filterData({ id: "gt1988", field: "year", predicate: { op: "gt", value: "1988" } })
    .filterData({ id: "lt2022", field: "year", predicate: { op: "lt", value: "2022" } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ value: "#86d0bb" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .editXScale({ domain: [599616000000, 1638316800000] })
    .editYScale({ domain: [0, 10] })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, values: X_TICKS, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, values: [0, 2, 4, 6, 8, 10], labels: { fontSize: 10, offset: 7 } },
      title: { text: "Annual rate %", fontSize: 11, offset: 30, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxis({ ticksAndLabels: { labels: { format: "%Y" } } })
    .editYAxis({ title: { fontWeight: 700 } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "cpi-title-metrics", measurements: [{ text: "CPI", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 21.671875 }, { text: "CPIH annual rate: all items 2015 = 100. Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 237.1630859375 }] } })
    .createTitle({
      text: "CPI",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ offset: -13, alongOffset: -33.123046875, gap: 1 })
    .editTitle({ subtitle: "CPIH annual rate: all items 2015 = 100. Source: ONS" })
    .editTitle({ titleStyle: { fontWeight: "700", color: "black" }, subtitleStyle: { color: "black" } });
}
