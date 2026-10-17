// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 274, height: 274, margin: { left: 44, top: 52, right: 55, bottom: 22 } })
    .createData({ id: "cpi", values: data })
    .filterData({ id: "ge1990", field: "year", predicate: { op: "gt", value: "1989" } })
    .filterData({ id: "lt2022", field: "year", predicate: { op: "lt", value: "2022" } })
    .createComputedData({ id: "cpiValue", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [631152000000, 1638316800000], nice: false })
    .editYScale({ domain: [-10, 40] })
    .editLineMark({ stroke: "#86d0bb", strokeWidth: 1.5, opacity: 1 })
    .createAxes({
        x: {
          line: {},
          ticksAndLabels: {
            values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
            ticks: {},
            labels: {
              fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true,
              labelMap: [
                { value: 788918400000, label: "" },
                { value: 1104537600000, label: "" },
                { value: 1420070400000, label: "" }
              ]
            }
          },
          title: false
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [-10, 0, 10, 20, 30, 40],
            ticks: {},
            labels: {
              fontSize: 10, fontFamily: "sans-serif", offset: 7,
              labelMap: [{ value: -10, label: "\u221210" }]
            }
          },
          title: { text: "12-Month %", fontSize: 11, fontWeight: "bold", offset: 33 }
        }
    })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "titleGlyphs", measurements: [{ text: "CPIH 12-Month: Energy and unprocessed food 2015 = 100.", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 263.796875 }] } })
    .createTitle({
      text: "CPI",
      titleStyle: { fontSize: 13, fontWeight: "bold", fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -39, gap: 3 })
    .editTitle({ subtitle: "CPIH 12-Month: Energy and unprocessed food 2015 = 100.\nSource: ONS" });
}