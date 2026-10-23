import { chart } from "ggaction";
import data from "./data.json";
import lineData from "./line-data.json";
import textData from "./text-data.json";

// DOCS: doc-8a4f6f06e0d37d5e
export function buildChart() {
  return chart()
    .createCanvas({
      width: 245,
      height: 302,
      margin: { left: 39, right: 6, top: 65, bottom: 37 }
    })
    .editCanvas({
      plotBorder: { underlay: true }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0743-flush-endpoint-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 }
        ]
      }
    })
    .createTitle({
      text: "Regressing WGI Score on Religiosity",
      titleStyle: { fontSize: 12, fontWeight: 700, color: "black" },
      alongOffset: -33.123046875
    })
    .editTitle({
      offset: -10.1875
    })
    .editTitle({
      subtitle:
        "Religiosity measured as percentage of the\npopulation who consider religion important\nSources: CAF and Wikipedia",
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.578125
    })
    .createData({
      values: lineData
    })
    .createLinePlot({
      x: { field: "Religiosity" },
      y: { field: "CAF" },
      guides: false
    })
    .encodeX({
      field: "Religiosity",
      scale: { domain: [0, 100] }
    })
    .encodeY({
      field: "CAF",
      scale: { domain: [0, 70] }
    })
    .editLineMark({
      stroke: "#2c2a2e",
      strokeWidth: 2,
      clip: true
    })
    .createData({
      id: "countries",
      values: data
    })
    .createComputedData({
      id: "numericX",
      as: "sourceReligiosity",
      expression: { op: "toNumber", operand: { field: "Religiosity" } }
    })
    .createComputedData({
      id: "numericY",
      as: "sourceCAF",
      expression: { op: "toNumber", operand: { field: "CAF" } }
    })
    .createScatterPlot({
      x: { field: "sourceReligiosity", scale: { id: "x" } },
      y: { field: "sourceCAF", scale: { id: "y" } },
      guides: false
    })
    .encodePointRadius({
      value: 2.7386127875258306
    })
    .editPointMark({
      fill: "#865fa5",
      stroke: false,
      opacity: 0.9
    })
    .createData({
      id: "annotation",
      values: textData
    })
    .createTextMark({
      fill: "red",
      fontSize: 12,
      align: "center"
    })
    .editTextMark({
      baseline: "middle",
      dy: 0.859375
    })
    .encodeX({
      field: "Religiosity",
      scale: { id: "x" }
    })
    .encodeY({
      field: "CAF",
      scale: { id: "y" }
    })
    .encodeText({
      field: "text"
    })
    .createAxes({
      x: {
        scale: "x",
        ticksAndLabels: {
          values: [0, 20, 40, 60, 80, 100],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: { fontSize: 10, color: "#000", offset: 5.5, alongOffset: 0.5, flush: true }
        },
        title: {
          text: "Religiosity (%)",
          fontSize: 11,
          fontWeight: 700,
          color: "#000",
          offset: 27.578125,
          alongOffset: 0.5
        },
        underlay: true
      },
      y: {
        scale: "y",
        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70],
          ticks: { length: 5, color: "#888", alongOffset: 0.5 },
          labels: { fontSize: 10, color: "#000", offset: 6.5, alongOffset: 0.890625 }
        },
        title: {
          text: "WGI overall score (out of 100)",
          fontSize: 11,
          fontWeight: 700,
          color: "#000",
          offset: 26.544921875,
          alongOffset: 0.5
        },
        underlay: true
      }
    })
    .editXAxis({
      line: { color: "#888" }
    })
    .editYAxis({
      line: { color: "#888" }
    });
}