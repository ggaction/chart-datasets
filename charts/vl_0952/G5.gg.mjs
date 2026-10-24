import { chart } from "ggaction";
import data from "./data.json";
export function buildChart() {
  return chart()
    // DOCS: doc-6236790019770315
    .createCanvas({ width: 555, height: 362, margin: { left: 53, top: 40, right: 102, bottom: 22 } })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
    // DOCS: doc-5a9a28857a8808b8
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0952-own-original-svg", measurements: [{ text: "1965", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 }] } })
    .createData({ values: data })
    .createComputedData({ id: "typedTime", as: "sourceTime", expression: { op: "parseTime", operand: { field: "Year" } } }).createLinePlot({
      x: { field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [-157766400000, 1609459200000] } },
      y: { field: "Electricity from solar (TWh)", fieldType: "quantitative", scale: { id: "y", domain: [0, 1100] } },
      guides: false
    }).createAxes({
      x: {
        ticksAndLabels: {
          values: [-157766400000, 0, 157766400000, 315532800000, 473385600000, 631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000],
          ticks: { color: "#888", length: 5, alongOffset: 0.5 },
          labels: { fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 0 }
        },
        title: false
      },
      y: {
        ticksAndLabels: {
          values: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100],
          ticks: { color: "#888", length: 5, alongOffset: 0.5 },
          labels: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", offset: 6.5, alongOffset: 0.890625, labelMap: [{ value: 0, label: "0" }, { value: 100, label: "100" }, { value: 200, label: "200" }, { value: 300, label: "300" }, { value: 400, label: "400" }, { value: 500, label: "500" }, { value: 600, label: "600" }, { value: 700, label: "700" }, { value: 800, label: "800" }, { value: 900, label: "900" }, { value: 1000, label: "1,000" }, { value: 1100, label: "1,100" }] }
        },
        title: { text: "Electricity from solar (TWh)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 40.4462890625, alongOffset: 0.5 }
      }
    }).editXAxisLine({ color: "#888" }).editYAxisLine({ color: "#888" })
    .encodeColor({ field: "Entity", fieldType: "nominal", scale: { domain: ["Europe (BP)", "United States", "World"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .encodeStroke({ field: "Entity", fieldType: "nominal", scale: { domain: ["Europe (BP)", "United States", "World"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .editLineMark({ strokeWidth: 2, lineCap: "butt", lineJoin: "miter" })
    // DOCS: doc-0c53e96a226e8a16
    .createScatterPlot({
      x: { field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [-157766400000, 1609459200000] } },
      y: { field: "Electricity from solar (TWh)", fieldType: "quantitative", scale: { id: "y", domain: [0, 1100] } },
      guides: false
    })
    .encodeStroke({ field: "Entity", fieldType: "nominal", scale: { domain: ["Europe (BP)", "United States", "World"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .filterData({ id: "labelEmpty", field: "Year", noneOf: ["1965-01-01", "1966-01-01", "1967-01-01", "1968-01-01", "1969-01-01", "1970-01-01", "1971-01-01", "1972-01-01", "1973-01-01", "1974-01-01", "1975-01-01", "1976-01-01", "1977-01-01", "1978-01-01", "1979-01-01", "1980-01-01", "1981-01-01", "1982-01-01", "1983-01-01", "1984-01-01", "1985-01-01", "1986-01-01", "1987-01-01", "1988-01-01", "1989-01-01", "1990-01-01", "1991-01-01", "1992-01-01", "1993-01-01", "1994-01-01", "1995-01-01", "1996-01-01", "1997-01-01", "1998-01-01", "1999-01-01", "2000-01-01", "2001-01-01", "2002-01-01", "2003-01-01", "2004-01-01", "2005-01-01", "2006-01-01", "2007-01-01", "2008-01-01", "2009-01-01", "2010-01-01", "2011-01-01", "2012-01-01", "2013-01-01", "2014-01-01", "2015-01-01", "2016-01-01", "2017-01-01", "2018-01-01", "2019-01-01", "2020-01-01", "2021-01-01"] })
    .createRuleMark({ data: "labelEmpty", strokeWidth: 1 })
    .encodeX({ field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [-157766400000, 1609459200000] } })
    .editRuleMark({ stroke: "gray" })
    // DOCS: doc-3bb8d46233243e81
    .createTextMark({ id: "emptyText0", data: "labelEmpty", fontSize: 11 })
    .encodeX({ field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [-157766400000, 1609459200000] } })
    .encodeY({ field: "Electricity from solar (TWh)", fieldType: "quantitative", scale: { id: "y", domain: [0, 1100] } })
    .encodeText({ field: "Electricity from solar (TWh)" })
    .editTextMark({ align: "left", dx: 5, dy: -5 })
    .createTextMark({ id: "emptyText1", data: "labelEmpty", fontSize: 11 })
    .encodeX({ field: "sourceTime", fieldType: "temporal", scale: { id: "x", domain: [-157766400000, 1609459200000] } })
    .encodeY({ field: "Electricity from solar (TWh)", fieldType: "quantitative", scale: { id: "y", domain: [0, 1100] } })
    .encodeText({ field: "Electricity from solar (TWh)" })
    .editTextMark({ align: "left", dx: 5, dy: -5 })
    .encodeColor({ field: "Entity", fieldType: "nominal", scale: { domain: ["Europe (BP)", "United States", "World"], range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"] } })
    .createLegend({ target: "linePlot", channels: ["color", "stroke"], symbol: { layers: [{ type: "point", size: 5, strokeWidth: 1.5, opacity: 1 }] } })
    .editLegend({ labels: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black" }, titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" } })
    // DOCS: doc-28f99e104c0a984e
    .createTitle({ text: "Solar Energy Generation", titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" }, offset: -10.953125 })
    .editTitle({ subtitle: "Electricity generation from solar, measured in terawatt-hours (TWh) per year, Source: Our World in Data.", subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, color: "black", fontStyle: "italic" }, gap: 3.34375 })
    .editTitle({ align: "left", alongOffset: -47.0244140625 });
}