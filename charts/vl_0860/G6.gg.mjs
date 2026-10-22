import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b9261a4b2909a353 (createLinePlot facade; guides:false defers guide creation)
// DOCS: doc-4caf8f5e4552a6b2 (facet with headers and editCompositionLayout pattern)
export function buildChart() {
  return chart()
    // DOCS: doc-0c53e96a226e8a16 (action-reference module envelope and guide vocabulary)
    .createCanvas({ plot: { width: 200, height: 200 }, margin: { left: 40, top: 104, right: 12, bottom: 56 }, plotBorder: {} })
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "numericValue", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({ x: { field: "Date", fieldType: "temporal" }, y: { field: "numericValue", scale: { zero: true, nice: { count: 10 } } }, guides: false })
    .editLineMark({ stroke: "#557A95" })
    .createXAxis({ offset: 6, ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, rotation: { value: 45, unit: "degrees" }, offset: 7.776226556913753, alongOffset: -3.3117478741648254, format: "%Y" } }, title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 40.37955474853516, alongOffset: 0.5 } })
    .createYAxis({ ticksAndLabels: { rounding: "nearest", ticks: { length: 5 }, labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 } }, title: { text: "Proportion of Online Spending", fontSize: 11, fontWeight: 700, offset: 26.544921875, alongOffset: 0.5 } }).editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editXAxisTitle({ color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .editYAxisTitle({ color: "black" })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .facet({ field: "Category", values: ["Books newspapers and stationary", "Clothing", "Flowers plants seeds fertilisers and pet foods", "Specialist food stores", "Sports equipment games and toys", "Supermarkets"], headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 15.609375 } })
    .editFacetScales({ y: "independent" })
    .editCompositionLayout({ spacing: "plot", gap: 58, topLane: "shared" })
    .editFacetHeaders({ role: "column", title: { text: "Category", fontSize: 11, fontWeight: 700, color: "black", offset: 45.421875, alongOffset: -16 } })
    .createTitle({ text: "Proportion of Spending Online", subtitle: "Retail Sales Data showing the proportion of online sales by different sectors\nSource: ONS", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" } })
    .editTitle({ subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" }, gap: 3.34375, offset: -2.953125 })
    .editTitle({ alongOffset: -34.123046875 });
}