// DOCS: doc-dfae58344d5a524e, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 249, margin: { left: 76, top: 27, right: 81, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "yearNum", as: "year_num", expression: { op: "toNumber", operand: { field: "year" } } })
    .createComputedData({ id: "popNum", as: "pop_num", expression: { op: "toNumber", operand: { field: "pop" } } })
    .filterData({ id: "periodRows", field: "year_num", range: { min: 1952, max: 2017 } })
    .createTimeUnitData({ id: "yearBuckets", field: "year_num", unit: "year" })
    .createSummaryData({ id: "regionPop", groupBy: ["region", "year_num_year"], aggregates: [{ op: "sum", field: "pop_num", as: "total_pop" }] })
    .createSortedData({ id: "stackOrder", sortBy: [{ field: "region", order: "descending" }] })
    .createStackData({ category: "year_num_year", group: "region", value: "total_pop" })
    .createTitle({ text: "Total population by region, 1952 to 2017", offset: -13, titleStyle: { fontSize: 13, fontWeight: 700 } })
    .createBarPlot({
      x: {
        field: "year_num_year",
        fieldType: "ordinal",
        scale: {
          domain: [-568080000000, -410227200000, -252460800000, -94694400000, 63072000000, 220924800000, 378691200000, 536457600000, 694224000000, 852076800000, 1009843200000, 1167609600000, 1325376000000, 1483228800000],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      y: { lower: "total_pop_start", upper: "total_pop_end", scale: { domain: [0, 8000000000] } },
      guides: false
    })
    .encodeColor({ field: "region", scale: { domain: ["Africa", "Americas", "Asia", "Europe"], range: ["#08C5ED", "#80D322", "#FF6973", "#FFDC25"] } })
    .editBarMark({ opacity: 0.8 })
    .encodeBarWidth({ band: 1 })
    .applyTextMetrics({profile:{"schemaVersion":1,"id":"source-0209-y-label-widths","measurements":[{"text":"0","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":5.5625},{"text":"2,000,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":63.953125},{"text":"4,000,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":63.953125},{"text":"6,000,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":63.953125},{"text":"8,000,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":63.953125}]}})
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [-568080000000, -410227200000, -252460800000, -94694400000, 63072000000, 220924800000, 378691200000, 536457600000, 694224000000, 852076800000, 1009843200000, 1167609600000, 1325376000000, 1483228800000],
          labels: { labelMap: [{"value":-568080000000,"label":"1952"},{"value":-410227200000,"label":"1957"},{"value":-252460800000,"label":"1962"},{"value":-94694400000,"label":"1967"},{"value":63072000000,"label":"1972"},{"value":220924800000,"label":"1977"},{"value":378691200000,"label":"1982"},{"value":536457600000,"label":"1987"},{"value":694224000000,"label":"1992"},{"value":852076800000,"label":"1997"},{"value":1009843200000,"label":"2002"},{"value":1167609600000,"label":"2007"},{"value":1325376000000,"label":"2012"},{"value":1483228800000,"label":"2017"}], fontSize: 10, offset: 7 }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: { values: [0, 2000000000, 4000000000, 6000000000, 8000000000], labels: { format: ",.0f", fontSize: 10, offset: 7 } },
        title: false
      }
    })
        .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false })
    .createLegend({ position: "right", title: false, labels: { fontSize: 10 } })
    .editLegendSymbols({ symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] } })
    .editTitle({ align: "center" });
}
