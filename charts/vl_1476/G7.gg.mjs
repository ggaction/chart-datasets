// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 708,
      height: 404,
      margin: { top: 38, right: 5, bottom: 66, left: 53 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "year_month type",
        fieldType: "nominal",
      },
      y: {
        field: "count",
        fieldType: "quantitative",
      },
      guides: false
    })
    .encodeBarWidth({ band: 1 })

    .editXScale({
      domain: [
        "2022_12", "2022_11", "2022_10", "2022_09", "2022_06", "2022_05",
        "2022_03", "2022_01", "2021_11", "2021_10", "2021_09", "2021_07",
        "2021_06", "2020_11", "2018_10", "2016_11"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 2000], zero: true })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "year_month type", fontSize: 11, offset: 54 }
    })
    .createYAxis({
      ticksAndLabels: {
        count: 11,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "count", fontSize: 11, offset: 45 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: true,
      vertical: false
    })
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({
      text: "Year and Month Of Update (Kerbs)",
      titleStyle: { fontSize: 24 },
      offset: -6
    })
    .editTitle({ titleStyle: { fontWeight: 700, fontFamily: "sans-serif" } });
}