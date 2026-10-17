// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-e5ab8d04c2bbca16, doc-d9e3b1b7add0d2c6, doc-99b0513458edff76
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 316,
      height: 342,
      margin: { left: 24, top: 40, right: 12, bottom: 22 }
    })
    .createData({ id: "gdp", values: data })
    .createLinePlot({
      x: {
        field: "Year",
        fieldType: "temporal"
      },
      y: {
        field: "GDP growth (annual %)",
        fieldType: "quantitative"
      },
      guides: false
    })
    .encodeColor({
      field: "Country Name",
      fieldType: "nominal"
    })
    .encodeGroup({ field: "Country Name" })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [-283996800000, 1609459200000] })
    .editYScale({ domain: [-6, 10], zero: false })
    .editColorScale({ palette: "set1" })
    .createXAxis({
      title: false,
      ticksAndLabels: {
        count: 7,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      }
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisTicks({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
      title: false,
      ticksAndLabels: {
        count: 9,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicks({ color: "#888", lineWidth: 1 })
    .editYAxisLabels({ color: "black" })
    .createLegend({
      title: false,
      position: "top-right",
      labels: { fontSize: 10 }
    })
    .editLegendLabels({ fontFamily: "sans-serif", color: "black" })
    .createTitle({
      text: "GDP per capita growth (annual %)",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      subtitle: "Annual percentage changes in Scandinavian countries",
      align: "left",
      offset: -11
    });
}
