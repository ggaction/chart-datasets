import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 330, height: 374, margin: { left: 24, top: 52, right: 6, bottom: 22 } })
    .createData({ values: data })
    .createFoldData({ id: "folded", fields: ["Mean", "Mean_emplWeight", "Mean_turnWeight", "Central"], as: { key: "metric", value: "value" } })
    .createComputedData({
      id: "clean",
      as: "metricClean",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "metric" }, right: { constant: "Mean" } },
        then: { constant: "Mean" },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "metric" }, right: { constant: "Mean_emplWeight" } },
          then: { constant: "Weighted (Employment)" },
          else: {
            op: "if",
            condition: { op: "eq", left: { field: "metric" }, right: { constant: "Mean_turnWeight" } },
            then: { constant: "Weighted (Turnover)" },
            else: { constant: "Median (*estimated)" }
          }
        }
      }
    })
    .createComputedData({ id: "xnum", as: "yearNum", expression: { op: "toNumber", operand: { field: "year" } } })
    .createComputedData({ id: "ynum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({ x: "yearNum", y: "valueNum", guides: false })
    .encodeGroup({ target: "linePlot", field: "metricClean" })
    .encodeStrokeWidth({ target: "linePlot", value: 1 })
    .encodeColor({ field: "metricClean", target: "linePlot" })
    .editColorScale({ domain: ["Mean", "Median (*estimated)", "Weighted (Employment)", "Weighted (Turnover)"], range: ["blue", "orange", "green", "red"] })
    .createScatterPlot({ x: "yearNum", y: "valueNum", guides: false })
    .encodeColor({ field: "metricClean", target: "scatterPlot" })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ opacity: 1 })
    .editXScale({ domain: [1996, 2020] })
    .editYScale({ domain: [0, 30] })
    // DOCS: doc-c2eafbbd16fe3c71
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012, 2014, 2016, 2018, 2020],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          flush: true,
          labelMap: [
            { value: 1998, label: "" },
            { value: 2002, label: "" },
            { value: 2006, label: "" },
            { value: 2010, label: "" },
            { value: 2014, label: "" },
            { value: 2018, label: "" }
          ]
        }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black", format: ".0f" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black", format: ".0f" })
    .createLegend({
      position: "bottom-left",
      columns: 2,
      labels: { fontSize: 10 }
    })
    .editLegend({ title: false })
    .editLegendSymbols({
      symbol: { layers: [{ type: "point", shape: "circle", size: 5.75, stroke: "none", strokeWidth: 0 }] }
    })
    .createTitle({
      text: "Age - various measures",
      titleStyle: { fontSize: 13 },
      alongOffset: -18.123046875
    })
    .editTitle({ offset: -12, gap: 3, titleStyle: { fontWeight: 700, color: "black" } })
    .editTitle({
      subtitle: "Mean, Median* and weighted ages of UK firms\n",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}