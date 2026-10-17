// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const decades = [315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000];
  const yTicks = [0, 10000, 20000, 30000, 40000, 50000];
  return chart()
    .createCanvas({ width: 467, height: 334, margin: { left: 58, top: 47, right: 159, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "parsed", as: "date2", expression: { op: "parseTime", operand: { field: "Date" }, format: "%d/%m/%Y" } })
    .filterData({ id: "windowed", field: "date2", range: { min: 315532800000, max: 1672531199999 } })
    .createComputedData({ id: "sourceMissing", as: "missingFlag", expression: { op: "if", condition: { op: "eq", left: { field: "Value" }, right: { constant: "-" } }, then: { constant: 1 }, else: { constant: 0 } } })
    .createWindowData({ id: "sourceRuns", partitionBy: ["Type"], operations: [{ op: "cumulativeSum", field: "missingFlag", as: "sourceSegment" }] })
    .filterData({ id: "paintedValues", field: "missingFlag", oneOf: [0] })
    .createComputedData({ id: "numeric", as: "valueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createComputedData({
      id: "sourceTypeOrder",
      as: "sourceTypeOrder",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Type" }, right: { constant: "Private Enterprise" } },
        then: { constant: 0 },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "Type" }, right: { constant: "Housing Associations" } },
          then: { constant: 1 },
          else: {
            op: "if",
            condition: { op: "eq", left: { field: "Type" }, right: { constant: "Local Authorities" } },
            then: { constant: 2 },
            else: { constant: 3 }
          }
        }
      }
    })
    .createSortedData({
      id: "sourcePainterOrder",
      sortBy: [
        { field: "sourceTypeOrder", order: "ascending" },
        { field: "date2", order: "ascending" }
      ]
    })
    .createLinePlot({
      x: { field: "date2", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [315532800000, 1656633600000], nice: false })
    .editYScale({ domain: [0, 55000] })
    .encodeGroup({ fields: ["Type", "sourceSegment"] })
    .encodeColor({ field: "Type", fieldType: "nominal" })
    .editColorScale({ target: "linePlot", domain: ["All", "Private Enterprise", "Housing Associations", "Local Authorities"], range: ["rgb(66, 10, 104)", "rgb(147, 38, 103)", "rgb(221, 81, 58)", "rgb(252, 165, 10)"] })
    .editLineMark({ strokeWidth: 2 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-axis-labels", measurements: [{ text: "1980 Q1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.375 }, { text: "1990 Q1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.375 }, { text: "2000 Q1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.375 }, { text: "2010 Q1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.375 }, { text: "2020 Q1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.375 }, { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 }, { text: "10,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.5938 }, { text: "20,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.5938 }, { text: "30,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.5938 }, { text: "40,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.5938 }, { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.5938 }] } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true, labelMap: [{ value: 315532800000, label: "1980 Q1" }, { value: 631152000000, label: "1990 Q1" }, { value: 946684800000, label: "2000 Q1" }, { value: 1262304000000, label: "2010 Q1" }, { value: 1577836800000, label: "2020 Q1" }] }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: yTicks,
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "House Build Completions", fontSize: 11, fontWeight: 700, offset: 47, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: { scale: "y", values: yTicks, color: "#ddd", lineWidth: 1 }, vertical: { scale: "x", values: decades, color: "#ddd", lineWidth: 1 } })
    .createLegend({ title: "Type", position: "right" })
    .editLegendTitle({ target: "linePlot", fontSize: 11, fontWeight: 700 })
    .editLegendLabels({ target: "linePlot", fontSize: 10, fontFamily: "sans-serif" })
    .editLegendSymbols({ target: "linePlot", symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] } })
    .createTitle({
      text: "Quarterly House Building in England",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontWeight: 400, fontFamily: "sans-serif" }
    })
    .editTitle({ offset: -13, gap: 1, alongOffset: -52.5859375 })
    .editTitle({ subtitle: "By Private Enterprise, Housing Associations and Local Authorites.\nSource: Gov.uk (DLUHC)" });
}