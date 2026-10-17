// DOCS: doc-dfae58344d5a524e (createCanvas), doc-b11b4627b143730d (createLinePlot),
// doc-76573a465e2b6a33 (createScatterPlot), doc-f30bfed200b50a98 (line chart example)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 378,
      height: 375,
      margin: { left: 83, top: 47, right: 15, bottom: 28 }
    })
    .createData({ id: "japan", values: data })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { field: "Population", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: [1960, 2021] })
    .editYScale({ target: "linePlot", domain: [0, 130000000] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createXAxis({
      ticksAndLabels: {
        values: [1960, 1970, 1980, 1990, 2000, 2010, 2020],
        ticks: { length: 0 },
        labels: { rotation: { value: 45, unit: "degrees" }, fontSize: 10, offset: 7, format: "%L" }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .createYAxis({
      ticksAndLabels: {
        count: 8,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Population", fontSize: 11, offset: 74 }
    })
    .editYAxis({
      line: { color: "#888" },
      title: { fontWeight: "bold" }
    })
    .createGrid({ vertical: false, horizontal: { color: "#ddd" } })
    .createTitle({
      text: "Japan Population",
      titleStyle: { fontSize: 13, fontWeight: "bold", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle: "Population change from 1960 to 2021, Source:World Bank",
      align: "left",
      offset: 0
    });
}