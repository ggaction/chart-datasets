// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-b1afedddb1ebef69
import { chart } from "ggaction";
import data from "./data.json";

const G7 = ["Canada", "France", "Germany", "Italy", "Japan", "United Kingdom", "United States"];
const X_TICKS = [-315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000];
const Y_TICKS = [0, 5000000000000, 10000000000000, 15000000000000, 20000000000000, 25000000000000, 30000000000000, 35000000000000];

export function buildChart() {
  return chart()
    .createCanvas({ width: 636, height: 309, margin: { left: 122, top: 27, right: 314, bottom: 82 } })
    .createData({ values: data })
    .filterData({ id: "g7", field: "country", oneOf: G7 })
    .createComputedData({ id: "yearNum", as: "yearNum", expression: { op: "toNumber", operand: { field: "year" } } })
    .createComputedData({ id: "popNum", as: "popNum", expression: { op: "toNumber", operand: { field: "pop" } } })
    .createComputedData({ id: "gdpPercapNum", as: "gdpPercapNum", expression: { op: "toNumber", operand: { field: "gdpPercap" } } })
    .createComputedData({ id: "gdp", as: "gdp", expression: { op: "multiply", left: { field: "popNum" }, right: { field: "gdpPercapNum" } } })
    .createSummaryData({ id: "agg", groupBy: ["yearNum", "country"], aggregates: [{ op: "sum", field: "gdp", as: "total" }] })
    .createSortedData({ id: "ordered", sortBy: [{ field: "country", order: "descending" }] })
    .createStackData({ category: "yearNum", group: "country", value: "total" })
    .createAreaPlot({
      x: { field: "yearNum", fieldType: "temporal", temporalUnit: "year" },
      y: { lower: "total_start", upper: "total_end" },
      guides: false
    })
    .editXScale({ target: "areaPlot", domain: [-568080000000, 1483228800000], nice: false })
    .editYScale({ target: "areaPlot", domain: [0, 35000000000000] })
    .encodeGroup({ field: "country" })
    .encodeColor({ field: "country", fieldType: "nominal" })
    .editColorScale({ target: "areaPlot", domain: G7, range: ["#66c2a5", "#fc8d62", "#8da0cb", "#e78ac3", "#a6d854", "#ffd92f", "#e5c494", "#b3b3b3"] })
    .editAreaMark({ opacity: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-gdp-currency-glyphs",
        measurements: [
          { text: "$0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 },
          { text: "$5,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 88.984375 },
          { text: "$10,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 94.546875 },
          { text: "$15,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 94.546875 },
          { text: "$20,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 94.546875 },
          { text: "$25,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 94.546875 },
          { text: "$30,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 94.546875 },
          { text: "$35,000,000,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 94.546875 }
        ]
      }
    })
    .createAxes({
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: X_TICKS,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, format: "%Y" }
          },
          title: { text: "year (year)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 30 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: Y_TICKS,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, labelMap: [{ value: 0, label: "$0" }, { value: 5000000000000, label: "$5,000,000,000,000" }, { value: 10000000000000, label: "$10,000,000,000,000" }, { value: 15000000000000, label: "$15,000,000,000,000" }, { value: 20000000000000, label: "$20,000,000,000,000" }, { value: 25000000000000, label: "$25,000,000,000,000" }, { value: 30000000000000, label: "$30,000,000,000,000" }, { value: 35000000000000, label: "$35,000,000,000,000" }] }
          },
          title: { text: "total", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 110, rotation: { value: -90, unit: "degrees" } }
        }
    })
    .createGuides({
      axes: false,
      grid: { horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false },
      legend: {
        position: "bottom",
        align: "left",
        direction: "horizontal",
        title: "country",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    })
    .createTitle({
      text: "GDP in G7 countries, 1952-2017",
      offset: -4,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    });
}