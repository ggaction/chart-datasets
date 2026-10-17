// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-5b80d9e7442172a5 doc-7f2c254224fc4908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 529,
      height: 460,
      margin: { left: 39, top: 24, right: 90, bottom: 36 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "rowCalc",
      as: "row",
      expression: {
        op: "if",
        condition: { op: "lte", left: { field: "id" }, right: { constant: 10 } },
        then: { constant: 1 },
        else: {
          op: "if",
          condition: { op: "lte", left: { field: "id" }, right: { constant: 20 } },
          then: { constant: 2 },
          else: {
            op: "if",
            condition: { op: "lte", left: { field: "id" }, right: { constant: 30 } },
            then: { constant: 3 },
            else: {
              op: "if",
              condition: { op: "lte", left: { field: "id" }, right: { constant: 40 } },
              then: { constant: 4 },
              else: {
                op: "if",
                condition: { op: "lte", left: { field: "id" }, right: { constant: 50 } },
                then: { constant: 5 },
                else: {
                  op: "if",
                  condition: { op: "lte", left: { field: "id" }, right: { constant: 60 } },
                  then: { constant: 6 },
                  else: {
                    op: "if",
                    condition: { op: "lte", left: { field: "id" }, right: { constant: 70 } },
                    then: { constant: 7 },
                    else: {
                      op: "if",
                      condition: { op: "lte", left: { field: "id" }, right: { constant: 80 } },
                      then: { constant: 8 },
                      else: {
                        op: "if",
                        condition: { op: "lte", left: { field: "id" }, right: { constant: 90 } },
                        then: { constant: 9 },
                        else: { constant: 10 }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    })
    .createComputedData({
      id: "colCalc",
      as: "col",
      expression: {
        op: "subtract",
        left: { field: "id" },
        right: { op: "multiply", left: { field: "row" }, right: { constant: 10 } }
      }
    })
    .createScatterPlot({
      x: { field: "col", fieldType: "ordinal" },
      y: { field: "row", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0] })
    .editYScale({ domain: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
    .encodeColor({ field: "tipo", fieldType: "nominal" })
    .editColorScale({ palette: "set2", domain: ["Evadido", "Graduado", "Regular", "Reingresso"] })
    .encodePointRadius({ value: 4.74341649025252 })
    .editPointMark({ opacity: 0.7, stroke: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "col", fontSize: 11, offset: 20 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontFamily: "sans-serif" }
      },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "row", fontSize: 11, offset: 26, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { fontFamily: "sans-serif" }
      },
      title: { fontWeight: 700 }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        title: "tipo",
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
      }
    })
    .createTitle({
      text: "Situação academica dos homens desde 2000.1",
      titleStyle: { fontSize: 15, fontWeight: 700, fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({ align: "center" });
}
