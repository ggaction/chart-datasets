// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 367, height: 149, margin: { left: 38, top: 27, right: 9, bottom: 22 } })
    .createData({ values: data })
    .createTitle({
      text: "Distribution of Frame Render Time (ms)",
      offset: -3,
      titleStyle: { fontSize: 13 }
    })
    .createComputedData({
      id: "startRank",
      as: "startRank",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "startTime" }, right: { constant: "0" } },
        then: { constant: 0 },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "startTime" }, right: { constant: "8.33" } },
          then: { constant: 1 },
          else: {
            op: "if",
            condition: { op: "eq", left: { field: "startTime" }, right: { constant: "12.50" } },
            then: { constant: 2 },
            else: {
              op: "if",
              condition: { op: "eq", left: { field: "startTime" }, right: { constant: "16.67" } },
              then: { constant: 3 },
              else: {
                op: "if",
                condition: { op: "eq", left: { field: "startTime" }, right: { constant: "33.33" } },
                then: { constant: 4 },
                else: {
                  op: "if",
                  condition: { op: "eq", left: { field: "startTime" }, right: { constant: "50.00" } },
                  then: { constant: 5 },
                  else: {
                    op: "if",
                    condition: { op: "eq", left: { field: "startTime" }, right: { constant: "66.67" } },
                    then: { constant: 6 },
                    else: {
                      op: "if",
                      condition: { op: "eq", left: { field: "startTime" }, right: { constant: "83.33" } },
                      then: { constant: 7 },
                      else: { constant: 8 }
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
      id: "endRank",
      as: "endRank",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "endTime" }, right: { constant: "0" } },
        then: { constant: 0 },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "endTime" }, right: { constant: "8.33" } },
          then: { constant: 1 },
          else: {
            op: "if",
            condition: { op: "eq", left: { field: "endTime" }, right: { constant: "12.50" } },
            then: { constant: 2 },
            else: {
              op: "if",
              condition: { op: "eq", left: { field: "endTime" }, right: { constant: "16.67" } },
              then: { constant: 3 },
              else: {
                op: "if",
                condition: { op: "eq", left: { field: "endTime" }, right: { constant: "33.33" } },
                then: { constant: 4 },
                else: {
                  op: "if",
                  condition: { op: "eq", left: { field: "endTime" }, right: { constant: "50.00" } },
                  then: { constant: 5 },
                  else: {
                    op: "if",
                    condition: { op: "eq", left: { field: "endTime" }, right: { constant: "66.67" } },
                    then: { constant: 6 },
                    else: {
                      op: "if",
                      condition: { op: "eq", left: { field: "endTime" }, right: { constant: "83.33" } },
                      then: { constant: 7 },
                      else: { constant: 8 }
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
      id: "zeroBaseline",
      as: "zeroBaseline",
      expression: { constant: 0 }
    })
    .createHeatmap({
      x: { field: "startRank", fieldType: "ordinal" },
      y: { field: "residency", fieldType: "nominal" },
      guides: false
    })
    .encodeXRange({
      lower: "startRank",
      upper: "endRank",
      scale: { id: "xRect", type: "linear" }
    })
    .encodeYRange({
      lower: "zeroBaseline",
      upper: "residency",
      scale: { id: "yRect", type: "linear" }
    })
    .editXScale({ domain: [0, 8] })
    .editYScale({ domain: [0, 100] })
    .createXAxis({
      scale: "xRect",
      title: false,
      ticksAndLabels: {
        values: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0" },
            { value: 1, label: "8.33" },
            { value: 2, label: "12.50" },
            { value: 3, label: "16.67" },
            { value: 4, label: "33.33" },
            { value: 5, label: "50.00" },
            { value: 6, label: "66.67" },
            { value: 7, label: "83.33" },
            { value: 8, label: "\u221E" }
          ]
        }
      }
    })
    .createYAxis({
      scale: "yRect",
      title: false,
      ticksAndLabels: {
        values: [0, 50, 100],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 0, label: "0%" },
            { value: 50, label: "50%" },
            { value: 100, label: "100%" }
          ]
        }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createGrid({ horizontal: {} })
    .editHorizontalGrid({ color: "#ddd" });
}
