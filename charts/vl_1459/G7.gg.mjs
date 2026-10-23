// DOCS: doc-2b2e3149e57e859d, doc-8c1e8e710e83918a, doc-f84a6354ad5070da
import { chart } from "ggaction";
import data from "./data.json";
import centersData from "./centers-data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 400, height: 300 },
      margin: { left: 39, top: 10, right: 75, bottom: 37 },
      plotBorder: { color: "#ddd", lineWidth: 1 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1459-x-edge-source-font-widths",
        measurements: [
          { text: "−140", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.53125 },
          { text: "−40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.96875 }
        ]
      }
    })
    .createData({ values: data })
    .createScatterPlot({ x: "longitude", y: "latitude", guides: false })
    .editXScale({ domain: [-140, -40] })
    .editYScale({ domain: [20, 60] })
    .encodeColor({ field: "country", scale: { domain: ["Canada", "USA"], range: ["red", "blue"] } })
    .encodePointRadius({ value: 2.23606797749979 })
    .editPointMark({ stroke: false, opacity: 0.6 })
    .createAxes({
      x: {
        ticksAndLabels: {
          values: [-140, -130, -120, -110, -100, -90, -80, -70, -60, -50, -40],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: {
            fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true,
            labelMap: [
              { value: -140, label: "−140" }, { value: -130, label: "−130" },
              { value: -120, label: "−120" }, { value: -110, label: "−110" },
              { value: -100, label: "−100" }, { value: -90, label: "−90" },
              { value: -80, label: "−80" }, { value: -70, label: "−70" },
              { value: -60, label: "−60" }, { value: -50, label: "−50" },
              { value: -40, label: "−40" }
            ]
          }
        },
        title: { text: "longitude", fontSize: 11, offset: 27.578125, alongOffset: 0.5 }
      },
      y: {
        ticksAndLabels: {
          values: [20, 25, 30, 35, 40, 45, 50, 55, 60],
          ticks: { length: 5, alongOffset: 0.5 },
          labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
        },
        title: { text: "latitude", fontSize: 11, offset: 26.544921875, alongOffset: 0.5, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "#000" })
    .editXAxisTitle({ fontWeight: 700, color: "#000" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "#000" })
    .editYAxisTitle({ fontWeight: 700, color: "#000" })
    .createGrid({ vertical: { color: "#ddd" }, horizontal: { color: "#ddd" } })
    .createLegend({
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 },
      symbol: { layers: [{ type: "point", size: 5, opacity: 0.6 }] }
    })
    .editLegend({
      titleStyle: { fontWeight: 700, color: "#000" },
      labels: { color: "#000" }
    })
    .createData({ id: "centers", values: centersData })
    .createScatterPlot({
      id: "centers",
      x: { field: "longitude", scale: { id: "x" } },
      y: { field: "latitude", scale: { id: "y" } }
    })
    .encodePointRadius({ value: 5.70087712549569 })
    .editPointMark({ fill: "black", stroke: false, opacity: 0.7 });
}