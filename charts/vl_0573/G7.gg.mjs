import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-76573a465e2b6a33
    .createCanvas({ width: 478, height: 413, margin: { left: 53, top: 41, right: 75, bottom: 22 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    .createData({ values: data })
    .filterData({ id: "sourceFiltered", field: "Type", predicate: { op: "neq", value: "Revenues" } })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createComputedData({ id: "typedData", as: "sourceYear", expression: { op: "parseTime", operand: { field: "Year" } } }).createLineMark({id: "linePlot"}).encodeX({field: "sourceYear", fieldType: "temporal", scale: {id: "x", domain: [-252460800000, 1640995200000]}}).encodeY({field: "sourceValue", scale: {id: "y", domain: [0, 7000]}}).createXAxis({coordinate: "main", ticksAndLabels: {values: [-157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: {color: "#888", length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 0}}, title: false}).createYAxis({coordinate: "main", ticksAndLabels: {values: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000], ticks: {color: "#888", length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ",.0f", offset: 6.5, alongOffset: 0.890625}}, title: {text: "Billions of USD", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 40.4462890625, alongOffset: 0.5}}).editXAxisLine({color: "#888"}).editYAxisLine({color: "#888"})
    .encodeColor({ field: "Type", scale: { domain: ["Outlays"], range: ["#ff0303"] } })
    .editLineMark({ curve: "monotone-steffen" })
    .filterData({ id: "hoverEmpty", field: "Year", noneOf: ["1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"] })
    // DOCS: doc-0c53e96a226e8a16
    .createScatterPlot({
      x: { field: "sourceYear", fieldType: "temporal", scale: { id: "x", domain: [-252460800000, 1640995200000] } },
      y: { field: "sourceValue", scale: { id: "y", domain: [0, 7000] } },
      guides: false
    })
    .encodeStroke({ field: "Type", scale: { domain: ["Outlays"], range: ["#ff0303"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createSummaryData({ id: "ruleYears", source: "typedData", aggregates: [{ op: "sum", field: "sourceValue", as: "Outlays" }] })
    .editSummaryData({ target: "ruleYears", groupBy: ["sourceYear"] })
    .createRuleMark({ data: "ruleYears", strokeWidth: 1, opacity: 0 })
    .encodeX({ field: "sourceYear", fieldType: "temporal", scale: { id: "x", domain: [-252460800000, 1640995200000] } })
    .editRuleMark({ stroke: "black" })
    // DOCS: doc-48c72317a1a99e17
    .createGrid({
      vertical: { values: [-157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], color: "rgba(221,221,221,0.2)", alongOffset: 0.5 },
      horizontal: { values: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000], color: "rgba(221,221,221,0.2)", alongOffset: 0.5 }
    })
    // DOCS: doc-5d1932fc53b5becc
    .createLegend({ target: "scatterPlot", labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" }, symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5, opacity: 0.7 }] } })
    .editLegend({ title: false })
    .createTitle({ text: "US Government Revenues vs Outlays", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Source: CBO", subtitleStyle: { fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "normal", color: "rgb(0, 0, 0)" }, gap: 2.8125 })
    .editTitle({ align: "left", alongOffset: -47.0244140625 });
}