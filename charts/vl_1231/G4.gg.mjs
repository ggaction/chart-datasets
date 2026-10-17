// DOCS: doc-6c2c08869091f6a0 createBarPlot; doc-fc11e9fb291905d1 createBarPlot range channels;
// DOCS: documented createTimeUnitData / createStackData derivation actions.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Outer canvas 384x342, margins from contract; legend fits in right margin (default outside spacing).
    .createCanvas({
      width: 394,
      height: 342,
      margin: { left: 29, top: 40, right: 90, bottom: 22 }
    })
    // Raw frozen dataset (Year arrives as "1961" strings; Indicator Name retained).
    .createData({ id: "source", values: data })
    // Raw Country Name descending order determines the signed stack order.
    .createSortedData({ id: "sorted", sortBy: [{ field: "Country Name", order: "descending" }] })
    // Parse raw year strings into year time points (default as: Year_year; raw Year untouched).
    .createTimeUnitData({ id: "dated", field: "Year", unit: "year" })
    // Sign flag splits positive/negative growth partitions (growth values include negatives).
    .createComputedData({
      id: "signed",
      as: "sign",
      expression: { op: "gte", left: { field: "GDP growth (annual %)" }, right: { constant: 0 } }
    })
    // Cumulative signed sums per year+sign partition replace mode-zero stacking.
    .createWindowData({
      id: "windowed",
      partitionBy: ["Year_year", "sign"],
      operations: [{ op: "cumulativeSum", field: "GDP growth (annual %)", as: "growth_end" }]
    })
    // Stack segment start = cumulative end minus the row value.
    .createComputedData({
      id: "final",
      as: "growth_start",
      expression: { op: "subtract", left: { field: "growth_end" }, right: { field: "GDP growth (annual %)" } }
    })
    // G1 compact facade: exactly x, y, guides:false.
    .createBarPlot({
      x: { field: "Year_year", fieldType: "temporal" },
      y: {
        lower: "growth_start",
        upper: "growth_end",
        fieldType: "quantitative"
      },
      guides: false
    })
    // Resolved x time domain in epoch milliseconds from the settled source.
    .editXScale({ domain: [-319722384905, 1645184784905], range: [29, 304] })
    // Resolved y domain.
    .editYScale({ domain: [-15, 20] })
    // Nominal country color with exact resolved domain order and palette.
    .encodeColor({ field: "Country Name", fieldType: "nominal" })
    .editColorScale({
      domain: ["Sweden", "Denmark", "Norway"],
      range: ["#f4c245", "#00a767", "#179fdb"]
    })
    // Source bar thickness is 5px (time-scale band).
    .encodeBarWidth({ pixels: 5 })
    // Source bars have no outline.
    .editBarMark({ stroke: false })
    // Complete X/Y axes (tick length/label offset are protected geometry kept at creation).
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 7,
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, color: "black" }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 7,
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, color: "black" }
      },
      title: false
    })
    // Both inferred grid directions made explicit with source #ddd.
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    // Right legend with default outside spacing (legend typography is protected intermediate geometry).
    .createLegend({
      position: "right",
      titleStyle: { fontSize: 11, fontWeight: "bold", color: "black" },
      labels: { fontSize: 10, color: "black" }
    })
    // Title block with source fonts (fixed 16px inset within the 40px top margin).
    .createTitle({
      text: "GDP per capita growth (annual %)",
      align: "left",
      titleStyle: { fontSize: 13, fontWeight: "bold", color: "black" }
    })
    // Subtitle with source italic styling and offset -12 so both lines fit in the top margin.
    .editTitle({
      subtitle: "Annual percentage changes in Scandinavian countries",
      subtitleStyle: { fontStyle: "italic", fontSize: 10 },
      offset: -12
    })
  .editLegendTitle({ title: false });
}