// DOCS: actual delivered doc-* IDs:
// doc-e790db38fc2a278a (createScatterPlot),
// doc-2e6240c00cb297cc (createScatterPlot reference),
// doc-76573a465e2b6a33 (createScatterPlot basic-charts / point styling),
// doc-2fcdfbdfb290e440 (editXScale / guides workflow example),
// doc-aff0694302d3fc9f (createScatterPlot action reference)

import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 244,
      height: 264,
      margin: { left: 39, top: 27, right: 5, bottom: 37 }
    })
    .createData({ id: "source", values: data })
    .createScatterPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "price", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 26] })
    .editYScale({ domain: [0, 20] })
    .editPointMark({
      fill: "#4c78a8",
      opacity: 0.7,
      stroke: false
    })
    .encodePointRadius({ value: 2.7386 })
    .createGrid({
      horizontal: { values: [0, 5, 10, 15, 20] , color: '#ddd'},
      vertical: { values: [0, 5, 10, 15, 20, 25] , color: '#ddd'}
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "count", fontSize: 11, offset: 28 }
    })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: "bold", fontFamily: "sans-serif" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "price", fontSize: 11, offset: 28 }
    })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: "bold", fontFamily: "sans-serif" })
    .createTitle({ text: "scatter plot example", offset: -3, titleStyle: { fontSize: 13 } });
}
