// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 348,
      height: 370,
      margin: { left: 43, top: 40, right: 5, bottom: 30 }
    })
    .createData({ id: "raw", values: data })
    .filterData({ id: "dated", field: "Year", noneOf: [""] })
    .createComputedData({
      id: "gdpNum",
      as: "Y_num",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "Total_GDP_adjusted_billions" }, right: { constant: "" } },
        then: { constant: 0 },
        else: { op: "toNumber", operand: { field: "Total_GDP_adjusted_billions" } }
      }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "Y_num", fieldType: "quantitative" },
      guides: false
    })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ fill: "#86d0bb" })
    .editXScale({
      domain: [421086786206, 1661671613793],
      nice: false
    })
    .editYScale({
      domain: [0, 0.0035],
      nice: false
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: {
          offset: 2,
          rotation: { value: 45, unit: "degrees" },
          fontSize: 10,
          fontFamily: "sans-serif"
        }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          offset: 7,
          fontSize: 10,
          fontFamily: "sans-serif"
        }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisLabels({ format: "%Y", color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ format: ".4f", color: "black" })
    .createTitle({
      text: "Adjusted IMF lending",
      align: "left",
      titleStyle: {
        fontSize: 13,
        fontFamily: "sans-serif"
      }
    })
    .editTitle({
      alongOffset: -37.5859375,
      offset: -10.953125,
      gap: 3.34375
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black", fontStyle: "normal" }
    })
    .editTitle({
      subtitle: "Proportion of credit outstanding to all members, Source: IMF",
      subtitleStyle: {
        fontSize: 10,
        fontWeight: 400,
        fontStyle: "italic",
        color: "black",
        fontFamily: "sans-serif"
      }
    });
}