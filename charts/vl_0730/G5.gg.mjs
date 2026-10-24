import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-cffb363a4b862ced
    .createCanvas({ width: 626, height: 391, margin: { left: 39, top: 69, right: 87, bottom: 22 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    // DOCS: doc-6236790019770315
    .createData({ values: data })
    .createComputedData({ id: "numeric", as: "sourceValue", expression: { op: "toNumber", operand: { field: "OutlayRevenue" } } })
    .createComputedData({ id: "timeTyped", as: "sourceTime", expression: { op: "parseTime", operand: { field: "Year" } } })
    .createComputedData({ id: "firstPivot", as: "Outlays", expression: { op: "if", condition: { op: "eq", left: { field: "Category" }, right: { constant: "Outlays" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    .createComputedData({ id: "typedData", as: "Revenues", expression: { op: "if", condition: { op: "eq", left: { field: "Category" }, right: { constant: "Revenues" } }, then: { field: "sourceValue" }, else: { constant: 0 } } })
    // DOCS: doc-76573a465e2b6a33
    .createLinePlot({
      x: { field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [-252460800000, 1640995200000] } },
      y: { field: "sourceValue", scale: { id: "y", domain: [0, 35] } },
      guides: false
    }).createAxes({
      x: {
        ticksAndLabels: {
          values: [-157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { color: "#888", length: 5, alongOffset: 0.5 },
          labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true }
        },
        title: false
      },
      y: {
        ticksAndLabels: {
          values: [0, 5, 10, 15, 20, 25, 30, 35],
          ticks: { color: "#888", length: 5, alongOffset: 0.5 },
          labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625, labelMap: [{ value: 0, label: "0" }, { value: 5, label: "5" }, { value: 10, label: "10" }, { value: 15, label: "15" }, { value: 20, label: "20" }, { value: 25, label: "25" }, { value: 30, label: "30" }, { value: 35, label: "35" }] }
        },
        title: { text: "Percentage of GDP", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 26.544921875, alongOffset: 0.5 }
      }
    })
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .encodeColor({ field: "Category", scale: { domain: ["Outlays", "Revenues"], range: ["#ff0303", "#880000"] } })
    .editLineMark({ strokeWidth: 2, lineCap: "butt", lineJoin: "miter" })
    .editLineMark({ curve: "monotone-steffen" })
    .filterData({ id: "hoverEmpty", field: "Year", noneOf: ["1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969", "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"] })
    .createScatterPlot({
      x: { field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [-252460800000, 1640995200000] } },
      y: { field: "sourceValue", scale: { id: "y", domain: [0, 35] } },
      guides: false
    })
    .encodeStroke({ field: "Category", scale: { domain: ["Outlays", "Revenues"], range: ["#ff0303", "#880000"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createSummaryData({ id: "pivotTimes", source: "typedData", aggregates: [{ op: "sum", field: "Outlays", as: "Outlays" }, { op: "sum", field: "Revenues", as: "Revenues" }] })
    .editSummaryData({ target: "pivotTimes", groupBy: ["sourceTime"] })
    .createRuleMark({ data: "pivotTimes", strokeWidth: 1, opacity: 0 })
    .encodeX({ field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [-252460800000, 1640995200000] } })
    .editRuleMark({ stroke: "black" })
    .createGrid({ horizontal: { color: "#ddd", values: [0, 5, 10, 15, 20, 25, 30, 35], alongOffset: 0.5 }, vertical: { color: "rgba(221,221,221,0)", values: [-157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], alongOffset: 0.5 } })
    .createLegend({ target: "scatterPlot", labels: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black" }, symbol: { layers: [{ type: "point", size: 5, fill: "transparent", strokeWidth: 1.5, opacity: 0.7 }] } })
    .editLegend({ title: false })
    .createTitle({ text: "USA: Surplus or Shortfall?", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Revenues and Outlays held by the public since 1962, as a share of GDP\nSources: Congressional Budget Office and Office of Management and Budget\n", subtitleStyle: { fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, color: "black", fontStyle: "normal" }, gap: 2.8125 })
    .editTitle({ align: "left", alongOffset: -33.123046875 })
    .editTitle({ maxWidth: 500, lineHeight: 14 });
}