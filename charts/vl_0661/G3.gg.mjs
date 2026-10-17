// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-bedf05337affd6f4, doc-4594e9575628a4bd, doc-7184b02978bdf5d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 907,
      height: 502,
      margin: { left: 41, top: 52, right: 66, bottom: 50 }
    })
    .editCanvas({ background: "#fafbfb" })
    .createData({ values: data })
  .createSortedData({
    id: "sourceStackOrder",
    sortBy: [{ field: "Country ", order: "descending" }]
  })
    .createBarPlot({ x: { field: "Year", fieldType: "nominal" }, y: { field: "ODA/GNI", stack: "zero" }, guides: false })
    .encodeColor({ field: "Country ", fieldType: "nominal", layout: "stack" })
    .editColorScale({
      domain: ["DEU", "FRA", "GBR", "USA"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editXScale({
      domain: [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 3] })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } } },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 38 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "ODA/GNI", fontSize: 11, fontWeight: 700, offset: 26, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({
      horizontal: { color: "#ddd" }
    })
    .createLegend({
        title: "Country ",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 }
    })
    .createTitle({
      text: "IMF Lending as a percentage of Global GDP",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "#020202" }
    })
    .editTitle({
      subtitle: "Loans dispersed, % of Global GDP Source: IMF (2022 data up to September 30).",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#000000" },
      offset: -12
    });
}