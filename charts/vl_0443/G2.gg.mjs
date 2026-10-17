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
      x: { field: "Date", fieldType: "temporal", scale: { domain: [1059512772413, 1620010427586], nice: false } },
      y: { field: "ValueNum", fieldType: "quantitative", scale: { domain: [-2, 6], nice: false } },
      guides: false
    })
    .encodeBarWidth({ pixels: 3 })
    .encodeColor({
      field: "series", layout: "diverging",
      scale: {
        domain: ["AlcoholTobacco", "ClothingFootwear", "Communication", "Education", "Food", "FurnitureHousehold", "Health", "HousingHouseService", "Misc", "RecreationCulture", "RestaurantsHotels", "Transport"],
        range: ["rgb(0, 0, 255)", "rgb(20, 20, 255)", "rgb(40, 40, 255)", "rgb(60, 60, 255)", "rgb(80, 80, 255)", "rgb(100, 100, 255)", "rgb(120, 120, 255)", "rgb(140, 140, 255)", "rgb(160, 160, 255)", "rgb(180, 180, 255)", "rgb(200, 200, 255)", "rgb(200, 200, 255)"]
      }
    })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: X_TICKS,
          ticks: { color: "#888" },
          labels: { fontSize: 10, offset: 7, format: "%Y", flush: true, color: "#000" }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 28, color: "#000" }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: Y_TICKS,
          ticks: { color: "#888" },
          labels: { fontSize: 10, offset: 7, labelMap: [{ value: -2, label: "\u22122" }, { value: -1, label: "\u22121" }], color: "#000" }
        },
        title: { text: "Value", fontSize: 11, fontWeight: 700, offset: 27, rotation: { value: -90, unit: "degrees" }, color: "#000" }
      }
    })
    .createGuides({
      axes: false,
      grid: {
        horizontal: { values: Y_TICKS, color: "#ddd" },
        vertical: { values: X_TICKS, color: "#ddd" }
      },
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