// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 382, margin: { left: 33, top: 10, right: 17, bottom: 22 } })
    .editCanvas({ background: "#FFFFFF" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-actual-font-metrics",
        measurements: [
          { text: "April", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.015625 },
          { text: "July", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 17.796875 },
          { text: "October", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.578125 },
          { text: "2021", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2023", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2024", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2025", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "1,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "2,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "3,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "3,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 }
        ]
      }
    })
    .createData({ id: "source", values: data })
    .createComputedData({
      id: "dateUTC",
      as: "dateUTC",
      expression: { op: "concat", operands: [{ field: "week_ending" }, { constant: " UTC" }] }
    })
    .createComputedData({
      id: "city",
      as: "caserateCity",
      expression: { op: "if", condition: { op: "eq", left: { field: "CASERATE_CITY" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "CASERATE_CITY" } } }
    })
    .createComputedData({
      id: "bk",
      as: "caserateBk",
      expression: { op: "if", condition: { op: "eq", left: { field: "CASERATE_BK" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "CASERATE_BK" } } }
    })
    .createComputedData({
      id: "series",
      as: "caserate11226",
      expression: { op: "if", condition: { op: "eq", left: { field: "CASERATE_11226" }, right: { constant: "" } }, then: { constant: 0 }, else: { op: "toNumber", operand: { field: "CASERATE_11226" } } }
    })
    .createLinePlot({ x: { field: "dateUTC", fieldType: "temporal" }, y: { field: "caserateCity" }, guides: false })
    .encodeStroke({ value: "black", target: "linePlot" })
    .encodeStrokeWidth({ value: 1.5, target: "linePlot" })
    .editLineMark({ target: "linePlot", curve: "natural" })
    .createPointMark({ id: "cityPoints", data: "series" })
    .editPointMark({ target: "cityPoints", fill: "black", stroke: false })
    .encodeX({ field: "dateUTC", fieldType: "temporal", target: "cityPoints" })
    .encodeY({ field: "caserateCity", target: "cityPoints" })
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "cityPoints" })
    .createLineMark({ id: "bkLine", data: "series" })
    .encodeX({ field: "dateUTC", fieldType: "temporal", target: "bkLine" })
    .encodeY({ field: "caserateBk", target: "bkLine" })
    .encodeStroke({ value: "darkgrey", target: "bkLine" })
    .encodeStrokeWidth({ value: 1.5, target: "bkLine" })
    .editLineMark({ target: "bkLine", curve: "natural" })
    .createPointMark({ id: "bkPoints", data: "series" })
    .editPointMark({ target: "bkPoints", fill: "darkgrey", stroke: false })
    .encodeX({ field: "dateUTC", fieldType: "temporal", target: "bkPoints" })
    .encodeY({ field: "caserateBk", target: "bkPoints" })
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "bkPoints" })
    .createLineMark({ id: "zipLine", data: "series" })
    .encodeX({ field: "dateUTC", fieldType: "temporal", target: "zipLine" })
    .encodeY({ field: "caserate11226", target: "zipLine" })
    .encodeStroke({ value: "hotpink", target: "zipLine" })
    .encodeStrokeWidth({ value: 3, target: "zipLine" })
    .editLineMark({ target: "zipLine", curve: "natural" })
    .createPointMark({ id: "zipPoints", data: "series" })
    .encodeX({ field: "dateUTC", fieldType: "temporal", target: "zipPoints" })
    .encodeY({ field: "caserate11226", target: "zipPoints" })
    .encodeStroke({ value: "hotpink", target: "zipPoints" })
    .editPointMark({ target: "zipPoints", fill: "white", strokeWidth: 2 })
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "zipPoints" })
    .editXScale({ domain: [1583539200000, 1760140800000], nice: false })
    .editYScale({ domain: [0, 3500] })
    .createHorizontalGrid({ values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500], strokeDash: [2, 2] })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      
      line: {},
      ticksAndLabels: { values: [1585699200000, 1593561600000, 1601510400000, 1609459200000, 1617235200000, 1625097600000, 1633046400000, 1640995200000, 1648771200000, 1656633600000, 1664582400000, 1672531200000, 1680307200000, 1688169600000, 1696118400000, 1704067200000, 1711929600000, 1719792000000, 1727740800000, 1735689600000, 1743465600000, 1751328000000, 1759276800000], ticks: { length: 5 }, labels: { fontSize: 10, offset: 7, color: "black", labelMap: [{ value: 1585699200000, label: "April" }, { value: 1593561600000, label: "July" }, { value: 1601510400000, label: "October" }, { value: 1609459200000, label: "2021" }, { value: 1617235200000, label: "April" }, { value: 1625097600000, label: "July" }, { value: 1633046400000, label: "October" }, { value: 1640995200000, label: "2022" }, { value: 1648771200000, label: "April" }, { value: 1656633600000, label: "July" }, { value: 1664582400000, label: "October" }, { value: 1672531200000, label: "2023" }, { value: 1680307200000, label: "April" }, { value: 1688169600000, label: "July" }, { value: 1696118400000, label: "October" }, { value: 1704067200000, label: "2024" }, { value: 1711929600000, label: "April" }, { value: 1719792000000, label: "July" }, { value: 1727740800000, label: "October" }, { value: 1735689600000, label: "2025" }, { value: 1743465600000, label: "April" }, { value: 1751328000000, label: "July" }, { value: 1759276800000, label: "October" }] } },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .createYAxisLabels({ values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500], fontSize: 10, offset: 2 })
    .editYAxisLabels({ color: "black", format: ",.0f" });
}