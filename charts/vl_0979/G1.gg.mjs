// DOCS: doc-8a4f6f06e0d37d5e, doc-1740a98a3616e322
import { chart } from "ggaction";
import data from "./data.json";



export function buildChart() {
  return chart()
    .createCanvas({ width: 237, height: 262, margin: { left: 44, top: 40, right: 18, bottom: 22 } })
    .createData({ id: "cpi", values: data })
    
    .filterData({ id: "gte", field: "year", predicate: { op: "gt", value: "2016" } })
    .filterData({ id: "filteredMax", field: "year", predicate: { op: "lt", value: "2022" } })
    .createComputedData({ id: "valueN", as: "valueN", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal", scale: { domain: [1483228800000, 1638316800000] } },
      y: { field: "valueN", fieldType: "quantitative", scale: { domain: [-10, 20] } },
      guides: false,
    })
    .editLineMark({ stroke: "#86d0bb", strokeWidth: 1.5, opacity: 1 })
    .createTitle({
      text: "CPI",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
    })
    .editTitle({ gap: 3, alongOffset: -38.96 })
    .editTitle({
      subtitle: "CPIH annual rate: Bread 2015 = 100. Source: ONS",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-axis-labels",
        measurements: [
          { text: "2017", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2019", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25000762939453 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
          { text: "2021", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
        ],
      },
    })
    .createGuides({
      grid: false,
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            values: [1483228800000, 1514764800000, 1546300800000, 1577836800000, 1609459200000],
            ticks: {},
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%Y", flush: true },
          },
          title: false,
        },
        y: {
          line: {},
          ticksAndLabels: {
            values: [-10, -5, 0, 5, 10, 15, 20],
            ticks: {},
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 },
          },
          title: { text: "Annual rate %", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 },
        },
      },
    });
}