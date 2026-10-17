// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 789, height: 398, margin: { left: 33, top: 76, right: 6, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "parsedDate", as: "date2", expression: { op: "parseTime", operand: { field: "DATE" }, format: "%d/%m/%Y" } })
    .createFoldData({ id: "folded", fields: ["CUURA207SA0_PC1", "CUURA101SA0_PC1"], as: { key: "metric", value: "value" } })
    .createComputedData({
      id: "metricClean",
      as: "metricClean",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "metric" }, right: { constant: "CUURA207SA0_PC1" } },
        then: { constant: "Chicago" },
        else: { constant: "NYC" }
      }
    })
    .createComputedData({
      id: "years",
      as: "year",
      expression: {
        op: "toNumber",
        operand: {
          op: "replaceLiteral",
          operand: {
            op: "replaceLiteral",
            operand: {
              op: "replaceLiteral",
              operand: {
                op: "replaceLiteral",
                operand: {
                  op: "replaceLiteral",
                  operand: {
                    op: "replaceLiteral",
                    operand: {
                      op: "replaceLiteral",
                      operand: {
                        op: "replaceLiteral",
                        operand: {
                          op: "replaceLiteral",
                          operand: {
                            op: "replaceLiteral",
                            operand: {
                              op: "replaceLiteral",
                              operand: {
                                op: "replaceLiteral",
                                operand: { field: "Date" },
                                search: "01/01/",
                                replacement: ""
                              },
                              search: "01/02/",
                              replacement: ""
                            },
                            search: "01/03/",
                            replacement: ""
                          },
                          search: "01/04/",
                          replacement: ""
                        },
                        search: "01/05/",
                        replacement: ""
                      },
                      search: "01/06/",
                      replacement: ""
                    },
                    search: "01/07/",
                    replacement: ""
                  },
                  search: "01/08/",
                  replacement: ""
                },
                search: "01/09/",
                replacement: ""
              },
              search: "01/10/",
              replacement: ""
            },
            search: "01/11/",
            replacement: ""
          },
          search: "01/12/",
          replacement: ""
        }
      }
    })
    .filterData({ id: "minYear", field: "year", predicate: { op: "gte", value: 1940 } })
    .filterData({ id: "maxYear", field: "year", predicate: { op: "lte", value: 2022 } })
    .createComputedData({
      id: "valueNum",
      as: "valueNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "value" }, right: { constant: "." } },
        then: { constant: null },
        else: { op: "toNumber", operand: { field: "value" } }
      }
    })
    .createComputedData({
      id: "valuePCT",
      as: "valuePCT",
      expression: {
        op: "if",
        condition: { op: "isNull", operand: { field: "valueNum" } },
        then: { constant: null },
        else: { op: "divide", left: { field: "valueNum" }, right: { constant: 100 } }
      }
    })
    .createComputedData({
      id: "gap",
      as: "gap",
      expression: {
        op: "if",
        condition: { op: "isNull", operand: { field: "valueNum" } },
        then: { constant: 1 },
        else: { constant: 0 }
      }
    })
    .createSortedData({
      id: "ordered",
      sortBy: [
        { field: "metricClean", order: "ascending" },
        { field: "date2", order: "ascending" }
      ]
    })
    .createWindowData({
      id: "runs",
      operations: [{ op: "cumulativeSum", field: "gap", as: "run" }]
    })
    .filterData({ id: "painted", field: "valueNum", predicate: { op: "neq", value: null } })
    .createLinePlot({
      x: { field: "date2", fieldType: "temporal" },
      y: { field: "valuePCT", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({
      field: "metricClean",
      fieldType: "nominal",
      scale: { domain: ["Chicago", "NYC"], range: ["rgb(134, 38, 51)", "rgba(0,47,167,0.7)"] }
    })
    .encodeGroup({ field: "run" })
    .editLineMark({ strokeWidth: 1 })
    .editXScale({ domain: [-946771200000, 1640995200000], nice: false })
    .editYScale({ domain: [-0.04, 0.24] })
    .createXAxis({
      title: false,
      line: {},
      ticksAndLabels: {
        values: [
          -946771200000, -788918400000, -631152000000, -473385600000, -315619200000,
          -157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000,
          788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000
        ],
        ticks: { length: 5 },
        labels: { format: "%Y", flush: true, fontSize: 10, offset: 7 }
      }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } } })
    .createYAxis({
      title: false,
      line: {},
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2],
        ticks: { length: 5 },
        labels: { format: ".0%", fontSize: 10, offset: 7 }
      }
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "top",
        columns: 2,
        title: false,
        labels: { fontSize: 10 },
        symbol: { length: 10, lineWidth: 1.5 }
      }
    })
    .createTitle({ text: "Inflation - Chicago versus NYC", titleStyle: { fontSize: 13, fontWeight: 700 }, gap: 1 })
    .editTitle({ offset: -13, alongOffset: -27.0146, subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "#000" } })
    .editTitle({ subtitle: "All items. Source: FRED (CUURA207SA0, CUURA101SA0)\n" });
}