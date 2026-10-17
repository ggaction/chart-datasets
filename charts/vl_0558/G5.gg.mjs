// DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

const X_TICKS = [-315619200000, 315532800000, 946684800000, 1577836800000, 2208988800000, 2840140800000, 3471292800000, 4102444800000];
const Y_TICKS = [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4];
const CAT_DOMAIN = ["Australia", "Bangladesh", "Brazil", "Canada", "Chile", "China", "France", "India", "Indonesia", "Italy", "Japan", "Republic of Korea", "Spain", "United Kingdom", "United States of America", "WORLD"];
const CAT_RANGE = ["rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(0,150,150,1)", "rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(128,0,0,0.2)", "rgba(0,67,167,1)", "rgba(128,0,0,1)"];
const LEGEND_MAP = [
  { value: "Australia", label: "" }, { value: "Bangladesh", label: "" },
  { value: "Brazil", label: "" }, { value: "Canada", label: "" },
  { value: "Chile", label: "" }, { value: "China", label: "" },
  { value: "France", label: "" }, { value: "India", label: "" },
  { value: "Indonesia", label: "" }, { value: "Italy", label: "" },
  { value: "Japan", label: "Japan" }, { value: "Republic of Korea", label: "" },
  { value: "Spain", label: "" }, { value: "United Kingdom", label: "" },
  { value: "United States of America", label: "USA" }, { value: "WORLD", label: "World" }
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 355, height: 489, margin: { left: 48, top: 52, right: 7, bottom: 37 } })
    .createData({ values: data })
    .filterData({ id: "noDRC", field: "Region", noneOf: ["Democratic Republic of the Congo"] })
    .createComputedData({ id: "sh65num", as: "sh65", expression: { op: "toNumber", operand: { field: "sh_65+" } } })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "sh65" },
      guides: false
    })
    .editXScale({ domain: [-631152000000, 4102444800000] })
    .editYScale({ domain: [0, 0.4] })
    .encodeColor({ field: "Region", fieldType: "nominal" })
    .editColorScale({ target: "linePlot", domain: CAT_DOMAIN, range: CAT_RANGE })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: X_TICKS,
        ticks: { color: "#888" },
        labels: {
          format: "%Y", fontSize: 10, fontFamily: "sans-serif", offset: 7,
          labelMap: [
            { value: -315619200000, label: "1960" }, { value: 315532800000, label: "" },
            { value: 946684800000, label: "2000" }, { value: 1577836800000, label: "" },
            { value: 2208988800000, label: "2040" }, { value: 2840140800000, label: "" },
            { value: 3471292800000, label: "2080" }, { value: 4102444800000, label: "" }
          ]
        }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { color: "#888" },
        labels: { format: ".0%", fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "sh_65+", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 36.0146484375 }
    })
    .createGuides({
      axes: false, grid: false,
      legend: {
        channels: ["color"], position: "top-left", columns: 2,
        title: "Region",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
      }
    })
    .editLegendBlock({ target: "linePlot", channel: "color", labelMap: LEGEND_MAP })
    .createTitle({
      text: "Getting older fast",
      titleStyle: { fontSize: 13, fontWeight: "bold" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ subtitle: "Share of popluation that is aged 65+. Source: UN\n", offset: -12 });
}