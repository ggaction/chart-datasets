import { chart } from "ggaction";
import data from "./data.json";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const years = [2007, 2008, 2009, 2019, 2020, 2021, 2022];
const yearRange = ["#4c78a8","#f58518","#e45756","#72b7b2","#54a24b","#eeca3b","#b279a2","#ff9da6","#9d755d","#bab0ac"];

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-a929fd81abd909f8, doc-c2eafbbd16fe3c71, doc-8a4f6f06e0d37d5e
export function buildChart() {
  return chart()
    .createCanvas({
      width: 903,
      height: 499,
      margin: { left: 41, top: 27, right: 62, bottom: 22 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "Month", fieldType: "ordinal" },
      y: { field: "value" },
      guides: false
    })
    .editXScale({ target: "linePlot", type: "point", domain: months })
    .editYScale({ target: "linePlot", domain: [0, 1.4] })
    .createScatterPlot({
      x: { field: "Month", fieldType: "ordinal" },
      y: { field: "value" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", type: "point", domain: months })
    .editYScale({ target: "scatterPlot", domain: [0, 1.4] })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ opacity: 1 })
    .encodeColor({ target: "linePlot", field: "Year" })
    .editColorScale({ target: "linePlot", domain: years, range: yearRange })
    .encodeColor({ target: "scatterPlot", field: "Year" })
    .editColorScale({ target: "scatterPlot", domain: years, range: yearRange })
    .createTitle({
      text: "Comparison of Annual Freight Index Trends",
      offset: -13,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({ alongOffset: 264.8046875, titleStyle: { fontWeight: 700 } })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { count: 15, ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "Freight Index", fontSize: 11, offset: 28 }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({ position: "right", labels: { fontSize: 10 }, titleStyle: { fontSize: 11 } })
    .editYAxisTitle({ fontWeight: 700 })
    .editLegendTitle({ fontWeight: 700 })
}
