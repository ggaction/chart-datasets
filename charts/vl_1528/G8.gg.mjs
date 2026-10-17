// DOCS: doc-b11b4627b143730d, doc-a929fd81abd909f8, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 798,
      height: 499,
      margin: { top: 27, right: 7, bottom: 22, left: 91 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "Megawatt-hours", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .editXScale({ domain: [1262304000000, 1672531200000] })
    .editYScale({ domain: [0, 4000000000], zero: true })
    .createGrid({
      horizontal: true,
      vertical: true
    })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source1528browser",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "500,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 55.625 },
          { text: "1,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 },
          { text: "1,500,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 },
          { text: "2,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 },
          { text: "2,500,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 },
          { text: "3,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 },
          { text: "3,500,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 },
          { text: "4,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.953125 }
        ]
      }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [1262304000000, 1293840000000, 1325376000000, 1356998400000, 1388534400000, 1420070400000, 1451606400000, 1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000, 1672531200000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: false
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 500000000, 1000000000, 1500000000, 2000000000, 2500000000, 3000000000, 3500000000, 4000000000],
        ticks: { length: 5 },
        labels: { format: ",", fontSize: 10, offset: 7 }
      },
      title: { text: "Megawatt-hours", fontSize: 11, offset: 80 }
    })
    .createTitle({
      text: "Total US Electricity Consumption (all sectors)",
      offset: -3,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700, fontFamily: "sans-serif" } })
    .editYAxisTitle({
      fontWeight: 700
    });
}
