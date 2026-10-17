// DOCS: doc-b785fcba5a7e78ae, doc-0a1e48878a814143, doc-fb3b01cca895bdad
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 542, height: 401, margin: { left: 48, top: 64, right: 194, bottom: 37 } })
    .editCanvas({ background: "#122b39" })
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "pct65",
      as: "sh_65+_num",
      expression: { op: "toNumber", operand: { field: "sh_65+" } }
    })
    .createTitle({
      text: "Extreme demographics: the old-age tsunami",
      titleStyle: { color: "#179fdb", fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#179fdb" }
    })
    .createLinePlot({
      guides: false,
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "sh_65+_num",
        fieldType: "quantitative"
      }
    })
    .editXScale({ domain: [-631152000000, 4102444800000] })
    .editYScale({ domain: [0, 0.4] })
    .encodeColor({ field: "Region", fieldType: "nominal" })
    .editColorScale({
      domain: [
        "Australia", "Bangladesh", "Brazil", "Canada", "Chile", "China",
        "Democratic Republic of the Congo", "France", "India", "Indonesia",
        "Italy", "Japan", "Republic of Korea", "Spain", "United Kingdom",
        "United States of America", "WORLD"
      ],
      range: [
        "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6",
        "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6", "red",
        "yellow", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6"
      ]
    })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          -315619200000, 315532800000, 946684800000, 1577836800000,
          2208988800000, 2840140800000, 3471292800000, 4102444800000
        ],
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Year", fontSize: 11, offset: 30 }
    })
    .editXAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: { ticks: { color: "pink" }, labels: { color: "#00a767", format: "%Y" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: ".0%" }
      },
      title: {
        text: "sh_65+",
        fontSize: 11,
        offset: 33,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxis({
      line: { color: "dimgrey" },
      ticksAndLabels: { ticks: { color: "pink" }, labels: { color: "#00a767" } },
      title: { fontWeight: 700 }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        position: "right",
        title: "Region",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
      }
    })
    .editTitle({
      gap: 3,
      offset: -13,
      alongOffset: -42.576171875
    })
    .editTitle({
      subtitle: "Share of popluation that is aged 65+\nSource: UN. Japan=Red, S Korea=Yellow\n"
    });
}