// DOCS: doc-e790db38fc2a278a doc-2e6240c00cb297cc doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 560, height: 364, margin: { left: 91, top: 27, right: 69, bottom: 37 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "GDP", fieldType: "quantitative" },
      y: { field: "Megawatt-hours", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [15000, 21000], nice: false })
    .editYScale({ domain: [0, 4500000000], nice: false })
    .encodeStroke({
      field: "decade",
      fieldType: "nominal"
    })
    .editPointMark({ fill: "transparent", strokeWidth: 2 })
    .encodeOpacity({ value: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editStrokeScale({ target: "scatterPlot", domain: ["2010's", "2020's"], range: ["#4c78a8", "#f58518"] })
    .createTextMark({ id: "year-labels", data: "data", fontSize: 10 })
    .editTextMark({ target: "year-labels", baseline: "middle", dx: 7 })
    
    .encodeText({ target: "year-labels", field: "year" })
    .encodeX({ target: "year-labels", field: "GDP", fieldType: "quantitative" })
    .encodeY({ target: "year-labels", field: "Megawatt-hours", fieldType: "quantitative" })
    .encodeColor({
      target: "year-labels",
      field: "decade"
    })
    .editColorScale({ target: "year-labels", domain: ["2010's", "2020's"], range: ["#4c78a8", "#f58518"] })
    .createXAxis({
      title: { text: "GDP [USD]", fontSize: 11, fontWeight: 700 },
      line: { color: "#888" },
      ticksAndLabels: {
        labels: { format: ",.0f", fontSize: 10, offset: 7 },
        values: [15000, 15500, 16000, 16500, 17000, 17500, 18000, 18500, 19000, 19500, 20000, 20500, 21000]
      }
    })
    .createYAxis({
      title: { text: "Consumption [Megawatt-hours]", fontSize: 11, fontWeight: 700 },
      line: { color: "#888" },
      ticksAndLabels: {
        labels: { format: ",.0f", fontSize: 10, offset: 7 },
        values: [0, 500000000, 1000000000, 1500000000, 2000000000, 2500000000, 3000000000, 3500000000, 4000000000, 4500000000]
      }
    })
    .createTitle({
      text: "Total Electricity Consumption vs U.S. Real Gross Domestic Product",
      offset: -10.953125,
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({ align: "center" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["stroke"],
        title: "Decade",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] }
      }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "stroke", symbol: { opacity: 0.7 } });
}