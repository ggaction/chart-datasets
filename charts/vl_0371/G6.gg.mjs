import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e

const xDomain = [1601769600000, 1634428800000];
const xTicks = [1609459200000, 1617235200000, 1625097600000, 1633046400000];
const cats = ["0-9", "10-49", "100-249", "250+", "50-99", "All firms"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 426, height: 401, margin: { left: 48, top: 64, right: 98, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "numericValue", as: "valueToNum", expression: { op: "toNumber", operand: { field: "value" } } })
    .createLinePlot({
      x: { field: "dateUTC", fieldType: "temporal" },
      y: { field: "valueToNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeGroup({ field: "employees" })
    .encodeColor({ field: "employees" })
    .editXScale({ domain: xDomain })
    .editYScale({ domain: [0, 0.16] })
    .editLineMark({ strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "dateUTC", fieldType: "temporal" },
      y: { field: "valueToNum", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "employees" })
    .editColorScale({ palette: "set1", domain: cats })
    .encodePointRadius({ value: Math.sqrt(30) / 2 })
    .encodeOpacity({ value: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: xTicks,
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "dateUTC", fontSize: 11, offset: 27 }
    })
    .editXAxis({
      ticksAndLabels: {
        labels: {
          labelMap: [
            { value: 1609459200000, label: "2021" },
            { value: 1617235200000, label: "April" },
            { value: 1625097600000, label: "July" },
            { value: 1633046400000, label: "October" }
          ]
        }
      },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "value", fontSize: 11, offset: 28, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      ticksAndLabels: { labels: { format: ".0%" } },
      title: { fontWeight: 700 }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      title: "Employees:",
      columns: 1,
      position: "right"
    })
    .editLegendSymbols({ symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] } })
    .editLegendLabels({ fontSize: 10 })
    .editLegendTitle({ fontSize: 11, fontWeight: 700 })
    .editLegendBorder({ border: { color: "greenyellow", background: "white", padding: 5 } })
    .createTitle({
      text: "Back from the brink",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      alongOffset: -42
    })
    .editTitle({ gap: 1, offset: -13 })
    .editTitle({
      subtitle: "Proportion of firms deemed 'At Risk' of failure\nSource: ONS (2021), Van Reenen and Lambert (2021)\n",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    });
}