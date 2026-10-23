// DOCS: doc-2b2e3149e57e859d (createScatterPlot), doc-fba045b6f9b1c73b (createCompleteData)
import { chart } from "ggaction";
import data from "./data.json";

const TICKS = [
  0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600,
  2800, 3000, 3200, 3400
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 643,
      height: 544,
      margin: { left: 53, top: 7, right: 90, bottom: 37 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0702-original-source-zero-widths",
        measurements: [
          {
            text: "0",
            fontFamily: "sans-serif",
            fontSize: 10,
            fontWeight: 400,
            fontStyle: "normal",
            width: 5.5625
          }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "simTime",
      as: "simTime",
      expression: { op: "toNumber", operand: { field: "simulated_travel_time" } }
    })
    .createComputedData({
      id: "validatedTime",
      as: "validatedTime",
      expression: { op: "toNumber", operand: { field: "validated_travel_time" } }
    })
    .createComputedData({
      id: "referenceId",
      as: "referenceId",
      expression: { op: "toNumber", operand: { field: "id" } }
    })
    .filterData({
      id: "selected",
      field: "validatedTime",
      predicate: { op: "gt", value: 0 }
    })
    .createScatterPlot({
      x: { field: "simTime" },
      y: { field: "validatedTime" },
      guides: false
    })
    .editXScale({ domain: [0, 3500] })
    .editYScale({ domain: [0, 3500] })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ clip: true, opacity: 0.7 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: TICKS,
        ticks: { length: 5, color: "#888", alongOffset: 0.5 },
        labels: {
          fontSize: 10,
          flush: true,
          offset: 5.5,
          alongOffset: 0.5,
          format: ","
        }
      },
      title: {
        text: "Simulated travel time",
        fontSize: 11,
        fontWeight: 700,
        color: "#000",
        baseline: "alphabetic",
        offset: 30.5,
        alongOffset: 0.5
      }
    })
    .editXAxisLabels({ color: "#000" })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: TICKS,
        ticks: { length: 5, color: "#888", alongOffset: 0.5 },
        labels: {
          fontSize: 10,
          color: "#000",
          offset: 6.5,
          alongOffset: 0.890625,
          format: ","
        }
      },
      title: {
        text: "Validated travel time",
        fontSize: 11,
        fontWeight: 700,
        color: "#000",
        baseline: "alphabetic",
        offset: 37.5244140625,
        alongOffset: 0.5
      }
    })
    .createGrid({
      vertical: { values: TICKS, color: "#ddd" },
      horizontal: { values: TICKS, color: "#ddd" }
    })
    .createLinePlot({
      x: { field: "referenceId" },
      y: { field: "referenceId" },
      guides: false
    })
    .encodeColor({
      field: "test",
      scale: {
        domain: ["Regression", "Reference"],
        range: ["firebrick", "Black"],
        unknown: "transparent"
      }
    })
    .createLineMark({ id: "reference", stroke: "black" })
    .createRegressionData({ id: "fit", x: "simTime", y: "validatedTime" })
    .editRegressionData({
      target: "fit",
      predict: { values: [0, 3500] },
      interval: false
    })
    .createLineMark({ id: "fitLine", data: "selected", stroke: "firebrick" })
    .encodeX({ field: "simTime" })
    .encodeY({ field: "validatedTime" })
    .bindMarkData({ target: "fitLine", data: "fit" })
    .editCanvas({
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true }
    })
    .createLegend({
      target: "linePlot",
      labels: { fontSize: 10, color: "#000", offset: 4.5 },
      symbol: { length: 10, lineWidth: 1.5 }
    })
    .editLegend({
      title: "Line",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "#000" },
      titlePadding: 3
    });
}