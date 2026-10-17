// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1 doc-333a87e52954985d doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

const YEAR_TICKS = [
  0, 157788000000, 315532800000, 473385600000, 631152000000,
  788918400000, 946684800000, 1104537600000, 1262304000000,
  1420070400000, 1577836800000
];

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
      alongOffset: -18.123046875,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({
      subtitle: "Percentage difference in median earnings of men and women (full-time employees), source OECD",
      offset: -7,
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "temporal" },
      y: { field: "Value" },
      guides: false
    })
    .encodeColor({
      field: "LOCATION",
      fieldType: "nominal"
    })
    .editXScale({ domain: [-27749296551, 1637208496551], nice: false, range: [24, 324] })
    .editYScale({ domain: [0, 50], zero: true })
    .editColorScale({ domain: ["GBR", "USA"], range: ["#033542", "#78969d"] })
    .layoutSeries({ mode: "overlay" })
    .encodeBarWidth({ pixels: 5 })
    .editBarMark({ opacity: 0.9 })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: YEAR_TICKS,
          ticks: { length: 0 },
          labels: { fontSize: 10, offset: 5, rotation: Math.PI / 4 }
        },
        title: false
      },
      y: {
        ticksAndLabels: {
          labels: { fontSize: 10, offset: 7 }
        },
        title: false
      }
    })
    .createLegend({
      title: "Country",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" }
    })
    .editLegendBlock({ target: "barPlot", channel: "color", symbol: { opacity: 0.9 } });
}
