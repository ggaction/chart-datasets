// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33, doc-7184b02978bdf5d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 448,
      height: 342,
      margin: { left: 39, top: 5, right: 9, bottom: 37 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 2] })
    .editYScale({ domain: [0, 13] })
    .editPointMark({ fill: "red", opacity: 0.7 })
    .encodePointRadius({ value: 3.5355339059327378 })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "x", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "y", fontSize: 11, offset: 26 }
    })
    .editXAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .editXAxisTitle({ color: "black", fontFamily: "sans-serif", fontWeight: 700 })
    .editYAxisLabels({ color: "black", fontFamily: "sans-serif" })
    .editYAxisTitle({ color: "black", fontFamily: "sans-serif", fontWeight: 700 })
    .createHorizontalGrid()
    .createVerticalGrid()
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 });
}
