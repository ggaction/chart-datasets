// DOCS: doc-5d1932fc53b5becc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 335,
      height: 390,
      margin: { left: 24, top: 39, right: 11, bottom: 51 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "Gross savings (% of GDP)", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Country Name", fieldType: "nominal", palette: "set1" })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [0, 1609459200000] })
    .editYScale({ domain: [0, 80] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10 }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 10, 20, 30, 40, 50, 60, 70, 80],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createLegend({
      position: "bottom",
      title: false,
      labels: { fontSize: 10 }
    })
    .createTitle({
      text: "Gross Savings (% of GDP)",
      offset: -10,
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "in Canada, Saudi Arabia and Senegal",
      subtitleStyle: { fontSize: 9, fontStyle: "italic", color: "black" }
    });
}