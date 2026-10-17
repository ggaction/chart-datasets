import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({ width: 442, height: 374, margin: { left: 35, top: 52, right: 7, bottom: 22 } })
    .createData({ id: "iip", values: data })
    .createFoldData({ id: "folded", fields: ["France", "Germany"], as: { key: "var", value: "val" } })
    .createComputedData({
      id: "scaled",
      as: "val_bn",
      expression: { op: "divide", left: { op: "coalesce", operands: [{ op: "toNumber", operand: { field: "val" } }, { constant: 0 }] }, right: { constant: 1000 } }
    })
    .createComputedData({ id: "yearMs", as: "YearMs", expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" } })
    .filterData({ id: "iipFinal", field: "YearMs", predicate: { op: "lt", value: 1031152000000 } })
    .createLinePlot({
      x: { field: "YearMs", fieldType: "temporal", temporalUnit: "timestamp", scale: { domain: [315532800000, 1009843200000], nice: false } },
      y: { field: "val_bn", fieldType: "quantitative", scale: { domain: [-100, 350] } },
      guides: false
    })
    .encodeColor({ field: "var", target: "linePlot", scale: { domain: ["France", "Germany"], range: ["red", "blue", "green", "yellow", "pink"] } })
    .editLineMark({ strokeWidth: 2, opacity: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-year-label-metrics",
        measurements: [
          { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1982", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1984", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1986", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1988", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1992", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1994", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1996", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "1998", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }
        ]
      }
    })
    .createAxes({
      x: { line: {}, ticksAndLabels: { values: [315532800000, 378691200000, 441763200000, 504921600000, 567993600000, 631152000000, 694224000000, 757382400000, 820454400000, 883612800000, 946684800000, 1009843200000], ticks: {}, labels: { format: "%Y", fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true } }, title: false },
      y: { line: {}, ticksAndLabels: { count: 8, ticks: {}, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } }, title: false }
    })
    .createLegend({ position: "top-left", title: false, labels: { fontSize: 10 } })
    .createTitle({
      text: "International Investment Position (IIP)",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -13
    })
    .editTitle({ alongOffset: -29.5244140625 })
    .editTitle({
      subtitle: "USD Billions. Source: IMF BOPS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 3
    });
}