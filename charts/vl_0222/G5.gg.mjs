import { chart } from "ggaction";
import data from "./data.json";
import hardwareData from "./hardware-data.json";

// DOCS: actual cached id from doc-b9261a4b2909a353, doc-76573a465e2b6a33, doc-9bb354f4e2d46693, doc-071c93dff3a5ea2e, doc-8a4f6f06e0d37d5e.

export function buildChart() {
  return chart()
    .createCanvas({ width: 752, height: 374, margin: { left: 44, right: 308, top: 52, bottom: 22 } })
    .createTitle({
      text: "Semiconductor production index and Nintendo's hardware sale volumes",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -38.6845703125
    })
    .editTitle({ offset: -10.953125 })
    .editTitle({
      subtitle: "The industrial production index refer to the real output of all Semiconductor and Other Electronic Component, located in the United States, regardless of their ownership\nSource:https://fred.stlouisfed.org/series/IPG3344S.",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.34375
    })
    .createData({ values: data })
    .createComputedData({
      id: "productionNumeric",
      as: "sourceIP",
      expression: { op: "toNumber", operand: { field: "industrial production (IP) index" } }
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "sourceIP" },
      guides: false
    })
    .editXScale({ domain: [1509494400000, 1667260800000] })
    .editYScale({ domain: [100, 140] })
    .editLineMark({ stroke: "#e6224b", strokeWidth: 2.7 })
    .createData({ id: "hardware", values: hardwareData })
    .createComputedData({
      id: "hardwareNumeric",
      as: "sale_volumes",
      expression: { op: "multiply", left: { op: "toNumber", operand: { field: "total_sales" } }, right: { constant: 10 } }
    })
    .createLineMark({ id: "hardwareLine", stroke: "#122b39", strokeWidth: 2.3 })
    .encodeX({ field: "date", fieldType: "temporal", scale: { id: "x" } })
    .encodeY({ field: "sale_volumes", scale: { id: "hardwareY", domain: [15000, 30000] } })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000],
          ticks: { length: 5 },
          labels: { fontSize: 10, color: "#000", offset: 5.5, alongOffset: 0.5, format: "%Y" }
        },
        title: false,
        underlay: true
      },
      y: [
        {
          id: "y",
          scale: "y",
          ticksAndLabels: {
            values: [100, 105, 110, 115, 120, 125, 130, 135, 140],
            ticks: { length: 5 },
            labels: { fontSize: 10, color: "#000", offset: 6.5, alongOffset: 0.890625 }
          },
          title: {
            text: "industrial production (IP) index",
            fontSize: 11,
            fontWeight: 700,
            color: "#e6224b",
            offset: 32.1064453125,
            alongOffset: 0.5,
            rotation: { value: -90, unit: "degrees" }
          },
          underlay: true
        },
        {
          id: "hardwareAxis",
          scale: "hardwareY",
          position: "right",
          ticksAndLabels: {
            values: [16000, 18000, 20000, 22000, 24000, 26000, 28000, 30000],
            ticks: { length: 5 },
            labels: { fontSize: 10, color: "#000", format: ",.0f", offset: 7.5, alongOffset: 0.890625 }
          },
          title: {
            text: "nintendo hardware sales volumes('000)",
            fontSize: 11,
            fontWeight: 700,
            color: "#122b39",
            offset: 47.0078125,
            alongOffset: 0.5,
            rotation: { value: 90, unit: "degrees" }
          },
          underlay: true
        }
      ]
    })
    .editXAxis({ line: { color: "#888" } })
    .editYAxis({ target: "y", line: { color: "#888" } })
    .editYAxis({ target: "hardwareAxis", line: { color: "#888" } })
    .editXAxisTicks({ color: "#888", alongOffset: 0.5 })
    .editYAxisTicks({ target: "y", color: "#888", alongOffset: 0.5 })
    .editYAxisTicks({ target: "hardwareAxis", color: "#888", alongOffset: 0.5 })
    .createGrid({
      vertical: { color: "#ddd" },
      horizontal: { scale: "y", color: "#ddd" }
    });
}