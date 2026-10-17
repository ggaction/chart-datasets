// DOCS: doc-5d974e8fdcb4f774 doc-9f1e9ae3b82a4178
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 504, height: 362, margin: { left: 29, top: 40, right: 175, bottom: 22 } })
    .createData({ id: "fish", values: data })
    .createComputedData({
      id: "fishDate",
      as: "Date",
      expression: { op: "toNumber", operand: { field: "\uFEFFDate" } }
    })
    .createComputedData({ id: "fishNum", as: "ValueN", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createSortedData({
      id: "sortedByTypeDesc",
      sortBy: [{ field: "Type", order: "descending" }]
    })
    .createStackData({
      category: "Date",
      group: "Type",
      value: "ValueN"
    })
    .createAreaPlot({
      x: { field: "Date", fieldType: "temporal", temporalUnit: "year" },
      y: { lower: "ValueN_start", upper: "ValueN_end" },
      guides: false
    })
    .editXScale({ domain: [-631152000000, 1514764800000], nice: false })
    .editYScale({ target: "areaPlot", domain: [0, 200], nice: false })
    .encodeGroup({ field: "Type" })
    .encodeColor({ field: "Type", layout: "overlay" })
    .editColorScale({
      domain: ["Aquaculture - inland waters", "Aquaculture - marine waters", "Capture fisheries - inland waters", "Capture fisheries - marine waters"],
      range: ["rgb(189, 229, 181)", "rgb(105, 197, 190)", "rgb(44, 158, 192)", "rgb(33, 99, 170)"]
    })
    .editAreaMark({ opacity: 1 })
    .createAxes({
      x: { ticksAndLabels: { labels: { fontSize: 10, offset: 7, format: "%Y" } }, title: false },
      y: { ticksAndLabels: { labels: { fontSize: 10, offset: 7 } }, title: false }
    })
    .createLegend({
      title: false,
      labels: { fontSize: 10, color: "black" },
      symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] }
    })
    .createTitle({
      text: "Fish caught - by source",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      alongOffset: -23.6845703125
    })
    .editTitle({ offset: -13, gap: 3 })
    .editTitle({
      subtitle: "World fisheries and aquaculture production, tonnes (m). Source: FAO",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editLegendLayout({ position: "top-left" })
    .editCanvas({ width: 334, margin: { right: 5 } });
}
