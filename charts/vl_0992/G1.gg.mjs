// DOCS: doc-e790db38fc2a278a, doc-dfae58344d5a524e, doc-48c72317a1a99e17 (createScatterPlot, createCanvas, guides/title actions)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 188,
      height: 259,
      margin: { left: 24, top: 87, right: 14, bottom: 22 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "value1NumData",
      as: "Value1Num",
      expression: { op: "toNumber", operand: { field: "Value 1" } }
    })
    .createComputedData({
      id: "value2NumData",
      as: "Value2Num",
      expression: { op: "toNumber", operand: { field: "Value 2" } }
    })
    .createScatterPlot({
      x: { field: "Value1Num", fieldType: "quantitative", scale: { domain: [-1, 12] } },
      y: { field: "Value2Num", fieldType: "quantitative", scale: { domain: [-2, 3.5] } },
      guides: false
    })
    .encodeColor({
      field: "Type",
      fieldType: "nominal",
      scale: {
        domain: ["Carbon tax", "ETS"],
        range: ["rgb(25, 125, 140)", "rgb(149, 206, 63)"]
      }
    })
    .encodePointRadius({ value: 3.1622776601683795 })
    .editPointMark({ opacity: 0.7 })
    .createTitle({
      text: "Principle Component Analysis:\nCarbon Pricing Systems",
      titleStyle: { fontSize: 12, fontWeight: 700, color: "black", fontFamily: "sans-serif" },
      alongOffset: -18
    })
    .editTitle({ offset: -12, gap: 2, alongOffset: -18 })
    .editTitle({
      subtitle: "Value 1 (x), Value 2 (y).\nSource: WorldBank Carbon Pricing Dashboard",
      subtitleStyle: { fontSize: 8, fontStyle: "italic", color: "black", fontFamily: "sans-serif" }
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 5, 10],
            ticks: { color: "#888" },
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black" }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [-2, -1, 0, 1, 2, 3],
            ticks: { color: "#888" },
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", color: "black" }
          },
          title: false
        }
      },
      grid: false,
      legend: {
        position: "top",
        direction: "horizontal",
        title: false,
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
      }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "color",
      symbol: { opacity: 0.7 }
    });
}