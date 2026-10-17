// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33 (createScatterPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 391,
      height: 315,
      margin: { left: 36, top: 5, right: 5, bottom: 60 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "date", fieldType: "nominal" },
      y: { field: "motivation", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", type: "point", domain: ["2/15", "2/16", "2/17", "2/18", "2/19", "2/20", "Today"] })
    .editYScale({ target: "linePlot", type: "linear", domain: [-0.1, 5.2] })
    .editLineMark({ stroke: "#FFAA00", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "date", fieldType: "nominal" },
      y: { field: "motivation", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", type: "point", domain: ["2/15", "2/16", "2/17", "2/18", "2/19", "2/20", "Today"] })
    .editYScale({ target: "scatterPlot", type: "linear", domain: [-0.1, 5.2] })
    .editPointMark({ fill: "#4c78a8", opacity: 1 }).encodePointRadius({ value: 2.7386127875258306 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 12, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "date", fontSize: 12, offset: 52 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 7,
        ticks: {},
        labels: { fontSize: 12, offset: 7 }
      },
      title: { text: "motivation", fontSize: 12, offset: 28 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 } });
}
