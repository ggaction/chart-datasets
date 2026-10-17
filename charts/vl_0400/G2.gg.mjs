// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e, doc-c7f057310488a15b
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 343, height: 374, margin: { left: 35, top: 52, right: 8, bottom: 22 } })
    .createData({ values: data })
    .createFoldData({ id: "folded", fields: ["c2000", "c2005", "c2007", "c2009", "c2012", "c2013"], as: { key: "metric", value: "value" } })
    .createComputedData({ id: "numAge", as: "AgeNum", expression: { op: "toNumber", operand: { field: "Age" } } })
    .createComputedData({ id: "numValue", as: "valueNum", expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "value" } } } })
    .filterData({ id: "positive", field: "valueNum", predicate: { op: "gt", value: 0 } })
    .createLinePlot({
      x: { field: "AgeNum", fieldType: "quantitative" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({
      field: "metric",
      scale: {
        domain: ["c2000", "c2005", "c2007", "c2009", "c2012", "c2013"],
        range: ["rgb(64, 116, 245)", "rgb(37, 205, 207)", "rgb(90, 252, 119)", "rgb(197, 236, 60)", "rgb(255, 162, 35)", "rgb(223, 65, 17)"]
      }
    })
    .editLineMark({ strokeWidth: 1 })
    .createScatterPlot({
      x: { field: "AgeNum", fieldType: "quantitative" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 16] })
    .editYScale({ domain: [0, 0.04] })
    .encodeColor({
      target: "scatterPlot",
      field: "metric",
      scale: {
        domain: ["c2000", "c2005", "c2007", "c2009", "c2012", "c2013"],
        range: ["rgb(64, 116, 245)", "rgb(37, 205, 207)", "rgb(90, 252, 119)", "rgb(197, 236, 60)", "rgb(255, 162, 35)", "rgb(223, 65, 17)"]
      }
    })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386 })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [0, 2, 4, 6, 8, 10, 12, 14, 16],
          ticks: {},
          labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04],
          ticks: {},
          labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", format: ".1%" }
        },
        title: false
      }
    })
    .createLegend({
      position: "bottom-right",
      columns: 2,
      title: "Birth year"
    })
    .editLegendTitle({ fontSize: 11, fontWeight: 700 })
    .editLegendLabels({ fontSize: 10 })
    .editLegendSymbols({ symbol: { layers: [ { type: "point", shape: "circle", size: 5, strokeWidth: 1.5 } ] } })
    .createTitle({
      text: "Cohort effects",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      gap: 1,
      offset: -13,
      alongOffset: -29.79
    })
    .editTitle({
      subtitle: "Firm entry and exit as % of active firms. Source: BSD\n"
    });
}