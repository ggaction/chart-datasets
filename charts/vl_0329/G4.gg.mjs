import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-76573a465e2b6a33, doc-071c93dff3a5ea2e, doc-dfae58344d5a524e
export function buildChart() {
  return chart()
    .createCanvas({
      width: 447,
      height: 370,
      margin: { left: 24, top: 40, right: 123, bottom: 30 }
    })
    .createData({ values: data })
    .createTitle({
      text: "Gender Pay Gap",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "Percentage difference in median earnings of men and women (full-time employees), source OECD",
      subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black" },
      gap: 1
    })
    .editTitle({ offset: -13, alongOffset: -14 })
    .createLinePlot({
      x: {
        field: "Year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "Value",
        fieldType: "quantitative"
      },
      guides: false
    })
    .encodeColor({
      field: "LOCATION",
      fieldType: "nominal"
    })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ type: "time", domain: [0, 1609459200000] })
    .editYScale({ domain: [0, 50] })
    .editColorScale({
      type: "ordinal",
      domain: ["GBR", "USA"],
      range: ["#033542", "#78969d"]
    })
    .createXAxis({
      title: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        values: [
          0, 157680000000, 315532800000, 473385600000, 631152000000,
          788918400000, 946684800000, 1104537600000, 1262304000000,
          1420070400000, 1577836800000
        ],
        labels: {
          fontSize: 10,
          offset: 5,
          rotation: Math.PI / 4
        }
      }
    })
    .createYAxis({
      title: false,
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
        labels: { fontSize: 10, offset: 7 }
      }
    })
    .createLegend({
      position: "right",
      title: "Country"
    })
    .editLegend({
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    });
}