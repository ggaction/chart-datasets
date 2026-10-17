// DOCS: doc-fc11e9fb291905d1 (createBarPlot), doc-6c2c08869091f6a0 (createBarPlot card)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 441, height: 381, margin: { left: 35, top: 59, right: 6, bottom: 22 } })
    .createData({ values: data })
    .filterData({ id: "p21sel", field: "p21", predicate: { op: "eq", value: "1" } })
    .createComputedData({ id: "growthNum", as: "growth", expression: { op: "toNumber", operand: { field: "GrowthLatest" } } })
    .createSortedData({ id: "growthSorted", sortBy: [{ field: "growth", order: "descending" }] })
    .createTitle({
      text: "Growth rates - 21 countries",
      titleStyle: { fontSize: 13 },
      offset: -13
    })
    .createBarPlot({
      guides: false,
      x: { field: "growth", fieldType: "quantitative" },
      y: { field: "ISO", fieldType: "nominal" },
    })
    .editXScale({ domain: [-0.04, 0.07] })
    .editYScale({
      domain: ["VNM", "BGD", "IND", "PHL", "EGY", "IDN", "PAK", "TUR", "GBR", "CHN", "COD", "THA", "ETH", "BRA", "JPN", "IRN", "DEU", "USA", "MEX", "NGA", "RUS"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editTitle({ gap: 3, titleStyle: { fontWeight: 700, fontFamily: "sans-serif", color: "black" } })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ fill: "rgb(128,0,0)" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-0.04, -0.03, -0.02, -0.01, 0, 0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".0%", flush: true, color: "black" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
      },
      title: false
    })
    .createGrid({ horizontal: false, vertical: {} })
    .editVerticalGrid({ color: "white", lineWidth: 0.5, zIndex: 0 })
    .editTitle({
      subtitle: "Growth rate of GDP per capita, 2022 vs 2021. World's 21 most populous countries\nSource: World Bank",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      alongOffset: -29.22
    });
}