// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17, doc-bc26da5598d35bae, doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 589,
      height: 385,
      margin: { left: 26, top: 5, right: 113, bottom: 30 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "evColor",
      as: "EV reads present",
      expression: { field: "All" }
    })
    .createScatterPlot({
      x: { field: "x", fieldType: "nominal" },
      y: { field: "y", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ domain: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] })
    .editYScale({ domain: ["A", "B", "C", "D", "E", "F", "G", "H"] })
    .encodeColor({
      field: "EV reads present"
    })
    .editColorScale({
      domain: ["Absent", "Present"],
      range: ["#4c78a8", "#f58518"]
    })
    .encodePointRadius({ value: Math.sqrt(500) / 2 })
    .encodeOpacity({ value: 0.7, target: "scatterPlot" })
    .editPointMark({ stroke: false, target: "scatterPlot" })
    .createXAxis({
      ticksAndLabels: {
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        labels: { fontSize: 18, offset: 5 }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        labels: { fontSize: 18, offset: 7 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editXAxisLabels({ fontFamily: "Helvetica Neue" })
    .editYAxisLabels({ fontFamily: "Helvetica Neue" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        title: "EV reads present",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 }
      }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "color",
      symbol: { stroke: "none", strokeWidth: 1.5, opacity: 0.7 }
    });
}