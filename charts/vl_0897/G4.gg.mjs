import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-45511418e277de0a

export function buildChart() {
  return chart()
    .createCanvas({
      width: 422,
      height: 429,
      margin: { left: 64, top: 52, right: 38, bottom: 37 }
    })
    .editCanvas({ background: "#fff0d8" })
    .createData({ id: "main", values: data })
    .createComputedData({
      id: "energyNum",
      as: "energy",
      expression: {
        op: "toNumber",
        operand: { field: "Primary energy consumption per capita (kWh/person)" }
      }
    })
    .createScatterPlot({
      x: {
        field: "energy",
        fieldType: "quantitative"
      },
      y: {
        field: "GDP per capita, PPP (constant 2017 international $)",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ type: "sqrt", domain: [1000, 180000] })
    .editYScale({ type: "linear", domain: [0, 120000] })
    .encodeStroke({
      field: "energy",
      fieldType: "quantitative",
      scale: {
        type: "sequential",
        interpolate: "hcl"
      }
    })
    .editStrokeScale({
      target: "scatterPlot",
      domain: [2664.44775390625, 178662],
      range: ["rgb(255, 165, 0)", "rgb(139, 0, 0)"]
    })
    .editPointMark({ fill: "none", opacity: 0.7, strokeWidth: 2 })
    .encodeSize({
      field: "Population (historical estimates)",
      fieldType: "quantitative"
    })
    .editSizeScale({ type: "sqrt", domain: [0, 7840952832], range: [Math.PI, (361 * Math.PI) / 4] })
    .createTitle({
      text: "Energy Usage per Capita and GDP per Capita",
      titleStyle: { fontSize: 13, fontWeight: "bold", color: "#000" },
      offset: -11
    })
    .editTitle({
      align: "left",
      alongOffset: -58.1474609375,
      gap: 4
    })
    .editTitle({
      subtitle:
        "Source: World Bank\nIn PPP (constant 2017 international $) and KWH/person. Size of Bubble Indicates Population",
      subtitleStyle: { fontSize: 10, color: "#000" }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000, 180000],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            offset: 7,
            flush: true,
            color: "#000",
            format: ",.0f",
            labelMap: [
              { value: 40000, label: "" },
              { value: 60000, label: "" },
              { value: 80000, label: "" },
              { value: 120000, label: "" },
              { value: 140000, label: "" },
              { value: 160000, label: "" }
            ]
          }
        },
        title: {
          text: "Primary energy consumption per capita (kWh/person)",
          fontSize: 11,
          fontWeight: "bold",
          color: "#000",
          offset: 30
        }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [0, 10000, 20000, 30000, 40000, 50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000],
          ticks: { length: 5, color: "#888" },
          labels: { fontSize: 10, offset: 7, color: "#000", format: ",.0f" }
        },
        title: {
          text: "GDP per capita, PPP (constant 2017 international $)",
          fontSize: 11,
          fontWeight: "bold",
          color: "#000",
          offset: 52
        }
      }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    });
}