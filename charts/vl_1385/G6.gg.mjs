// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 174,
      height: 232,
      margin: { left: 29, top: 10, right: 5, bottom: 22 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "weekday",
        fieldType: "ordinal"
      },
      y: {
        field: "total",
        fieldType: "quantitative"
      },
      guides: false
    })
    .createXAxis({
      title: false,
      ticksAndLabels: {
        values: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 8,
          rotation: 0
        }
      }
    })
    .editXAxisLabels({
      color: "black"
    })
    .createYAxis({
      title: false,
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 8
        }
      }
    })
    .createGrid({ horizontal: {color: '#ddd'} })
    .editYAxisLabels({
      color: "black"
    })
    .editXScale({
      domain: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 200] })
    .encodeBarWidth({ pixels: 18 });
}
