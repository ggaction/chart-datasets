import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-8a4f6f06e0d37d5e

const X_DOMAIN = [315532800000, 1514764800000]; // 1980-01-01 .. 2018-01-01 UTC

export function buildChart() {
  return chart()
    .createCanvas({
      width: 441,
      height: 347,
      margin: { left: 33, top: 10, right: 8, bottom: 37 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "year",
        fieldType: "temporal",
        scale: { domain: X_DOMAIN, nice: false }
      },
      y: { field: "km^3", scale: { domain: [0, 6] } },
      guides: false
    })
    .editLineMark({ stroke: "dodgerblue", strokeWidth: 2 })
    .createScatterPlot({
      x: {
        field: "year",
        fieldType: "temporal",
        scale: { domain: X_DOMAIN, nice: false }
      },
      y: { field: "km^3", scale: { domain: [0, 6] } },
      guides: false
    })
    .editPointMark({ fill: "dodgerblue", opacity: 0.7 })
    .encodePointRadius({ value: 2.7386 })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [
            315532800000, 473385600000, 631180800000, 788976000000,
            946684800000, 1104537600000, 1262304000000, 1420070400000
          ],
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "year", fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif", offset: 28 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          count: 7,
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: {
          text: "Oil Production [km^3]",
          fontSize: 11,
          fontWeight: "bold",
          fontFamily: "sans-serif",
          offset: 20,
          rotation: { value: -90, unit: "degrees" }
        }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } });
}