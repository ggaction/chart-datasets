// DOCS: actual cached id copied from doc-8a4f6f06e0d37d5e, doc-b9261a4b2909a353, doc-8a63e04cdcf5e650, doc-fc16465e900ecb05, doc-8355bead4b606de7
import { chart } from "ggaction";
import data from "./data.json";
import rule1Data from "./rule1-data.json";
import rule2Data from "./rule2-data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 784,
      height: 477,
      margin: { left: 48, right: 136, top: 40, bottom: 37 },
    })
    .editCanvas({
      background: "#afd1e7",
      plotBorder: { underlay: true },
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0785-two-source-SVG-years-v1",
        measurements: [
          { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2023", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
        ],
      },
    })
    .createTitle({
      text: "Impact of Federal Funds Rate hikes on Investment Grade Corporate Yields",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -42.29296875,
    })
    .editTitle({ offset: -10.953125 })
    .editTitle({
      subtitle: "Source: FRED; S&P Dow Jone Indices",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.34375,
    })
    .createData({ values: data })
    .createComputedData({
      id: "numericYield",
      as: "sourceYield",
      expression: { op: "toNumber", operand: { field: "Yield Change" } },
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "sourceYield" },
      guides: false,
    })
    .editXScale({ domain: [1640995200000, 1672531200000] })
    .editYScale({ domain: [-0.08, 0.08] })
    .encodeColor({
      field: "Index Identifier",
      scale: {
        domain: ["Daily Change in Cons", "Daily Change in Eng ", "Daily Change in Fin", "Daily Change in Ind", "Daily Change in Tel "],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b"],
      },
    })
    .createData({ id: "rules1", values: rule1Data })
    .createComputedData({
      id: "numericRules1",
      as: "sourceRate",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Rate Hike" }, right: { constant: "null" } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "Rate Hike" } },
      },
    })
    .createRuleMark({ id: "hike1", missing: "skip", stroke: "black" })
    .encodeX({ field: "Date", fieldType: "temporal" })
    .encodeYRange({ lower: "sourceRate", upper: { datum: 0 } })
    .editRuleMark({ strokeWidth: 2.5, strokeDash: [8, 8] })
    .createData({ id: "rules2", values: rule2Data })
    .createComputedData({
      id: "numericRules2",
      as: "sourceRate",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Rate Hike" }, right: { constant: "null" } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "Rate Hike" } },
      },
    })
    .createRuleMark({ id: "hike2", missing: "skip", stroke: "black" })
    .encodeX({ field: "Date", fieldType: "temporal" })
    .encodeYRange({ lower: "sourceRate", upper: { datum: 0 } })
    .editRuleMark({ strokeWidth: 2.5, strokeDash: [8, 8] })
    .createAxes({
      x: {
        scale: "x",
        ticksAndLabels: {
          values: [1640995200000, 1643673600000, 1646092800000, 1648771200000, 1651363200000, 1654041600000, 1656633600000, 1659312000000, 1661990400000, 1664582400000, 1667260800000, 1669852800000, 1672531200000],
          labels: {
            fontSize: 10,
            color: "#000",
            offset: 5.5,
            alongOffset: 0.5,
            flush: true,
            labelMap: [
              { value: 1640995200000, label: "2022" },
              { value: 1643673600000, label: "February" },
              { value: 1646092800000, label: "March" },
              { value: 1648771200000, label: "April" },
              { value: 1651363200000, label: "May" },
              { value: 1654041600000, label: "June" },
              { value: 1656633600000, label: "July" },
              { value: 1659312000000, label: "August" },
              { value: 1661990400000, label: "September" },
              { value: 1664582400000, label: "October" },
              { value: 1667260800000, label: "November" },
              { value: 1669852800000, label: "December" },
              { value: 1672531200000, label: "2023" },
            ],
          },
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, color: "#000", offset: 27.578125, alongOffset: 0.5 },
        underlay: true,
      },
      y: {
        scale: "y",
        ticksAndLabels: {
          values: [-0.08, -0.06, -0.04, -0.02, 0, 0.02, 0.04, 0.06, 0.08],
          labels: {
            fontSize: 10,
            color: "#000",
            offset: 6.5,
            alongOffset: 0.890625,
            labelMap: [
              { value: -0.08, label: "−8%" },
              { value: -0.06, label: "−6%" },
              { value: -0.04, label: "−4%" },
              { value: -0.02, label: "−2%" },
              { value: 0, label: "0%" },
              { value: 0.02, label: "2%" },
              { value: 0.04, label: "4%" },
              { value: 0.06, label: "6%" },
              { value: 0.08, label: "8%" },
            ],
          },
        },
        title: { text: "Daily Yield Change", fontSize: 11, fontWeight: 700, color: "#000", offset: 35.71484375, alongOffset: 0.5 },
        underlay: true,
      },
    })
    .editXAxis({ line: { color: "#888" } })
    .editYAxis({ line: { color: "#888" } })
    .editXAxisTicks({ length: 5, color: "#888", alongOffset: 0.5 })
    .editYAxisTicks({ length: 5, color: "#888", alongOffset: 0.5 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "linePlot",
        symbol: { length: 10, lineWidth: 1.5 },
        labels: { fontSize: 10, color: "#000" },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "#000" },
      },
    });
}