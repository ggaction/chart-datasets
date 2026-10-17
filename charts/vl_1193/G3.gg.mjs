// DOCS: doc-2e6240c00cb297cc, doc-e790db38fc2a278a, doc-bc26da5598d35bae
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 345,
      height: 377,
      margin: { left: 39, top: 40, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({ id: "pointsNum", as: "POINTS_N", expression: { op: "toNumber", operand: { field: "POINTS" } } })
    .createComputedData({ id: "ageNum", as: "AGE_N", expression: { op: "toNumber", operand: { field: "AGE" } } })
    .createScatterPlot({
      x: { field: "POINTS_N", fieldType: "quantitative" },
      y: { field: "AGE_N", fieldType: "quantitative" },
      guides: false
    })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .editXScale({ domain: [0, 7000] })
    .editYScale({ domain: [0, 40] })
    .editPointMark({ fill: "darkblue", shape: "circle", opacity: 0.7 })
    .createTitle({
      text: "World Tennis Rankings and Age",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      offset: -13
    })
    .editTitle({
      subtitle: "Source: ESPN",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      gap: 1
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "Points", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 30 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Age", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: { color: "#ddd", lineWidth: 1 } });
}
