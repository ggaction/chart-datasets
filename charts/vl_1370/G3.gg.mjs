import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71

export function buildChart() {
  return chart()
    .createCanvas({ width: 1495, height: 582.5, margin: { left: 53, top: 27, right: 170, bottom: 50 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createComputedData({ id: "yearNum", as: "yearNum", expression: { op: "toNumber", operand: { field: "iyear" } } })
    .createSummaryData({ id: "attacks", groupBy: ["yearNum", "region_txt"], aggregates: [{ op: "sum", field: "Attack Count", as: "Attack Count" }] })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-1370-full-visible-text", measurements: [
      { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1971", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1972", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1973", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1974", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1975", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1976", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1977", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1978", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1979", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1981", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1982", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1983", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1984", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1986", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1987", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1988", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1989", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1991", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1992", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1994", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1996", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1997", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1998", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "1999", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2001", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2003", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2004", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2006", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2007", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2008", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2009", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2011", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 21.515625 },
      { text: "2012", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2013", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.25 },
      { text: "Year", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, width: 23.265625 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 },
      { text: "500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 16.6875 },
      { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "1,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "2,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "3,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "3,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "4,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "4,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "5,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "5,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "6,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "6,500", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "7,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 },
      { text: "Sum of Attack Count", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, width: 108.375 },
      { text: "Australasia & Oceania", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 98.953125 },
      { text: "Central America & Caribbean", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 129.515625 },
      { text: "Central Asia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 53.921875 },
      { text: "East Asia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 41.703125 },
      { text: "Eastern Europe", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 69.5 },
      { text: "Middle East & North Africa", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 116.71875 },
      { text: "North America", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.359375 },
      { text: "South America", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 65.046875 },
      { text: "South Asia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 47.828125 },
      { text: "Southeast Asia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 66.71875 },
      { text: "Sub-Saharan Africa", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 86.734375 },
      { text: "Western Europe", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 72.09375 },
      { text: "Region", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, width: 37.28125 },
      { text: "Yearly Terrorist Attacks in World Regions", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, width: 254.8125 }
    ] } })
    .createTitle({ text: "Yearly Terrorist Attacks in World Regions", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ align: "center" })
    .createLinePlot({
      x: { field: "yearNum", fieldType: "nominal" },
      y: { field: "Attack Count", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015], paddingInner: 0, paddingOuter: 0 })
    .editYScale({ domain: [0, 7000], nice: false })
    .encodeColor({ field: "region_txt" })
    .editColorScale({ domain: ["Australasia & Oceania", "Central America & Caribbean", "Central Asia", "East Asia", "Eastern Europe", "Middle East & North Africa", "North America", "South America", "South Asia", "Southeast Asia", "Sub-Saharan Africa", "Western Europe"], range: ["#1f77b4", "#aec7e8", "#ff7f0e", "#ffbb78", "#2ca02c", "#98df8a", "#d62728", "#ff9896", "#9467bd", "#c5b0d5", "#8c564b", "#c49c94"] })
    .encodeGroup({ field: "region_txt" })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, color: "black", rotation: { value: -90, unit: "degrees" } }
          },
          title: { text: "Year", fontSize: 11, fontWeight: 700, color: "black", offset: 39.82421875 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, color: "black", format: ",.0f" }
          },
          title: { text: "Sum of Attack Count", fontSize: 11, fontWeight: 700, color: "black", offset: 40.4462890625 }
        }
      },
      grid: { horizontal: { values: [0, 500, 1000, 1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000], color: "#ddd", lineWidth: 1 } },
      legend: {
        title: "Region",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 2 }] }
      }
    });
}