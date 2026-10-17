// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1 doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 708,
      height: 404,
      margin: { left: 53, top: 38, right: 5, bottom: 66 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "year_month type", fieldType: "nominal" },
      y: { field: "count", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({
      domain: [
        "2023_01", "2022_12", "2022_11", "2022_10", "2022_09", "2022_06",
        "2022_05", "2022_04", "2022_03", "2022_01", "2021_10", "2021_09",
        "2021_07", "2021_06", "2021_03", "2020_02", "2020_01", "2019_12",
        "2019_11", "2019_09", "2019_08", "2019_07", "2019_06", "2019_05",
        "2019_04", "2019_03", "2019_02", "2018_12", "2018_11", "2017_09"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 1000] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "#4c78a8" })
    .createTitle({
      text: "Year and Month Of Update (Crossings)",
      offset: -6,
      titleStyle: { fontSize: 24 }
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          "2023_01", "2022_12", "2022_11", "2022_10", "2022_09", "2022_06",
          "2022_05", "2022_04", "2022_03", "2022_01", "2021_10", "2021_09",
          "2021_07", "2021_06", "2021_03", "2020_02", "2020_01", "2019_12",
          "2019_11", "2019_09", "2019_08", "2019_07", "2019_06", "2019_05",
          "2019_04", "2019_03", "2019_02", "2018_12", "2018_11", "2017_09"
        ],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: {
        text: "year_month type",
        fontSize: 11,
        offset: 56
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "count",
        fontSize: 11,
        offset: 33
      }
    })
    .createGrid({ horizontal: { color: "#ddd" } })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: 700, fontFamily: "sans-serif", color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700, fontFamily: "sans-serif", color: "black" });
}