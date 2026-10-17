// DOCS: doc-6c2c08869091f6a0, doc-2bd5de4bd99e314a, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

const YEAR_VALUES = [
  473385600000, 631152000000, 788918400000, 946684800000,
  1104537600000, 1262304000000, 1420070400000, 1577836800000
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 334, height: 370, margin: { left: 29, top: 40, right: 5, bottom: 30 } })
    .createData({ values: data })
    .filterData({ id: "validYears", field: "Year", predicate: { op: "neq", value: "" } })
    .createComputedData({ id: "totalsNum", as: "Totals_num", expression: { op: "toNumber", operand: { field: "Totals_billions" } } })
    .createBarPlot({ x: { field: "Year", fieldType: "temporal", temporalUnit: "year" }, y: "Totals_num", guides: false })
    .editBarMark({ fill: "#13667a" })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [421086786206, 1661671613793], nice: false, range: [29, 329] })
    .editYScale({ domain: [0, 110] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        values: YEAR_VALUES,
        labels: {
          fontSize: 10, offset: 5.5,
          rotation: { value: 45, unit: "degrees" }
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .createTitle({
      text: "IMF Lending Outstaning",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      offset: -4
    })
    .editTitle({ offset: -13, gap: 3, alongOffset: -23.6846 }).editTitle({
      subtitle: "credit outstanding to all members, SDRs (billions), source IMF",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    });
}
