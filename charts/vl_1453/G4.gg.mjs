// DOCS: doc-bedf05337affd6f4, doc-8289a1669d636313, doc-fa74f8dc4aeb7499
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 809,
      height: 442,
      margin: { left: 141, top: 5, right: 168, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "intensityNum",
      as: "intensity_num",
      expression: { op: "toNumber", operand: { field: "intensity" } }
    })
    .createBarPlot({
      x: { field: "intensity_num", aggregate: "sum" },
      y: { field: "marginal_region", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 1600] })
    .editYScale({
      domain: [
        "North Scotland",
        "South Scotland",
        "Merseyside and North Wales",
        "South Wales",
        "East Midlands",
        "London",
        "North West England",
        "South East England",
        "South West England"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .encodeColor({ field: "marginal_region", layout: "overlay" })
    .editColorScale({
      domain: [
        "East Midlands",
        "London",
        "Merseyside and North Wales",
        "North Scotland",
        "North West England",
        "South East England",
        "South Scotland",
        "South Wales",
        "South West England"
      ],
      palette: "tableau20"
    })
    .encodeBarWidth({ band: 1 })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: { count: 9, labels: { offset: 7, fontSize: 10 } },
        title: { text: "Total intensity", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: {},
        ticksAndLabels: { labels: { offset: 7, fontSize: 10 } },
        title: false
      }
    })
    .createGrid({ horizontal: false, vertical: { color: "#ddd", lineWidth: 1 } })
    .createLegend({
      title: "marginal_region",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    });
}
