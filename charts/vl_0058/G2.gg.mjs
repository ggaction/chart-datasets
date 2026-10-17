// DOCS: doc-2a31551f1566fc6b, doc-18627fd264d621fc, doc-a743281cbd97a819
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 541,
      height: 377,
      margin: { left: 47, top: 40, right: 194, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "yearNum",
      as: "YearNum",
      expression: { op: "toNumber", operand: { field: "Year" } }
    })
    .createComputedData({
      id: "shNum",
      as: "sh_65Num",
      expression: { op: "toNumber", operand: { field: "sh_65+" } }
    })
    .createLinePlot({
      x: {
        field: "YearNum",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "sh_65Num",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [-631152000000, 4102444800000] })
    .editYScale({ domain: [0, 0.4] })
    .encodeColor({
      field: "Region"
    })
    .editColorScale({
      type: "ordinal",
      domain: [
        "Australia", "Bangladesh", "Brazil", "Canada", "Chile", "China",
        "Democratic Republic of the Congo", "France", "India", "Indonesia",
        "Italy", "Japan", "Republic of Korea", "Spain", "United Kingdom",
        "United States of America", "WORLD"
      ],
      range: [
        "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6",
        "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6",
        "blue", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6", "#C1D0E6"
      ]
    })
    .editLineMark({ strokeWidth: 2 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              -315619200000, 315532800000, 946684800000, 1577836800000,
              2208988800000, 2840140800000, 3471292800000, 4102444800000
            ],
            ticks: { color: "#888", length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              format: "%Y",
              flush: true
            }
          },
          title: { text: "Year", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 27 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
            ticks: { color: "#888", length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              format: ".2f"
            }
          },
          title: { text: "sh_65+", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 35.462890625 }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        position: "right",
        title: "Region",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
      }
    })
    .createTitle({
      text: "Aging populations",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "Share of popluation that is ages 65+. Source: UN. S Korea=blue",
      gap: 3,
      offset: -13
    });
}