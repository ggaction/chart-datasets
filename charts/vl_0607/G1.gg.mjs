// DOCS: doc-76573a465e2b6a33, doc-dfae58344d5a524e, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 638,
      height: 383,
      margin: { left: 64, top: 61, right: 74, bottom: 22 }
    })
    .createData({ values: data })
    .filterData({ id: "selected_view", field: "View", oneOf: ["by Percentile"] })
    .createComputedData({
      id: "incomeNum",
      as: "IncomeNum",
      expression: { op: "toNumber", operand: { field: "Income" } }
    })
    .createLinePlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year",
        scale: { domain: [-94694400000, 1609459200000] }
      },
      y: {
        field: "IncomeNum",
        fieldType: "quantitative",
        scale: { zero: false, domain: [20000, 300000] }
      },
      guides: false
    })
    .encodeColor({ target: "linePlot", field: "Series", scale: { domain: ["20th", "40th", "60th", "80th", "95th", "Median"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .encodeGroup({ target: "linePlot", field: "Series" })
    .createScatterPlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year",
        scale: { domain: [-94694400000, 1609459200000] }
      },
      y: {
        field: "IncomeNum",
        fieldType: "quantitative",
        scale: { zero: false, domain: [20000, 300000] }
      },
      guides: false
    })
    .encodeColor({ target: "scatterPlot", field: "Series", scale: { domain: ["20th", "40th", "60th", "80th", "95th", "Median"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editLineMark({ strokeWidth: 2, opacity: 1 })
    .editPointMark({ shape: "circle", opacity: 1, stroke: false })
    .createTitle({
      text: "US Incomes Over Time",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -5
    })
    .editTitle({
      subtitle:
        "Real Household Incomes by Percentile, Race, and Region, over time (2021 USD)\nsource: US Census Bureau\n",
      subtitleStyle: { fontSize: 9, fontStyle: "italic" },
      gap: 2
    })
    .createGuides({
      axes: {
        x: {
          title: false,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              0, 157766400000, 315532800000, 473376000000, 631152000000,
              788918400000, 946684800000, 1104537600000, 1262304000000,
              1420070400000, 1577836800000
            ],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, format: "%Y" }
          }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [50000, 100000, 150000, 200000, 250000, 300000],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, format: ",.0f" }
          },
          title: {
            text: "Household Income (2021 USD)",
            fontSize: 11,
            fontWeight: 700
          }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        position: "right",
        title: "Series",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
      }
    });
}