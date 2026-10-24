import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ plot: { width: 190, height: 200 }, margin: { left: 77, top: 57, right: 6, bottom: 55 } })
    .createData({ values: data })
    .createComputedData({ id: "yearTyped", as: "epochYear", expression: { op: "parseTime", operand: { op: "concat", operands: [{ field: "year" }, { constant: "-01-01" }] }, format: "%Y-%m-%d" } })
    .createComputedData({ id: "popTyped", as: "numericPop", expression: { op: "toNumber", operand: { field: "pop" } } })
    .createSummaryData({ id: "populationSummary", groupBy: ["region", "epochYear"], aggregates: [{ op: "sum", field: "numericPop", as: "total_pop" }] }).createBarMark({id: "barPlot"}).encodeX({field: "region", fieldType: "nominal", scale: {domain: ["Africa", "Americas", "Asia", "Europe"], paddingInner: 0.1, paddingOuter: 0.05}}).encodeY({field: "total_pop", aggregate: "mean", scale: {domain: [0, 4500000000], zero: true}}).createXAxis({
      line: {},
      ticksAndLabels: { ticks: { color: "#334155", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "#334155", rotation: 0, offset: 8.5, alongOffset: 0 } },
      title: false
    }).createYAxis({
      line: {},
      ticksAndLabels: { values: [0, 1000000000, 2000000000, 3000000000, 4000000000], ticks: { color: "#334155", length: 5, alongOffset: 0.5 }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "#334155", format: ",.0f", offset: 7.5, alongOffset: 0 } },
      title: false
    }).editXAxis({
      line: { color: "#888" }
    }).editYAxis({
      line: { color: "#888" }
    }).editXAxisTicks({
      color: "#888"
    }).editYAxisTicks({
      color: "#888"
    }).editXAxisLabels({
      color: "black",
      rotation: { value: 270, unit: "degrees" },
      alongOffset: 0.390625
    }).editYAxisLabels({
      color: "black",
      alongOffset: 0.890625
    })
    // DOCS: doc-2ba6dfbdbb611825 — bar width encoding on the bar mark
    .encodeBarWidth({ band: 1 })
    .editBarMark({ opacity: 0.8, stroke: false }).encodeColor({ field: "region" }).editColorScale({ domain: ["Africa", "Americas", "Asia", "Europe"], range: ["#08C5ED", "#80D322", "#FF6973", "#FFDC25"] })
    .facet({
      field: "epochYear",
      guides: { axes: { x: "each", y: "outer" }, legend: false },
      headers: {
        fontSize: 10,
        fontWeight: 400,
        color: "black",
        offset: 10.609375,
        labelMap: [
          { value: -568080000000, label: "1952" },
          { value: -410227200000, label: "1957" },
          { value: -252460800000, label: "1962" },
          { value: -94694400000, label: "1967" },
          { value: 63072000000, label: "1972" },
          { value: 220924800000, label: "1977" },
          { value: 378691200000, label: "1982" },
          { value: 536457600000, label: "1987" },
          { value: 694224000000, label: "1992" },
          { value: 852076800000, label: "1997" },
          { value: 1009843200000, label: "2002" },
          { value: 1167609600000, label: "2007" },
          { value: 1325376000000, label: "2012" },
          { value: 1483228800000, label: "2017" }
        ],
        column: { title: { text: "year (year)", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 40.421875 } }
      }
    })
    // DOCS: doc-b2d0eb8c5f214d93 — default legend spacing retained; only supplied composition edits applied
    .editCompositionLayout({ spacing: "plot", gap: 22, topLane: "shared" });
}
