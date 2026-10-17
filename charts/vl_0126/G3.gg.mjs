// DOCS: doc-b11b4627b143730d (createLinePlot), doc-071c93dff3a5ea2e (temporal x line recipe)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 479, height: 259, margin: { left: 72, top: 22, right: 7, bottom: 37 } })
    .createData({ values: data })
    .createWindowData({
      id: "cumulativeDownloads",
      sortBy: [{ field: "date" }],
      operations: [{ op: "cumulativeSum", field: "download_count", as: "cumulative_sum" }]
    })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "cumulative_sum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1584057600000, 1685923200000], nice: false })
    .editYScale({ domain: [0, 6500000] })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-x-labels", measurements: [{ text: "April", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 20.015625 }, { text: "July", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 17.796875 }, { text: "October", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 35.578125 }, { text: "2021", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }, { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }, { text: "2023", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 }, { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 }, { text: "1,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "2,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "3,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "4,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "5,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }, { text: "6,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 }] } })
    .createXAxis({
        ticksAndLabels: {
          values: [1585699200000, 1593561600000, 1601510400000, 1609459200000, 1617235200000, 1625097600000, 1633046400000, 1640995200000, 1648771200000, 1656633600000, 1664582400000, 1672531200000, 1680307200000],
          ticks: {},
          labels: { offset: 7, fontSize: 10, flush: true, labelMap: [{ value: 1585699200000, label: "April" }, { value: 1593561600000, label: "July" }, { value: 1601510400000, label: "October" }, { value: 1609459200000, label: "2021" }, { value: 1617235200000, label: "April" }, { value: 1625097600000, label: "July" }, { value: 1633046400000, label: "October" }, { value: 1640995200000, label: "2022" }, { value: 1648771200000, label: "April" }, { value: 1656633600000, label: "July" }, { value: 1664582400000, label: "October" }, { value: 1672531200000, label: "2023" }, { value: 1680307200000, label: "April" }] }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 30 }
    })
    .createYAxis({
        ticksAndLabels: {
          values: [0, 1000000, 2000000, 3000000, 4000000, 5000000, 6000000],
          ticks: {},
          labels: { offset: 7, fontSize: 10, format: ",.0f" }
        },
        title: { text: "Cumulative Sum of Downloads", fontSize: 11, fontWeight: 700, offset: 60.4873046875 }
    })
    .createTitle({
      text: "Cumulative Sum of Downloads",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({ align: "center" });;
}