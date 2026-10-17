// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

const X_DOMAIN = [1533081600000, 1580515200000];
const X_TICKS = [1533081600000, 1538352000000, 1543622400000, 1548979200000, 1554076800000, 1559347200000, 1564617600000, 1569897600000, 1575158400000, 1580515200000];
const X_GRID = [1533081600000, 1535760000000, 1538352000000, 1541030400000, 1543622400000, 1546300800000, 1548979200000, 1551657600000, 1554076800000, 1556755200000, 1559347200000, 1562025600000, 1564617600000, 1567296000000, 1569897600000, 1572585600000, 1575158400000, 1577836800000, 1580515200000];
const Y_TICKS = [0, 5, 10, 15, 20];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 800,
      height: 309,
      margin: { left: 39, top: 22, right: 8, bottom: 37 }
    })
    .editCanvas({ background: "#F1F4F4" })
    .createData({ values: data })
    .createComputedData({
      id: "months",
      as: "MonthMs",
      expression: { op: "parseTime", operand: { field: "Month" }, format: "auto" }
    })
    .createLinePlot({
      x: { field: "MonthMs", fieldType: "temporal" },
      y: { field: "TMM" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN })
    .editYScale({ domain: [0, 24], zero: true })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "MonthMs", fieldType: "temporal" },
      y: { field: "TMM" },
      guides: false
    })
    .editPointMark({ target: "scatterPlot", fill: "#4c78a8", opacity: 1 })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386127875258306 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: X_TICKS,
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: "auto", flush: true, labelMap: [
          { value: 1533081600000, label: "Aug-18" },
          { value: 1538352000000, label: "Oct-18" },
          { value: 1543622400000, label: "Dec-18" },
          { value: 1548979200000, label: "Feb-19" },
          { value: 1554076800000, label: "Apr-19" },
          { value: 1559347200000, label: "Jun-19" },
          { value: 1564617600000, label: "Aug-19" },
          { value: 1569897600000, label: "Oct-19" },
          { value: 1575158400000, label: "Dec-19" },
          { value: 1580515200000, label: "Feb-20" }
        ] }
      },
      title: { text: "Month", fontSize: 11, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editXAxisTitle({ color: "black", fontWeight: "700" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Monthly temp. average at 2m (\u00B0C)", fontSize: 11, offset: 28 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ color: "black", fontWeight: "700" })
    .createGrid({
      horizontal: { values: Y_TICKS, color: "#ddd" },
      vertical: { values: X_GRID, color: "#ddd" }
    })
    .createTitle({
      text: "Station 10379 Potsdam",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: "700", color: "black" }
    })
    .editTitle({ align: "center" });
}
