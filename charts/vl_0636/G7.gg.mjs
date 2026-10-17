import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-fb2e90cb99b868b9, doc-74fc341a49e892f8, doc-129f8d895c4aca94, doc-6d999470809dcaa3

export function buildChart() {
  return chart()
    .createCanvas({ width: 578, height: 398, margin: { left: 39, top: 61, right: 39, bottom: 37 } })
    .createData({ values: data })
    .editCanvas({ plotBorder: { color: "aliceblue", lineWidth: 1 } })
    .filterData({ id: "d_gdp_valid", field: "GDP per capita (PPP)", noneOf: ["null"] })
    .createComputedData({ id: "d_gdp", as: "GDP_num", expression: { op: "toNumber", operand: { field: "GDP per capita (PPP)" } } })
    .createComputedData({ id: "d_le", as: "LE_num", expression: { op: "toNumber", operand: { field: "Life Expectancy" } } })
    .createComputedData({ id: "d_pop", as: "Population_num", expression: { op: "toNumber", operand: { field: "Population" } } })
    .createTitle({
      text: "GDP and Life Expectancy",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -13
    })
    .createScatterPlot({
      x: { field: "GDP_num", fieldType: "quantitative" },
      y: { field: "LE_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "log", domain: [1000, 100000] })
    .editYScale({ domain: [50, 90] })
    .encodeColor({ field: "Continent", fieldType: "nominal" })
    .editColorScale({ target: "scatterPlot", domain: ["Africa", "America", "Asia", "Europe", "Oceania"], palette: "set1" })
    .encodeSize({ field: "Population_num", fieldType: "quantitative" })
    .editSizeScale({ target: "scatterPlot", domain: [0, 1425893465], range: [Math.PI * 2.5, 150 * Math.PI] })
    .editPointMark({ opacity: 0.8 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1000, 2000, 5000, 10000, 20000, 40000, 100000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "GDP (log scale)", fontSize: 11, offset: 30 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [50, 55, 60, 65, 70, 75, 80, 85, 90],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Happiness", fontSize: 11, offset: 28, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: {
        color: "black",
        labelMap: [
          { value: 1000, label: "$1,000" },
          { value: 2000, label: "$2,000" },
          { value: 5000, label: "$5,000" },
          { value: 10000, label: "$10,000" },
          { value: 20000, label: "$20,000" },
          { value: 40000, label: "$40,000" },
          { value: 100000, label: "$100,000" }
        ]
      }
    })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "black" }
    })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({
      horizontal: { values: [50, 55, 60, 65, 70, 75, 80, 85, 90] },
      vertical: { values: [1000, 2000, 5000, 10000, 20000, 40000, 100000] }
    })
    .editHorizontalGrid({ color: "rgba(221,221,221,0.3)" })
    .editVerticalGrid({ color: "rgba(221,221,221,0.3)" })
    .createLegend({ target: "scatterPlot", channels: ["color"], position: "bottom-right" })
    .editLegend({
      title: false,
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.8 } })
    .editTitle({
      subtitle: "Life expectancy: source: UN Population Prospects 2022\nGDP: per capita PPP (international $) source: World Bank\n",
      subtitleStyle: { fontSize: 9, fontStyle: "italic", color: "black" },
      gap: 2
    })
    .editTitle({ alongOffset: -33.12 });
}