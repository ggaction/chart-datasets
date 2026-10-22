import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-74b3bdd8ea71fca4

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 800, height: 200 },
      margin: { left: 39, right: 6, top: 10, bottom: 37 },
      plotBorder: { underlay: true }
    })
    .createData({
      values: data
    })
    .createComputedData({
      id: "numeric",
      as: "number_temperature",
      expression: { op: "toNumber", operand: { field: "temperature" } }
    })
    .createTimeUnitData({
      id: "minute",
      field: "date",
      unit: "minute"
    })
    .createSummaryData({
      id: "means",
      groupBy: "date_minute",
      aggregates: [
        { op: "mean", field: "number_temperature", as: "mean_temperature" }
      ]
    })
    .createLinePlot({
      x: {
        field: "date_minute",
        fieldType: "temporal",
        scale: { domain: [1262307780000, 1356992700000] }
      },
      y: {
        field: "mean_temperature",
        scale: { domain: [35, 90] }
      },
      guides: false
    })
    .editLineMark({
      strokeWidth: 0.2
    })
    .createGuides({
      axes: {
        x: {
          underlay: true,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              1270080000000,
              1277942400000,
              1285891200000,
              1293840000000,
              1301616000000,
              1309478400000,
              1317427200000,
              1325376000000,
              1333238400000,
              1341100800000,
              1349049600000
            ],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              color: "#000",
              offset: 5.5,
              alongOffset: 0.5,
              labelMap: [
                { value: 1270080000000, label: "Apr 01, 2010 00:00" },
                { value: 1277942400000, label: "" },
                { value: 1285891200000, label: "Oct 01, 2010 00:00" },
                { value: 1293840000000, label: "" },
                { value: 1301616000000, label: "Apr 01, 2011 00:00" },
                { value: 1309478400000, label: "" },
                { value: 1317427200000, label: "Oct 01, 2011 00:00" },
                { value: 1325376000000, label: "" },
                { value: 1333238400000, label: "Apr 01, 2012 00:00" },
                { value: 1341100800000, label: "" },
                { value: 1349049600000, label: "Oct 01, 2012 00:00" }
              ]
            }
          },
          title: {
            text: "date (year-month-date-hours-minutes)",
            fontSize: 11,
            fontWeight: 700,
            color: "#000",
            offset: 27.578125,
            alongOffset: 0.5
          }
        },
        y: {
          underlay: true,
          line: { color: "#888" },
          ticksAndLabels: {
            values: [40, 50, 60, 70, 80, 90],
            ticks: { length: 5, color: "#888", alongOffset: 0.5 },
            labels: {
              fontSize: 10,
              color: "#000",
              offset: 6.5,
              alongOffset: 0.890625
            }
          },
          title: {
            text: "Mean of temperature",
            fontSize: 11,
            fontWeight: 700,
            color: "#000",
            offset: 26.544921875,
            alongOffset: 0.5,
            rotation: { value: -90, unit: "degrees" }
          }
        }
      },
      grid: {
        horizontal: { color: "#ddd" },
        vertical: { color: "#ddd" }
      }
    });
}
