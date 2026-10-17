// DOCS: doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 486, height: 474, margin: { left: 29, top: 52, right: 7, bottom: 22 } })
    .createData({ values: data })
    
    .createComputedData({ id: "djia", as: "value", expression: { op: "toNumber", operand: { field: "DJIA" } } })
    .filterData({ id: "range", field: "DATE", range: { min: "1914-01-01", max: "1929-10-01" } })
    .createLinePlot({
      x: { field: "DATE", fieldType: "temporal" },
      y: { field: "value" },
      guides: false
    })
    .editXScale({ domain: [-1767225600000, -1270252800000], nice: false })
    .editYScale({ domain: [0, 400] })
    .encodeStroke({ value: "rgb(128,0,0)" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createTitle({ text: "What happened next?", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -13 })
    .editTitle({ gap: 1, alongOffset: -23.6845703125, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({ subtitle: "Dow Jones Industrial Average, 1914-1929. Source: FRED\n" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-1767225600000, -1704153600000, -1640995200000, -1577923200000, -1514764800000, -1451692800000, -1388534400000, -1325462400000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true }
      },
      title: false
    })
    .editXAxisLabels({ format: "%Y" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250, 300, 350, 400],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: false
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" });
}
