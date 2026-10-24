import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-fa2683c1a5d46fd3 doc-a7d421980af3b87a doc-c23596878853c401 doc-42b93a4e107d59c6 doc-44a702daead0945a doc-e564ef68ab71b2f4 doc-919ecfba273140a0 doc-88a431a4ce6a169c doc-78e6756d084d2e82 doc-1ca4e1016791b1a1 doc-d205f73b872952fb doc-938d7f30ee081788
export function buildChart() {
  return chart()
    .createCanvas({
      width: 519,
      height: 372,
      margin: { left: 58, top: 35, right: 161, bottom: 37 },
    })
    .editCanvas({
      plotBorder: { color: "#ddd", lineWidth: 1, underlay: true },
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1212-original-svg-text",
        measurements: [
          { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
        ],
      },
    })
    .createData({ values: data })
    .createComputedData({
      id: "typedValue",
      as: "sourceValue",
      expression: { op: "toNumber", operand: { field: "value" } },
    }).createLinePlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [631152000000, 1609459200000] },
      },
      y: {
        field: "sourceValue",
        scale: { domain: [0, 65000] },
      },
      guides: false,
    }).createXAxis({line: {color: "#888"}, ticksAndLabels: {values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000], ticks: {length: 5, color: "#888", alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: "%Y", offset: 5.5, alongOffset: 0.5, flush: true, flushThreshold: 1}}, title: {text: "date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 27.578125, alongOffset: 0.5}}).createYAxis({line: {color: "#888"}, ticksAndLabels: {values: [0, 10000, 20000, 30000, 40000, 50000, 60000], ticks: {length: 5, color: "#888", alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", format: ",.0f", offset: 6.5, alongOffset: 0.890625}}, title: {text: "value", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black", offset: 46.0078125, alongOffset: 0.5}}).createHorizontalGrid({color: "#ddd", values: [0, 10000, 20000, 30000, 40000, 50000, 60000]}).createVerticalGrid({color: "#ddd", values: [631152000000, 788918400000, 946684800000, 1104537600000, 1262304000000, 1420070400000, 1577836800000]})
    .editLineMark({ strokeWidth: 2 })
    .encodeColor({
      field: "Region",
      scale: {
        domain: ["East Asia & Pacific", "Europe & Central Asia", "Latin America & Caribbean", "Middle East & North Africa", "North America", "South Asia", "Sub-Saharan Africa"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2"],
      },
    })
    .createScatterPlot({
      x: {
        field: "date",
        fieldType: "temporal",
        scale: { domain: [631152000000, 1609459200000] },
      },
      y: {
        field: "sourceValue",
        scale: { domain: [0, 65000] },
      },
      guides: false,
    })
    .encodePointRadius({ value: 4.47213595499958 })
    .encodeColor({
      field: "Region",
      scale: {
        domain: ["East Asia & Pacific", "Europe & Central Asia", "Latin America & Caribbean", "Middle East & North Africa", "North America", "South Asia", "Sub-Saharan Africa"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2"],
      },
    })
    .editPointMark({ stroke: "transparent", strokeWidth: 2, opacity: 0.7 })
    .createRuleMark({ data: "typedValue", strokeWidth: 1, opacity: 0 })
    .encodeX({
      field: "date",
      fieldType: "temporal",
      scale: { domain: [631152000000, 1609459200000] },
    })
    .encodeStroke({
      field: "Region",
      scale: {
        domain: ["East Asia & Pacific", "Europe & Central Asia", "Latin America & Caribbean", "Middle East & North Africa", "North America", "South Asia", "Sub-Saharan Africa"],
        range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b", "#eeca3b", "#b279a2"],
      },
    })
    .createLegend({
      target: "scatterPlot",
      channels: ["color"],
      labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" },
    })
    .editLegend({
      labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" },
      titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" },
      symbol: { layers: [{ type: "point", size: 5, strokeWidth: 1.5, opacity: 0.7 }] },
    })
    .createTitle({
      text: "Poverty in different regions",
      titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" },
      offset: -10.953125,
    })
    .editTitle({
      subtitle: "Source:World Bank",
      subtitleStyle: { fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.34375,
    })
    .editTitle({ align: "left", alongOffset: -52.5859375 });
}