import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-fb3b01cca895bdad, doc-24d00033f9fc3095, doc-ec68e400e364688b

export function buildChart() {
  return chart()
    .createCanvas({ width: 212, height: 254, margin: { left: 29, top: 47, right: 8, bottom: 32 } })
    .createData({ values: data })
    .createComputedData({ id: "yearTs", as: "yearTs", expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" } })
    .filterData({ id: "valid", field: "yearTs", noneOf: [null] })
    .createComputedData({ id: "totals", as: "totalsNum", expression: { op: "toNumber", operand: { field: "Totals" } } })
    .createComputedData({ id: "billions", as: "billions", expression: { op: "divide", left: { field: "totalsNum" }, right: { constant: 1000000000 } } })
    .createBarPlot({ x: { field: "yearTs", fieldType: "temporal", temporalUnit: "timestamp" }, y: { field: "billions" }, guides: false })
    .encodeBarWidth({ pixels: 4 })
    .editBarMark({ fill: "#86d0bb", stroke: false })
    .editXScale({ domain: [405422836363, 1677335563636], nice: false })
    .editYScale({ domain: [0, 110], nice: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 0 },
        labels: { fontSize: 10, offset: 7, rotation: { value: 45, unit: "degrees" } }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxis({ ticks: false })
    .editXAxisLine({ color: "#888" })
    .editXAxisLabels({ color: "black", format: "%Y" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createTitle({ text: "IMF lending outstanding ", titleStyle: { fontSize: 13 }, alongOffset: -23.6845703125 })
    .editTitle({ offset: -12, gap: 3, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({ subtitle: "Credit outstanding to all members\n SDRs (billions), Source: IMF", subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } });
}