// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

const years = ["1896","1900","1904","1908","1912","1916","1920","1924","1928","1932","1936","1948","1952","1956","1960","1964","1968","1972","1976","1980","1984","1988","1992","1996","2000","2004","2008","2012","2016","2020"];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1022,
      height: 260,
      margin: { left: 39, top: 10, right: 83, bottom: 50 }
    })
    .editCanvas({ background: "rgba(255, 255, 255, 0)" })
    .createData({ id: "olympics", values: data })
    .createSummaryData({
      id: "medalCount",
      groupBy: ["Year", "Medal"],
      aggregates: [{ op: "count", as: "count" }]
    })
    .createSortedData({
      id: "medalOrder",
      sortBy: [{ field: "Medal", order: "descending" }]
    })
    .createStackData({
      category: "Year",
      group: "Medal",
      value: "count"
    })
    .filterData({ id: "visibleMedals", field: "Medal", noneOf: [""] })
    .createBarPlot({
      x: { field: "Year", fieldType: "ordinal" },
      y: { lower: "count_start", upper: "count_end" },
      guides: false
    })
    .editXScale({ domain: years, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 60] })
    .encodeColor({ field: "Medal", layout: "overlay" })
    .editColorScale({
      domain: ["Gold", "Silver", "Bronze"],
      range: ["#A7A59C", "#E8C85D", "#DBA584"]
    })
    .encodeBarWidth({ band: 1 })
    .filterData({ id: "missingMedals", source: "stacked", field: "Medal", oneOf: [""] })
    .createBarMark({ id: "missingBars", data: "missingMedals", fill: "transparent" })
    .editBarMark({ target: "missingBars", stroke: false })
    .encodeX({ target: "missingBars", field: "Year", fieldType: "ordinal" })
    .encodeYRange({ target: "missingBars", lower: "count_start", upper: "count_end" })
    .encodeBarWidth({ target: "missingBars", band: 1 })    .createXAxis({
      ticksAndLabels: {
        values: years,
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "Year", fontSize: 11, fontFamily: "sans-serif", offset: 39 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "Number of Medals",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 27,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",

        title: "Medal Type",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] }
      }
    });
}