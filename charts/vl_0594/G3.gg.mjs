// DOCS: doc-8a454631b30a62cd, doc-845dd17cea410015, doc-44faa1393ec4d1d6, doc-84a15511ba9fdf6c
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 497, height: 404, margin: { left: 48, top: 67, right: 99, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "rowsUni", as: "Uni", expression: { constant: null } })
    .createComputedData({
      id: "rowsPctNum",
      as: "uni_employment_pct_num",
      expression: { op: "toNumber", operand: { field: "uni_employment_pct" } }
    })
    .createSummaryData({
      id: "ciSummary",
      groupBy: ["Confidence Numeric", "Uni2", "Uni", "uni_employment_pct"],
      aggregates: [{ field: "uni_employment_pct_num", op: "mean", as: "ci0_uni_employment_pct" }]
    })
    .createSortedData({
      id: "sortedUni",
      sortBy: [{ field: "Uni2", order: "descending" }]
    })
    .createComputedData({
      id: "stackCells",
      as: "stackCell",
      expression: {
        op: "concat",
        operands: [
          { field: "Uni2" },
          { constant: "|" },
          { field: "uni_employment_pct" }
        ]
      }
    })
    .createStackData({
      category: "Confidence Numeric",
      group: "stackCell",
      value: "ci0_uni_employment_pct"
    })
    .createBarPlot({
      x: { field: "Confidence Numeric", fieldType: "ordinal" },
      y: { lower: "ci0_uni_employment_pct_start", upper: "ci0_uni_employment_pct_end", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["0", "1", "2"], paddingInner: 0.1, paddingOuter: 0.6 })
    .editYScale({ domain: [0, 0.4] })
    .encodeColor({ field: "Uni2", scale: { palette: "tableau10", domain: ["Berkeley", "Chicago", "Columbia", "Harvard", "MIT", "Northwestern", "Princeton", "Stanford", "Yale"] } })
    .encodeBarWidth({ band: 0.8 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888", length: 5 },
        labels: {
          labelMap: [
            { value: "0", label: "Uncertain" },
            { value: "1", label: "Disagree" },
            { value: "2", label: "Agree" }
          ],
          fontSize: 10,
          offset: 7
        }
      },
      title: { text: "Response", fontSize: 11, fontWeight: 700, offset: 27 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4],
        ticks: { color: "#888", length: 5 },
        labels: { format: ".0%", fontSize: 10, offset: 7 }
      },
      title: { text: "Portion of Response", fontSize: 11, fontWeight: 700, offset: 36.0146484375 }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false })
    .createLegend({ title: false, labels: { fontSize: 10 }, symbol: { width: 10, height: 10 } })
    .createTitle({
      text: "Raising the federal minimum wage to $9 per hour would make it noticeably\nharder for low-skilled workers to find employment.",
      titleStyle: { fontSize: 12, fontWeight: 700 },
      alongOffset: -42
    })
    .editTitle({ subtitleStyle: { fontSize: 10, fontStyle: "italic" }, gap: 4, offset: -11 })
    .editTitle({ subtitle: "Source: IGN\n" });
}