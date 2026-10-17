import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-2bd5de4bd99e314a, doc-d9e3b1b7add0d2c6, doc-5488e292a83e78ba

export function buildChart() {
  return chart()
    .createCanvas({
      width: 332,
      height: 269,
      margin: { left: 44, top: 10, right: 88, bottom: 59 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [1325458800000, 1325473200000] }
      },
      y: {
        field: "price",
        fieldType: "quantitative",
        scale: { domain: [0, 200] }
      },
      guides: false
    })
    .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
    .createGuides({
      legend: false,
      grid: {
        horizontal: { color: "#ddd" },
        vertical: { color: "#ddd" }
      },
      axes: {
        x: {
          ticksAndLabels: {
            values: [
              1325458800000,
              1325462400000,
              1325466000000,
              1325469600000,
              1325473200000
            ],
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              color: "black",
              offset: 7,
              rotation: { value: 15, unit: "degrees" },
              format: "%H:%M"
            }
          },
          title: {
            text: "date (year-month-date-hours-minutes)",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: "black",
            offset: 40
          }
        },
        y: {
          ticksAndLabels: {
            values: [0, 50, 100, 150, 200],
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              color: "black",
              offset: 7
            }
          },
          title: {
            text: "price",
            fontSize: 11,
            fontWeight: "bold",
            fontFamily: "sans-serif",
            color: "black",
            offset: 33
          }
        }
      }
    });
}
