import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0 createBarPlot; doc-fc11e9fb291905d1 createBarPlot/width; doc-bedf05337affd6f4 bar recipe
export function buildChart() {
  return chart()
    .createCanvas({
      width: 1544,
      height: 362,
      margin: { left: 39, top: 35, right: 5, bottom: 37 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: " Inflation Rate" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({
      domain: [1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 26] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7, overlap: "allow" }
      },
      title: { text: "Year", fontSize: 11, offset: 30 }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25],
        ticks: {},
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: " Inflation Rate", fontSize: 11, offset: 32 }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: { color: "#ddd", values: [0, 5, 10, 15, 20, 25] },
      vertical: false
    })
    .createTitle({
      text: "Levels of UK Inflation",
      titleStyle: { fontSize: 13, color: "black", fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({
      subtitle: "UK Inflation from the year 1960 to the year 2009",
      align: "left",
      offset: -12
    });
}
