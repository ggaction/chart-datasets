import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4

const X_DOMAIN = ["2023_01","2022_12","2022_11","2022_10","2022_09","2022_08","2022_07","2022_06","2022_05","2022_04","2022_03","2022_02","2022_01","2021_12","2021_10","2021_09","2021_08","2021_07","2021_06","2021_05","2021_04","2021_03","2021_02","2020_10","2020_08","2020_05","2020_04","2020_03","2020_02","2020_01","2019_12","2019_11","2019_10","2019_09","2019_08","2019_07","2019_06","2019_05","2019_04","2019_01","2018_12","2018_09","2018_08","2018_05","2018_04","2018_03","2018_02","2018_01","2017_12","2017_04","2016_12","2016_11"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 708, height: 404, margin: { left: 53, top: 38, right: 5, bottom: 66 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "year_month type", fieldType: "nominal" },
      y: { field: "count" },
      guides: false
    })
    .editXScale({ domain: X_DOMAIN, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 6000] })
    .editBarMark({ fill: "#4c78a8" })
    .encodeBarWidth({ band: 1 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "year_month type", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 60 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          ticks: { length: 5 },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
        },
        title: { text: "count", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 34 }
      }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" } } })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false })
    .createTitle({
      text: "Year and Month Of Update (Sidewalks)",
      offset: -6,
      titleStyle: { fontSize: 24 }
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" } });
}
