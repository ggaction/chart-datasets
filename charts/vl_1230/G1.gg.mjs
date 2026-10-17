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
        fieldType: "temporal",
        scale: { domain: [-283996800000, 1609459200000] }
      },
      y: {
        field: "GDP growth (annual %)",
        fieldType: "quantitative",
        scale: { domain: [-6, 10], zero: false }
      },
      guides: false
    })
    .encodeColor({
      field: "Country Name",
      fieldType: "nominal",
      scale: { palette: "set1" }
    })
    .encodeGroup({ field: "Country Name" })
    .editLineMark({ strokeWidth: 2 })
    .createGuides({
      grid: false,
      axes: {
        x: {
          line: { color: "#888", lineWidth: 1 },
          title: false,
          ticksAndLabels: {
            count: 7,
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
          }
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          title: false,
          ticksAndLabels: {
            count: 9,
            ticks: { length: 5, color: "#888", lineWidth: 1 },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, color: "black" }
          }
        }
      },
      legend: {
        title: false,
        position: "top-right",
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
      }
    })
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
