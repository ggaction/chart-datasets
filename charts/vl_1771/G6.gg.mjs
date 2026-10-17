// DOCS: localofficialretrieval doc-b11b4627b143730d (createLinePlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 246,
      height: 247,
      margin: { top: 10, right: 7, bottom: 37, left: 39 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "tempNum",
      as: "temp_num",
      expression: { op: "toNumber", operand: { field: "temp_max" } }
    })
    .createTimeUnitData({
      id: "byMonth",
      field: "date",
      unit: "month"
    })
    .createTimeUnitData({
      id: "byYear",
      field: "date",
      unit: "year"
    })
    .createComputedData({
      id: "cycleMonth",
      as: "cycleMonth",
      expression: {
        op: "add",
        left: { constant: 1325376000000 },
        right: {
          op: "add",
          left: { op: "subtract", left: { field: "date_month" }, right: { field: "date_year" } },
          right: {
            op: "if",
            condition: {
              op: "and",
              operands: [
                { op: "neq", left: { field: "date_year" }, right: { constant: 1325376000000 } },
                {
                  op: "gte",
                  left: { op: "subtract", left: { field: "date_month" }, right: { field: "date_year" } },
                  right: { constant: 5097600000 }
                }
              ]
            },
            then: { constant: 86400000 },
            else: { constant: 0 }
          }
        }
      }
    })
    .createSummaryData({
      id: "monthlyMax",
      groupBy: ["cycleMonth"],
      aggregates: [{ field: "temp_num", op: "max", as: "max_temp_max" }]
    })
    .createLinePlot({
      x: { field: "cycleMonth", fieldType: "temporal" },
      y: { field: "max_temp_max", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1325376000000, 1354320000000] })
    .editYScale({ domain: [0, 40] })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { format: "%b", fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "month", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Max of temp_max",
        fontSize: 11,
        offset: 27.123046875,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({
      fontWeight: 700
    })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({
      fontWeight: 700
    });
}
