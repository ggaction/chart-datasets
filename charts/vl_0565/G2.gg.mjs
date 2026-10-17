// DOCS: doc-2c4d8f08519104ba (createGrid/createLegend/action-reference)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 450,
      height: 374,
      margin: { left: 43, top: 52, right: 7, bottom: 22 }
    })
    .createData({ values: data })
    .filterData({ id: "exclude-invalid-year", field: "Year", predicate: { op: "neq", value: "2022.00" } })
    .createFoldData({
      id: "folded",
      fields: ["France", "Germany"],
      as: { key: "var", value: "val" }
    })
    .createComputedData({
      id: "iip",
      as: "val_bn",
      expression: {
        op: "divide",
        left: { op: "toNumber", operand: { field: "val" } },
        right: { constant: 1000 }
      }
    })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "val_bn" },
      guides: false
    })
    .editXScale({ domain: [315532800000, 1609459200000], nice: false })
    .editYScale({ domain: [-1000, 3000] })
    .encodeColor({ field: "var" })
    .editColorScale({
      domain: ["France", "Germany"],
      range: ["red", "blue", "green", "yellow", "pink"]
    })
    .createGuides({
      grid: false,
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            count: 10,
            ticks: {},
            labels: { fontSize: 10, offset: 7 }
          },
          title: false
        },
        y: {
          line: {},
          ticksAndLabels: {
            count: 8,
            ticks: {},
            labels: { fontSize: 10, offset: 7 }
          },
          title: false
        }
      },
      legend: {
        position: "top-left",
        title: false,
        symbol: "auto",
        labels: { fontSize: 10 }
      }
    })
    .createTitle({
      text: "International Investment Position (IIP)",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "USD Billions. Source: IMF BOPS",
      offset: -13,
      alongOffset: -37.86
    });
}