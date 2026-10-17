// DOCS: doc-a743281cbd97a819
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 666, height: 414, margin: { left: 161, top: 77, right: 5, bottom: 37 } })
    .createData({ id: "raw", values: data })
    .createComputedData({ id: "num", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createSortedData({ id: "sorted", source: "num", sortBy: [{ field: "Type3", order: "ascending" }] })
    .createStackData({ category: "Type2", group: "Type3", value: "ValueNum" })
    .createBarPlot({
      x: { lower: "ValueNum_start", upper: "ValueNum_end", fieldType: "quantitative" },
      y: { field: "Type2", fieldType: "nominal" },
      guides: false
    })
    .encodeColor({ field: "Type3", fieldType: "nominal" })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 35000] })
    .editYScale({ domain: ["Technical Barriers to Trade (TBT)", "Sanitary and Phytosanitary (SPS)", "Anti-Dumping", "Tariff-rate quotas", "Export Subsidies", "Special Safeguards", "State Trading Enterprises", "Countervailing", "Quatitative Restrictions", "Safeguards"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editColorScale({ palette: { name: "tableau10", count: 2 } })
    .createXAxis({
      line: {},
      ticksAndLabels: { values: [0, 4000, 8000, 12000, 16000, 20000, 24000, 28000, 32000], labels: { fontSize: 10, offset: 7, flush: true } },
      title: { text: "Number of Measures", fontSize: 11, offset: 28 }
    })
    .editXAxisTitle({ fontWeight: "bold" })
    .createYAxis({ line: {}, ticksAndLabels: { labels: { fontSize: 10, offset: 7 } }, title: false })
    .createGrid({ horizontal: false, vertical: true })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLegend({ title: false, labels: { fontSize: 10 }, at: { x: -99, y: -31 } })
    .editLegendLayout({ columns: 13 })
    .createTitle({ text: "Barriers to trade", titleStyle: { fontSize: 13 }, alongOffset: -156 })
    .editTitle({ titleStyle: { fontWeight: "bold" } })
    .editTitle({ subtitle: "Data as of year-end 2021. Source: WTO", subtitleStyle: { fontSize: 10, fontStyle: "italic" }, offset: -13 });
}