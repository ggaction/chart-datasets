// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

const X_TICKS = [
  1072915200000, 1136073600000, 1199145600000, 1262304000000,
  1325376000000, 1388534400000, 1451606400000, 1514764800000, 1577836800000
];
const Y_TICKS = [-2, -1, 0, 1, 2, 3, 4, 5, 6];

export function buildChart() {
  return chart()
    .createCanvas({ width: 344, height: 565, margin: { left: 39, top: 40, right: 5, bottom: 225 } })
    .createData({ id: "cpi", values: data })
    .createComputedData({ id: "cpiNum", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createSortedData({
      id: "cpiSorted", source: "cpiNum",
      sortBy: [{ field: "series", order: "descending" }]
    })
    .createBarPlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "ValueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1059512772413, 1620010427586], nice: false })
    .editYScale({ domain: [-2, 6], nice: false })
    .encodeBarWidth({ pixels: 3 })
    .encodeColor({ field: "series", layout: "diverging" })
    .editColorScale({
      domain: ["AlcoholTobacco", "ClothingFootwear", "Communication", "Education", "Food", "FurnitureHousehold", "Health", "HousingHouseService", "Misc", "RecreationCulture", "RestaurantsHotels", "Transport"],
      range: ["rgb(0, 0, 255)", "rgb(20, 20, 255)", "rgb(40, 40, 255)", "rgb(60, 60, 255)", "rgb(80, 80, 255)", "rgb(100, 100, 255)", "rgb(120, 120, 255)", "rgb(140, 140, 255)", "rgb(160, 160, 255)", "rgb(180, 180, 255)", "rgb(200, 200, 255)", "rgb(200, 200, 255)"]
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: X_TICKS,
        ticks: {},
        labels: { fontSize: 10, offset: 7, flush: true }
      },
      title: { text: "Date", fontSize: 11, offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Value", fontSize: 11, offset: 27, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: "%Y", color: "#000" } },
      title: { fontWeight: 700, color: "#000" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { labelMap: [{ value: -2, label: "\u22122" }, { value: -1, label: "\u22121" }], color: "#000" } },
      title: { fontWeight: 700, color: "#000" }
    })
    .createGrid({
      horizontal: { values: Y_TICKS },
      vertical: { values: X_TICKS }
    })
    .editGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"], position: "bottom", columns: 2,
        title: "series", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 },
        symbol: { layers: [{ type: "swatch", width: 10, height: 10, stroke: "transparent", strokeWidth: 0 }] }
      }
    })
    .createTitle({ text: "CPI - sources of inflation", alongOffset: -33.4, titleStyle: { fontSize: 13, fontWeight: 700, color: "#000" } })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#000" } })
    .editTitle({ subtitle: "Contributions to CPI all items by sub series", gap: 1, offset: -4 });
}