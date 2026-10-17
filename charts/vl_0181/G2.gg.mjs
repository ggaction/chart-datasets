import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-bedf05337affd6f4, doc-333a87e52954985d, doc-fc11e9fb291905d1

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 249,
      margin: { left: 63, top: 27, right: 5, bottom: 22 }
    })
    .createData({ values: data })
    .filterData({ id: "afg", field: "country", oneOf: ["Afghanistan"] })
    .createComputedData({
      id: "afgPop",
      as: "pop_num",
      expression: { op: "toNumber", operand: { field: "pop" } }
    })
    .createBarPlot({
      x: {
        field: "year",
        fieldType: "ordinal",
      },
      y: { field: "pop_num" },
      guides: false
    })
    .editXScale({
      domain: [
        "1952", "1957", "1962", "1967", "1972", "1977", "1982",
        "1987", "1992", "1997", "2002", "2007", "2012", "2017"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 40000000] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#fc6721", opacity: 0.7 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          "1952", "1957", "1962", "1967", "1972", "1977", "1982",
          "1987", "1992", "1997", "2002", "2007", "2012", "2017"
        ],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 10000000, 20000000, 30000000, 40000000],
        ticks: { color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7,
          fontFamily: "sans-serif",
          format: ",.0f"
        }
      },
      title: false
    })
    .createTitle({
      text: "Afghanistan's population, 1952-2017",
      offset: -3,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ align: "center" });
}