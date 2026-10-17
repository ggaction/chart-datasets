// DOCS: doc-8a4f6f06e0d37d5e, doc-76573a465e2b6a33 (createLinePlot tutorial/API)
import { chart } from "ggaction";
import data from "./data.json";

const monthNumExpr = {
  op: "if",
  condition: { op: "eq", left: { field: "month" }, right: "January" },
  then: { constant: "01" },
  else: {
    op: "if",
    condition: { op: "eq", left: { field: "month" }, right: "February" },
    then: { constant: "02" },
    else: {
      op: "if",
      condition: { op: "eq", left: { field: "month" }, right: "March" },
      then: { constant: "03" },
      else: {
        op: "if",
        condition: { op: "eq", left: { field: "month" }, right: "April" },
        then: { constant: "04" },
        else: {
          op: "if",
          condition: { op: "eq", left: { field: "month" }, right: "May" },
          then: { constant: "05" },
          else: {
            op: "if",
            condition: { op: "eq", left: { field: "month" }, right: "June" },
            then: { constant: "06" },
            else: {
              op: "if",
              condition: { op: "eq", left: { field: "month" }, right: "July" },
              then: { constant: "07" },
              else: {
                op: "if",
                condition: { op: "eq", left: { field: "month" }, right: "August" },
                then: { constant: "08" },
                else: {
                  op: "if",
                  condition: { op: "eq", left: { field: "month" }, right: "September" },
                  then: { constant: "09" },
                  else: {
                    op: "if",
                    condition: { op: "eq", left: { field: "month" }, right: "October" },
                    then: { constant: "10" },
                    else: {
                      op: "if",
                      condition: { op: "eq", left: { field: "month" }, right: "November" },
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
};

export function buildChart() {
  return chart()
    .createCanvas({
      width: 346,
      height: 377,
      margin: { left: 39, top: 40, right: 7, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({ id: "valueN", as: "valueN", expression: { op: "toNumber", operand: { field: "value" } } })
    
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: {
        field: "valueN",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [599616000000, 1625097600000], nice: false })
    .editYScale({ domain: [-2, 14], zero: false, nice: false })
    .encodeStroke({ value: "blue" })
    .encodeStrokeWidth({ value: 2 })
    .encodeOpacity({ value: 1 })
    .createTitle({
      text: "Housing",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ offset: -13, alongOffset: -33.4013671875, gap: 1 })
    .editTitle({ subtitle: "Housing, Water and Fuels, % change 12 months" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-y-glyphs",
        measurements: [
          { text: "−2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.40625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "12", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "14", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }
        ]
      }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
        labels: { format: "%Y", fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "dateClean", fontSize: 11, offset: 30 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [-2, 0, 2, 4, 6, 8, 10, 12, 14],
        labels: {
          fontSize: 10,
          offset: 7
        }
      },
      title: { text: "value", fontSize: 11, offset: 27 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({
      ticksAndLabels: { labels: { labelMap: [{ value: -2, label: "−2" }] } },
      title: { fontWeight: 700 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}