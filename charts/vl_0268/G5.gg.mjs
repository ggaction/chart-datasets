// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-1bc17bd9cf295bea, doc-8ffad8d37b5ae4ff
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 368,
      height: 364,
      margin: { left: 53, top: 27, right: 115, bottom: 37 }
    })
    .createData({ values: data }).createComputedData({ id: "yearMs", as: "yearMs", expression: { op: "parseTime", operand: { field: "year" }, format: "%Y-%m-%d" } })
    .createComputedData({
      id: "net_generation_number",
      as: "net_generation_num",
      expression: { op: "toNumber", operand: { field: "net_generation" } }
    })
    .createSortedData({ id: "source-order-sorted", sortBy: [{ field: "source", order: "descending" }] })
    .createAreaPlot({
      x: { field: "yearMs", fieldType: "temporal" },
      y: { field: "net_generation_num" },
      guides: false
    })
    .editXScale({ domain: [978307200000, 1483228800000], nice: false })
    .editYScale({ domain: [0, 1], nice: false })
    .encodeGroup({ field: "source" })
    .encodeY({ field: "net_generation_num", stack: "normalize" })
    .encodeColor({ field: "source" })
    .editColorScale({ domain: ["Fossil Fuels", "Nuclear Energy", "Renewables"], palette: "tableau10" })
    .editAreaMark({ opacity: 1 })
    .createTitle({
      text: "Iowa's renewable energy boom",
      offset: -4,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({
      align: "center"
    })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 5,
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        ticks: { color: "#888", length: 5 },
        labels: { fontSize: 10, offset: 7, format: ".0%" }
      },
      title: {
        text: "Share of net generation",
        fontSize: 11,
        fontWeight: 700,
        offset: 43
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
      title: "Electricity source",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    });
}