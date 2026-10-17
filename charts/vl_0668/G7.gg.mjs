// DOCS: doc-dfae58344d5a524e, doc-b11b4627b143730d
import { chart } from "ggaction";
import data from "./data.json";

const years = [
  1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
  1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983,
  1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995,
  1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007,
  2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021
];
const yTicks = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 1017,
      height: 502,
      margin: { left: 41, top: 52, right: 76, bottom: 50 }
    })
    .editCanvas({ background: "#fafbfb" })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "ODA/GNI", fieldType: "quantitative" },
      guides: false
    })
    .encodeGroup({ field: "Country ", fieldType: "nominal" })
    .encodeColor({ field: "Country ", fieldType: "nominal" })
    .editXScale({ type: "point", domain: years })
    .editYScale({ domain: [0, 1.4], zero: true })
    .editColorScale({
      domain: ["DEU", "FRA", "GBR", "USA"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"]
    })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: -Math.PI / 2 }
      },
      title: { text: "Year", fontSize: 11, offset: 43 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "#000" })
    .editXAxisTitle({ fontWeight: 700, color: "#000" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: yTicks,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: ".1f" }
      },
      title: { text: "ODA/GNI", fontSize: 11, offset: 29 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "#000" })
    .editYAxisTitle({ fontWeight: 700, color: "#000" })
    .createHorizontalGrid({
      color: "#ddd",
      lineWidth: 1,
      values: yTicks
    })
    .createLegend({
      title: "Country ",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "#000" },
      labels: { fontSize: 10, color: "#000" }
    })
    .createTitle({
      text: "IMF Lending as a percentage of Global GDP",
      titleStyle: { fontSize: 13, fontWeight: "bold", color: "#020202" },
      offset: -12
    })
    .editTitle({
      alongOffset: -35.9013671875
    })
    .editTitle({
      subtitle: "Loans dispersed, % of Global GDP Source: IMF (2022 data up to September 30).",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "#000000" },
      gap: 3
    });
}