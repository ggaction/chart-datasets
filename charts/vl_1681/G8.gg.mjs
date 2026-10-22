import { chart } from "ggaction";
// Cite: doc-3e24086fb84e5f8f examples/lookup-data/program.js — createLookupData({field, lookup:{data,key,fields}}) pattern.
import groups from "./data.json";
import people from "./data-lookup-0.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 60, height: 200 },
      margin: { left: 39, top: 10, right: 5, bottom: 33 },
      plotBorder: {}
    })
    .createData({ id: "people", values: people })
    .createData({ id: "groups", values: groups })
    .createLookupData({
      id: "joined",
      field: "person",
      lookup: { data: "people", key: "name", fields: ["age", "height"] }
    })
    .createComputedData({
      id: "numeric",
      as: "numericAge",
      expression: { op: "toNumber", operand: { field: "age" } }
    })
    .createBarPlot({
      x: "group",
      y: "numericAge",
      guides: false
    })
    .encodeBarWidth({ band: 0.9 })
    .editBarMark({ strokeWidth: 0 })
    .createXAxis({
      ticksAndLabels: {
        values: ["1", "2", "3"],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7.5,
          alongOffset: 0.390625,
          rotation: { value: -90, unit: "degrees" },
          align: "right"
        }
      },
      title: {
        text: "group",
        fontSize: 11,
        fontWeight: 700,
        color: "black",
        offset: 23.1396484375,
        alongOffset: 0.5
      }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          color: "black",
          offset: 6.5,
          alongOffset: 0.890625
        }
      },
      title: {
        text: "Mean of age",
        fontSize: 11,
        fontWeight: 700,
        color: "black",
        offset: 26.544921875,
        alongOffset: 0.5
      }
    })
    .createGrid({
      horizontal: { values: [0, 10, 20, 30, 40, 50, 60] }
    })
    .editXAxisLine({
      color: "#888"
    })
    .editYAxisLine({
      color: "#888"
    })
    .editHorizontalGrid({
      color: "#ddd"
    })
    .editXAxisLabels({
      color: "black"
    });
}