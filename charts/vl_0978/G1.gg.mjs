import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a, doc-7f2c254224fc4908
export function buildChart() {
  return chart()
    .createCanvas({ width: 507, height: 357, margin: { left: 34, top: 40, right: 173, bottom: 17 } })
    .createData({ values: data })
    .createComputedData({ id: "renewNum", as: "renewables", expression: { op: "toNumber", operand: { field: "Renewables (% equivalent primary energy)" } } })
    .createScatterPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year", scale: { type: "time", domain: [-157766400000, 1609459200000] } },
      y: { field: "renewables", fieldType: "quantitative", scale: { type: "linear", domain: [0, 90] } },
      guides: false
    })
    .encodeColor({ field: "renewables", fieldType: "quantitative", scale: { domain: [0, 86.8745346069336], range: ["red", "orange", "#90ee90", "green"], interpolate: "hcl" } })
    .encodePointRadius({ value: 1.9365 })
    .editPointMark({ opacity: 0.7 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: { count: 8, ticks: { length: 0 }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 2, format: "%Y", flush: true } },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: { count: 8, ticks: { length: 0 }, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 2 } },
        title: { text: "Renewables (% equivalent primary energy)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 22.123046875 }
      }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "Renewable consumption %",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        gradient: { length: 200, opacity: 0.7 }
      }
    })
    .createTitle({
      text: "Share of primary energy from renewable sources",
      alongOffset: -28.1,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" } })
    .editTitle({
      subtitle: "Share of primary energy consumption that came from renewable technologies, Source: Our World in Data",
      gap: 1,
      offset: -13
    });
}