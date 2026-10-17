// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-2e8ae49a2e6e5e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 522, height: 359, margin: { left: 20, top: 30, right: 2, bottom: 19 } })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "dateMs", expression: { op: "parseTime", operand: { field: "date" }, format: "%Y-%m-%d" } })
    .createComputedData({ id: "valued", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
        .createComputedData({
      id: "year",
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
                                    operand: { field: "date" },
                                    search: "-01-01",
                                    replacement: ""
                                  },
                                  search: "-02-01",
                                  replacement: ""
                                },
                                search: "-03-01",
                                replacement: ""
                              },
                              search: "-04-01",
                              replacement: ""
                            },
                            search: "-05-01",
                            replacement: ""
                          },
                          search: "-06-01",
                          replacement: ""
                        },
                        search: "-07-01",
                        replacement: ""
                      },
                      search: "-08-01",
                      replacement: ""
                    },
                    search: "-09-01",
                    replacement: ""
                  },
                  search: "-10-01",
                  replacement: ""
                },
                search: "-11-01",
                replacement: ""
              },
              search: "-12-01",
              replacement: ""
            }
      }
    })
    .filterData({ id: "filtered", field: "year", predicate: { op: "gt", value: 1963 } })
    .createAreaPlot({
      x: { field: "dateMs", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum" },
      guides: false
    })
    .editXScale({ domain: [-189388800000, 1667260800000], nice: false })
    .editYScale({ domain: [0, 13] })
    .editAreaMark({
      fill: { type: "linear-gradient", from: { x: 1, y: 1 }, to: { x: 1, y: 0 }, stops: [{ offset: 0, color: "white" }, { offset: 1, color: "#1c3185" }] },
      opacity: 0.7
    })
    .createLineMark({ id: "lineOverlay", stroke: "#3b00fe", strokeWidth: 2 })
    .encodeX({ field: "dateMs", fieldType: "temporal", temporalUnit: "timestamp" })
    .encodeY({ field: "valueNum" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [-157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: { color: "#888", length: 5 },
        labels: {

          format: "%Y",
          flush: true,
          offset: 7,
          fontSize: 10,
          color: "black"
        }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        ticks: { color: "#888", length: 5 },
        labels: { offset: 7, fontSize: 10, color: "black" }
      },
      title: false
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createTitle({ text: "Monthly Supply of New Houses in the US", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, gap: 1 })
    .editTitle({ subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black" }, offset: -13, alongOffset: -14 })
    .editTitle({ subtitle: "Source: FRED API" });
}