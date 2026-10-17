// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1280,
      height: 339,
      margin: { left: 67, top: 22, right: 11, bottom: 17 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "deathsNumeric",
      as: "eqDeaths",
      expression: { op: "toNumber", operand: { field: "earthquakeDeaths" } }
    })
    .createSummaryData({
      id: "summary",
      groupBy: ["region", "year"],
      aggregates: [{ op: "sum", field: "eqDeaths", as: "total" }]
    })
    .createScatterPlot({ x: { field: "year", fieldType: "ordinal" }, y: { field: "region", fieldType: "nominal" }, guides: false })
    .editXScale({
      type: "point",
      domain: [
        "1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977",
        "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985",
        "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993",
        "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001",
        "2002", "2003", "2004", "2005", "2006", "2007", "2008"
      ]
    })
    .editYScale({ type: "point", domain: ["Africa", "Americas", "Asia", "Europe"] })
    .encodeColor({
      field: "region",
      fieldType: "nominal",
    })
    .encodeSize({ field: "total", fieldType: "quantitative" })
    .editColorScale({
      target: "scatterPlot",
      domain: ["Africa", "Americas", "Asia", "Europe"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2"]
    })
    .editSizeScale({
      target: "scatterPlot",
      domain: [0, 249196],
      range: [0, 1250 * Math.PI]
    })
    .encodeStroke({ value: "black" })
    .encodeOpacity({ value: 0.8 })
    .editPointMark({ strokeWidth: 1 })
    .createXAxis({
      line: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 2 }
      },
      title: false
    })
    .createYAxis({
      line: false,
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 20 }
      },
      title: false
    })
    .createHorizontalGrid({ scale: "y" })
    .editHorizontalGrid({ color: "#ddd" })
    .createTitle({
      text: "Earthquake deaths by region since 1970",
      offset: -9,
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" }
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 700 } });
}