// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-b1afedddb1ebef69
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 344, height: 364, margin: { left: 39, top: 27, right: 5, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({
      id: "d_ny",
      as: "ny",
      expression: {
        op: "if",
        condition: { op: "gt", left: { field: "temp" }, right: { constant: 15 } },
        then: { op: "subtract", left: { field: "temp" }, right: { constant: 15 } },
        else: { constant: 0 }
      }
    })
    .createComputedData({
      id: "d_ny2",
      as: "ny2",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "temp" }, right: { constant: 0 } },
        then: { op: "negate", operand: { field: "temp" } },
        else: { constant: 0 }
      }
    })
    .createComputedData({
      id: "d_ny0",
      as: "ny0",
      expression: {
        op: "if",
        condition: { op: "lt", left: { field: "temp" }, right: { constant: 0 } },
        then: { op: "negate", operand: { field: "temp" } },
        else: { field: "temp" }
      }
    })
    .createAreaPlot({
      x: { field: "date", fieldType: "ordinal" },
      y: { field: "ny0" },
      guides: false
    })
    .editAreaMark({ fill: "#a1d76a", opacity: 0.6, curve: "monotone" })
    .createAreaPlot({ id: "layer_1", x: { field: "date", fieldType: "ordinal" }, y: "ny", guides: false })
    .editAreaMark({ target: "layer_1", fill: "#a1d76a", opacity: 1 })
    .editAreaMark({ target: "layer_1", curve: "monotone" })
    .createAreaPlot({ id: "layer_2", x: { field: "date", fieldType: "ordinal" }, y: "ny2", guides: false })
    .editAreaMark({ target: "layer_2", fill: "#0571b0", opacity: 1 })
    .editAreaMark({ target: "layer_2", curve: "monotone" })
    .editXScale({ type: "point" })
    .editYScale({ domain: [0, 25] })
    .createGrid({ horizontal: { values: [0, 5, 10, 15, 20, 25] } })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 2 }
      },
      title: { text: "Month", offset: 26.5, fontSize: 11 }
    })
    .editXAxis({ ticks: { color: "#888" }, labels: { color: "black" }, title: { fontWeight: "bold" } })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 2 }
      },
      title: { text: "Average temperature in °C", rotation: { value: -90, unit: "degrees" }, offset: 27.623046875, fontSize: 11 }
    })
    .editYAxis({ ticks: { color: "#888" }, labels: { color: "black" }, title: { fontWeight: "bold" } })
    .createTitle({ text: "Average temperature in Oslo, Norway in 2018", titleStyle: { fontSize: 13 }, offset: -10.953125 })
    .editTitle({ align: "center", titleStyle: { fontWeight: "bold" } });
}