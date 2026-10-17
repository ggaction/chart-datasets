// DOCS: doc-2bd5de4bd99e314a, doc-b11b4627b143730d, doc-f30bfed200b50a98
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 449,
      height: 466,
      margin: { left: 44, top: 29, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .createTimeUnitData({ id: "byYear", field: "launched", unit: "year" })
    .filterData({ id: "windowYears", field: "launched_year", range: { min: 1388534400000, max: 1483228800000, minInclusive: true, maxInclusive: true } })
    .createSummaryData({
      id: "counts",
      groupBy: ["launched_year", "category"],
      aggregates: [{ op: "count", as: "count" }]
    })
    .createLinePlot({
      x: { field: "launched_year", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({
      type: "point",
      padding: 0.5,
      domain: [1388534400000, 1420070400000, 1451606400000, 1483228800000]
    })
    .editYScale({ domain: [0, 800] })
    .encodeColor({ field: "category", fieldType: "nominal" })
    .editColorScale({
      domain: ["3D Printing", "Robots", "Software"],
      range: ["rgb(255,128,14)", "rgb(0,107,164)", "rgb(171,171,171)"]
    })
    .editLineMark({ strokeWidth: 2 })
    .createTitle({
      text: "Robot and 3D Printing Launch",
      offset: -4,
      titleStyle: { fontSize: 15, fontWeight: 700 }
    })
    .editTitle({ align: "center" })
    .createXAxis({
      ticksAndLabels: {
        values: [1388534400000, 1420070400000, 1451606400000, 1483228800000],
        ticks: { length: 5, color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 1388534400000, label: "2014" },
            { value: 1420070400000, label: "2015" },
            { value: 1451606400000, label: "2016" },
            { value: 1483228800000, label: "2017" }
          ]
        }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 30 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500, 600, 700, 800],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Number of Projects Launched", fontSize: 11, fontWeight: 700, offset: 35 }
    })
    .createGrid({ horizontal: { color: "#ddd" } })
    .createLegend({
      position: "top-right",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    })
    .editLegend({ title: "Category", symbol: { length: 10, lineWidth: 1.5 } });
}