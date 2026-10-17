// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 351, height: 377, margin: { left: 44, top: 40, right: 7, bottom: 37 } })
    .createData({ id: "cpi", values: data })
    .createComputedData({ id: "cpiNum", as: "valueNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createComputedData({
      id: "cpiDate",
      as: "dateClean",
      expression: {
        op: "parseTime",
        format: "%Y-%m-%d",
        operand: {
          op: "concat",
          operands: [
            { field: "year" },
            { constant: "-" },
            {
              op: "if",
              condition: { op: "eq", left: { field: "month" }, right: { constant: "January" } },
              then: { constant: "01" },
              else: {
                op: "if",
                condition: { op: "eq", left: { field: "month" }, right: { constant: "February" } },
                then: { constant: "02" },
                else: {
                  op: "if",
                  condition: { op: "eq", left: { field: "month" }, right: { constant: "March" } },
                  then: { constant: "03" },
                  else: {
                    op: "if",
                    condition: { op: "eq", left: { field: "month" }, right: { constant: "April" } },
                    then: { constant: "04" },
                    else: {
                      op: "if",
                      condition: { op: "eq", left: { field: "month" }, right: { constant: "May" } },
                      then: { constant: "05" },
                      else: {
                        op: "if",
                        condition: { op: "eq", left: { field: "month" }, right: { constant: "June" } },
                        then: { constant: "06" },
                        else: {
                          op: "if",
                          condition: { op: "eq", left: { field: "month" }, right: { constant: "July" } },
                          then: { constant: "07" },
                          else: {
                            op: "if",
                            condition: { op: "eq", left: { field: "month" }, right: { constant: "August" } },
                            then: { constant: "08" },
                            else: {
                              op: "if",
                              condition: { op: "eq", left: { field: "month" }, right: { constant: "September" } },
                              then: { constant: "09" },
                              else: {
                                op: "if",
                                condition: { op: "eq", left: { field: "month" }, right: { constant: "October" } },
                                then: { constant: "10" },
                                else: {
                                  op: "if",
                                  condition: { op: "eq", left: { field: "month" }, right: { constant: "November" } },
                                  then: { constant: "11" },
                                  else: { constant: "12" }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            { constant: "-01" }
          ]
        }
      }
    })
    .createLinePlot({
      x: { field: "dateClean", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "valueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1627776000000], nice: false })
    .editYScale({ domain: [-12, 6], nice: false })
    .editLineMark({ stroke: "#00BFFF", strokeWidth: 2, opacity: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y" }
      },
      title: { text: "dateClean", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-12, -10, -8, -6, -4, -2, 0, 2, 4, 6],
        ticks: {},
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          labelMap: [
            { value: -12, label: "\u221212" }, { value: -10, label: "\u221210" },
            { value: -8, label: "\u22128" }, { value: -6, label: "\u22126" },
            { value: -4, label: "\u22124" }, { value: -2, label: "\u22122" },
            { value: 0, label: "0" }, { value: 2, label: "2" },
            { value: 4, label: "4" }, { value: 6, label: "6" }
          ]
        }
      },
      title: { text: "value", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 33 }
    })
    .createGrid({ horizontal: {}, vertical: {} })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createTitle({
      text: "Clothing and footwear",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -13, gap: 3 }).editTitle({ subtitle: "CPI division 3, % change over 12 months", alongOffset: -39 });
}