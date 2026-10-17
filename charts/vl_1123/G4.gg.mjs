import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d doc-8a4f6f06e0d37d5e doc-f30bfed200b50a98 doc-071c93dff3a5ea2e doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    // Source outer 1280x377, margins from contract; no external legend needed.
    .createCanvas({
      width: 1280,
      height: 377,
      margin: { top: 40, right: 7, bottom: 37, left: 64 }
    })
    .createData({ id: "housePrices", values: data })
    // Source transform: timeParse(datum.Date, '%d/%m/%Y') as date2
    .createComputedData({
      id: "withDate",
      as: "date2",
      expression: { op: "parseTime", operand: { field: "Date" }, format: "%d/%m/%Y" }
    })
    // G1: full final design declared here.
    .createLinePlot({
      x: {
        field: "date2",
        fieldType: "temporal"
      },
      y: {
        field: "Price",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ type: "time", domain: [709948800000, 1656633600000] })
    .editYScale({ domain: [0, 350000] })
    .editLineMark({ stroke: "#ff9c09", strokeWidth: 2 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 30,
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, format: "%b %d, %Y", color: "black", flush: true, labelMap: [
              { value: 757382400000, label: "" },
              { value: 820454400000, label: "" },
              { value: 883612800000, label: "" },
              { value: 946684800000, label: "" },
              { value: 1009843200000, label: "" },
              { value: 1072915200000, label: "" },
              { value: 1136073600000, label: "" },
              { value: 1199145600000, label: "" },
              { value: 1262304000000, label: "" },
              { value: 1325376000000, label: "" },
              { value: 1388534400000, label: "" },
              { value: 1451606400000, label: "" },
              { value: 1514764800000, label: "" },
              { value: 1577836800000, label: "" },
              { value: 1640995200000, label: "" }
            ] }
      },
      title: { text: "Date", fontSize: 11, fontWeight: "bold", offset: 28, color: "black" }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 8,
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, format: ",", color: "black" }
      },
      title: { text: "Price in £s - nominal", fontSize: 11, fontWeight: "bold", offset: 54, color: "black" }
    })
    .createGrid({
      horizontal: { count: 8, color: "#ddd" },
      vertical: { count: 31, color: "#ddd" }
    })
    .createTitle({ text: "UK average house prices", titleStyle: { fontSize: 13 }, offset: -10 })
    .editTitle({
      subtitle: "Source: ONS ",
      subtitleStyle: { fontStyle: "italic", fontSize: 10 },
      gap: 0
    });
}