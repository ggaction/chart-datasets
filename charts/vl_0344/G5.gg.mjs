// DOCS: doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 785, height: 298, margin: { left: 29, top: 76, right: 6, bottom: 22 } })
    .createTitle({ text: "CPI - Chicago versus NYC", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, gap: 1 })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }, offset: -13, alongOffset: -23.685 })
    .editTitle({ subtitle: "All items. Source: FRED (CUURA207SA0, CUURA101SA0)\n" })
    .createData({ values: data })
    .createFoldData({ id: "folded", fields: ["CUURA207SA0", "CUURA101SA0"], as: { key: "metric", value: "value" } })
    .createComputedData({ id: "withMetric", as: "metricClean", expression: { op: "if", condition: { op: "eq", left: { field: "metric" }, right: { constant: "CUURA207SA0" } }, then: { constant: "Chicago" }, else: { constant: "NYC" } } })
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
                                operand: { field: "DATE" },
                                search: "01/12/",
                                replacement: ""
                              },
                              search: "01/11/",
                              replacement: ""
                            },
                            search: "01/10/",
                            replacement: ""
                          },
                          search: "01/09/",
                          replacement: ""
                        },
                        search: "01/08/",
                        replacement: ""
                      },
                      search: "01/07/",
                      replacement: ""
                    },
                    search: "01/06/",
                    replacement: ""
                  },
                  search: "01/05/",
                  replacement: ""
                },
                search: "01/04/",
                replacement: ""
              },
              search: "01/03/",
              replacement: ""
            },
            search: "01/02/",
            replacement: ""
          },
          search: "01/01/",
          replacement: ""
        }
      }
    })
    .filterData({ id: "yearMinFilter", field: "year", predicate: { op: "gte", value: 1940 } })
    .filterData({ id: "yearMaxFilter", field: "year", predicate: { op: "lte", value: 2022 } })
    .createComputedData({ id: "withValueNum", as: "valueNum", expression: { op: "if", condition: { op: "eq", left: { field: "value" }, right: { constant: "." } }, then: { constant: null }, else: { op: "toNumber", operand: { field: "value" } } } })
    .createComputedData({ id: "withValuePCT", as: "valuePCT", expression: { op: "if", condition: { op: "isNull", operand: { field: "valueNum" } }, then: { constant: null }, else: { op: "divide", left: { field: "valueNum" }, right: { constant: 100 } } } })
    .createComputedData({ id: "withDate2", as: "date2", expression: { op: "parseTime", operand: { field: "DATE" }, format: "%d/%m/%Y" } })
    .createComputedData({ id: "withGap", as: "gap", expression: { op: "if", condition: { op: "isNull", operand: { field: "valueNum" } }, then: { constant: 1 }, else: { constant: 0 } } })
    .createSortedData({ id: "ordered", sortBy: [{ field: "metricClean", order: "ascending" }, { field: "date2", order: "ascending" }] })
    .createWindowData({ id: "runs", operations: [{ op: "cumulativeSum", field: "gap", as: "run" }] })
    .filterData({ id: "paintedFilter", field: "valueNum", predicate: { op: "neq", value: null } })
    .createLinePlot({ x: { field: "date2", fieldType: "temporal" }, y: "valueNum", guides: false })
    .editXScale({ domain: [-946771200000, 1640995200000], nice: false })
    .editYScale({ domain: [0, 350], nice: false })
    .encodeColor({ field: "metricClean" })
    .encodeGroup({ field: "run" })
    .editColorScale({ domain: ["Chicago", "NYC"], range: ["rgb(134, 38, 51)", "rgba(0,47,167,0.7)"] })
    .editLineMark({ strokeWidth: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-946771200000, -788918400000, -631152000000, -473385600000, -315619200000, -157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: { fontSize: 10, offset: 7, flush: true },
        ticks: { length: 5 }
      },
      title: false
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        labels: { color: "black", format: "%Y" },
        ticks: { color: "#888" }
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250, 300, 350],
        labels: { fontSize: 10, offset: 7 },
        ticks: { length: 5 }
      },
      title: false
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        labels: { color: "black", format: ".0f" },
        ticks: { color: "#888" }
      }
    })
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
    });
}