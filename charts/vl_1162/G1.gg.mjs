import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-2a31551f1566fc6b
    .createCanvas({
      width: 246,
      height: 277,
      margin: { left: 39, top: 27, right: 7, bottom: 50 }
    })
    // DOCS: doc-c2eafbbd16fe3c71
    .createData({ id: "raw", values: data })
    .createComputedData({
      id: "plot",
      as: "valueNum",
      expression: { op: "toNumber", operand: { field: "value" } }
    })
    // DOCS: doc-b11b4627b143730d doc-76573a465e2b6a33
    .createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        temporalUnit: "year",
        scale: { type: "time", domain: [694224000000, 1609459200000] }
      },
      y: {
        field: "valueNum",
        fieldType: "quantitative",
        scale: { domain: [0, 40] }
      },
      guides: false
    })
    // DOCS: doc-7f2c254224fc4908 doc-99b0513458edff76
    .createGuides({
      axes: {
        x: {
          ticksAndLabels: {
            values: [
              788918400000,
              946684800000,
              1104537600000,
              1262304000000,
              1420070400000,
              1577836800000
            ],
            ticks: { length: 5 },
            labels: { fontSize: 10, offset: 7, rotation: -Math.PI / 2 }
          },
          title: { text: "date", fontSize: 11, fontWeight: "bold", offset: 40 }
        },
        y: {
          ticksAndLabels: {
            values: [0, 10, 20, 30, 40],
            ticks: { length: 5 },
            labels: { fontSize: 10, offset: 7 }
          },
          title: {
            text: "Unemployment Rate (%)",
            fontSize: 11,
            fontWeight: "bold",
            offset: 28
          }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } }
    })
    // DOCS: doc-0a1e48878a814143
    .createTitle({
      text: "Unemployment rate aged 16-17",
      offset: -3,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({
      align: "left",
      subtitleStyle: { fontStyle: "italic", fontSize: 10 }
    });
}