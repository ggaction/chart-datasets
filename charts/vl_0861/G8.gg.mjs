// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-b7f1bdfb89789cd6
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 351, height: 373, margin: { left: 44, top: 51, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({
      id: "quarter_n",
      as: "quarter_n",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "quarter" }, right: { constant: "Q1" } },
        then: { constant: 2 },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "quarter" }, right: { constant: "Q2" } },
          then: { constant: 5 },
          else: {
            op: "if",
            condition: { op: "eq", left: { field: "quarter" }, right: { constant: "Q3" } },
            then: { constant: 8 },
            else: { constant: 11 }
          }
        }
      }
    })
    .createComputedData({
      id: "dateStr",
      as: "date2",
      expression: {
        op: "concat",
        operands: [
          { field: "year" },
          { constant: "-" },
          {
            op: "if",
            condition: { op: "eq", left: { field: "quarter" }, right: { constant: "Q1" } },
            then: { constant: "2" },
            else: {
              op: "if",
              condition: { op: "eq", left: { field: "quarter" }, right: { constant: "Q2" } },
              then: { constant: "5" },
              else: {
                op: "if",
                condition: { op: "eq", left: { field: "quarter" }, right: { constant: "Q3" } },
                then: { constant: "8" },
                else: { constant: "11" }
              }
            }
          }
        ]
      }
    })
    .createComputedData({
      id: "parsed",
      as: "date3",
      expression: {
        op: "parseTime",
        operand: { op: "concat", operands: [{ field: "date2" }, { constant: "-01" }] },
        format: "%Y-%m-%d"
      }
    })
    .createComputedData({
      id: "valueN",
      as: "valueN",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    .createLinePlot({
      x: { field: "date3", fieldType: "temporal" },
      y: { field: "valueN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [34214400000, 1675209600000] })
    .editYScale({ domain: [0, 100] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [157783680000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editXAxisTicksAndLabels({ labels: { format: "%Y" } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Employment Rate (%)", fontSize: 11, rotation: { value: -90, unit: "degrees" }, offset: 27 }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: {}, vertical: {} })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createTitle({
      text: "Male Employment Rate in UK\n(Aged 16-64)",
      titleStyle: { fontSize: 11 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    
    .editTitle({ subtitle: "Source: ONS", align: "center", gap: 0 })
    .editTitle({ offset: -3, titleStyle: { fontWeight: 700, color: "black" }, subtitleStyle: { color: "black" } });
}