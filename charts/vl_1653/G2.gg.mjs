// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-9bb354f4e2d46693
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 244,
      height: 245,
      margin: { left: 44, top: 10, right: 80, bottom: 35 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "a", fieldType: "ordinal" },
      y: { field: "b", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({
      type: "point",
      domain: ["A", "B", "D", "E", "G", "H"],
      padding: 0.5
    })
    .editYScale({
      type: "linear",
      domain: [0, 100]
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .encodeStrokeDash({
      field: "predicted",
      fieldType: "nominal",
      scale: {
        domain: [false, true],
        range: [[1, 0], [4, 2], [2, 1], [1, 1], [1, 2, 4, 2]]
      }
    })
    .createAxes({
      x: {
        title: { text: "a", offset: 26, fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif" },
        ticksAndLabels: {
          labels: {
            offset: 7,
            rotation: 0,
            fontSize: 10,
            fontFamily: "sans-serif"
          }
        }
      },
      y: {
        title: { text: "b", offset: 33, fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif" },
        ticksAndLabels: {
          labels: { offset: 7, fontSize: 10, fontFamily: "sans-serif" }
        }
      }
    })
    .createGrid({ horizontal: {color: '#ddd'} })
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    ;
}
