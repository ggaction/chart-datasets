// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 443, height: 389, margin: { left: 35, top: 52, right: 8, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createFoldData({ id: "folded", fields: ["Current", "April_2004"], as: { key: "var", value: "val" } })
    .createComputedData({ id: "pct", as: "val_pct", expression: { op: "divide", left: { op: "if", condition: { op: "eq", left: { field: "val" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "val" } } }, right: { constant: 100 } } })
    .createComputedData({ id: "mnum", as: "MonthsN", expression: { op: "toNumber", operand: { field: "Months" } } })
    .filterData({ id: "positive", field: "val_pct", predicate: { op: "gt", value: 0 } })
    .filterData({ id: "curve", field: "MonthsN", predicate: { op: "lt", value: 300 } })
    .createLinePlot({
      x: { field: "MonthsN", fieldType: "quantitative" },
      y: { field: "val_pct", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [0, 240] })
    .editYScale({ target: "linePlot", domain: [0, 0.055] })
    .encodeGroup({ field: "var" })
    .encodeColor({ field: "var" })
    .editColorScale({ target: "linePlot", domain: ["April_2004", "Current"], range: ["rgb(128,0,0)", "green"] })
    .editLineMark({ strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "MonthsN", fieldType: "quantitative" },
      y: { field: "val_pct", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", domain: [0, 240] })
    .editYScale({ target: "scatterPlot", domain: [0, 0.055] })
    .encodeColor({ field: "var", target: "scatterPlot" })
    .editColorScale({ target: "scatterPlot", domain: ["April_2004", "Current"], range: ["rgb(128,0,0)", "green"] })
    .encodePointRadius({ value: 2.7386127875, target: "scatterPlot" })
    .editPointMark({ opacity: 1 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, offset: 7, flush: true }
        },
        title: { text: "Months", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035, 0.04, 0.045, 0.05, 0.055],
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, offset: 7, format: ".1%" }
        },
        title: false
      }
    })
    .createLegend({ target: "linePlot", channels: ["color"], position: "bottom-right" })
    .editLegend({ title: false, labels: { fontSize: 10 }, symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] } })
    .createTitle({ text: "US Yield Curve", titleStyle: { fontSize: 13, fontWeight: 700 }, alongOffset: -30 })
    .editTitle({ subtitle: "Yield for contracts of different maturity (months). Source: US Treasury", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, offset: -13 });
}