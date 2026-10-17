import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d

export function buildChart() {
  return chart()
    .createCanvas({
      width: 684,
      height: 362,
      margin: { left: 49, top: 40, right: 235, bottom: 22 },
    })
    // Raw rows preserved; only typed derivations of the raw fields.
    .createData({ id: "energy", values: data })
    .createComputedData({
      id: "energyYear",
      as: "YearMs",
      expression: { op: "parseTime", operand: { field: "Year" }, format: "auto" },
    })
    .createComputedData({
      id: "energyNum",
      as: "ConsumptionNum",
      expression: { op: "toNumber", operand: { field: "Energy Consumption" } },
    })
    .createSortedData({
      id: "descending",
      source: "energyNum",
      sortBy: [{ field: "Energy Source", order: "descending" }],
    })
    .createWindowData({
      id: "stacked",
      partitionBy: ["YearMs"],
      operations: [{ op: "cumulativeSum", field: "ConsumptionNum", as: "y1" }],
    })
    .createComputedData({
      id: "start",
      as: "y0",
      expression: {
        op: "subtract",
        left: { field: "y1" },
        right: { field: "ConsumptionNum" },
      },
    })
    .createSortedData({
      id: "restored",
      source: "start",
      sortBy: [
        { field: "Energy Source", order: "ascending" },
        { field: "Region", order: "ascending" },
        { field: "YearMs", order: "ascending" },
      ],
    })
    .createBarPlot({
      guides: false,
      x: { field: "YearMs", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { lower: "y0", upper: "y1" },
    })
    .encodeColor({ field: "Energy Source", layout: "overlay" })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [-180423138461, 1632115938461], nice: false })
    .editYScale({ domain: [0, 180000] })
    .editColorScale({ domain: ["Biofuels Consumption - TWh - Total (zero filled)", "Coal Consumption - TWh (zero filled)", "Gas Consumption - TWh (zero filled)", "Geo Biomass Other - TWh (zero filled)", "Hydro Consumption - TWh (zero filled)", "Nuclear Consumption - TWh (zero filled)", "Oil Consumption - TWh (zero filled)", "Solar Consumption - TWh (zero filled)", "Wind Consumption - TWh (zero filled)"], range: ["rgb(191, 60, 175)", "rgb(254, 75, 131)", "rgb(255, 120, 71)", "rgb(226, 183, 47)", "rgb(175, 240, 91)", "rgb(82, 246, 103)", "rgb(29, 223, 163)", "rgb(35, 171, 216)", "rgb(76, 110, 219)"] })
    .createGrid({
      horizontal: {
        values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000, 180000],
      },
      vertical: {
        values: [
          -157766400000, 0, 157783680000, 315532800000, 473592000000, 631152000000,
          788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000,
          1577836800000,
        ],
      },
    })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createXAxis({
      title: false,
      line: {},
      ticksAndLabels: {
        values: [
          -157766400000, 0, 157783680000, 315532800000, 473592000000, 631152000000,
          788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000,
          1577836800000,
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 },
      },
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black", format: "%Y" },
      },
    })
    .createYAxis({
      title: false,
      line: {},
      ticksAndLabels: {
        values: [0, 20000, 40000, 60000, 80000, 100000, 120000, 140000, 160000, 180000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 },
      },
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "black", format: ",.0f" },
      },
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        position: "right",
        direction: "vertical",
        title: "Energy Source",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] },
      },
    })
    .editLegendTitle({ color: "rgb(0, 0, 0)" })
    .editLegendLabels({ color: "rgb(0, 0, 0)" })
    .editLegendBlock({
      target: "barPlot",
      channel: "color",
      labelMap: [
        { value: "Biofuels Consumption - TWh - Total (zero filled)", label: "Biofuels Consumption - TWh - Tot…" },
        { value: "Coal Consumption - TWh (zero filled)", label: "Coal Consumption - TWh (zero fil…" },
        { value: "Gas Consumption - TWh (zero filled)", label: "Gas Consumption - TWh (zero fill…" },
        { value: "Geo Biomass Other - TWh (zero filled)", label: "Geo Biomass Other - TWh (zero f…" },
        { value: "Hydro Consumption - TWh (zero filled)", label: "Hydro Consumption - TWh (zero f…" },
        { value: "Nuclear Consumption - TWh (zero filled)", label: "Nuclear Consumption - TWh (zer…" },
        { value: "Oil Consumption - TWh (zero filled)", label: "Oil Consumption - TWh (zero filled)" },
        { value: "Solar Consumption - TWh (zero filled)", label: "Solar Consumption - TWh (zero fi…" },
        { value: "Wind Consumption - TWh (zero filled)", label: "Wind Consumption - TWh (zero fi…" },
      ],
    })
    .createTitle({
      text: "Poverty in different regions",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
    })
    .editTitle({ subtitle: "Source:World Bank", offset: -13, gap: 1 })
    .editTitle({ alongOffset: -43.1474609375 })
    ;
}