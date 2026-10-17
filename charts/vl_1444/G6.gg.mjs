// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-dfae58344d5a524e (createCanvas)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 560,
      height: 500,
      margin: { top: 5, right: 282, bottom: 295, left: 78 }
    })
    .createData({ id: "fema", values: data })
    .createScatterPlot({ x: "vol_left_over", y: "totApproved", guides: false })
    .editXScale({ domain: [0, 5000000] })
    .editYScale({ domain: [0, 26000000] })
    .encodeStroke({
      field: "Title",
      fieldType: "nominal"
    })
    .editStrokeScale({
      target: "scatterPlot",
      domain: [
        "HURRICANE ALEX",
        "HURRICANE DENNIS",
        "HURRICANE DOLLY",
        "HURRICANE FRANCES",
        "HURRICANE IKE",
        "HURRICANE IRENE",
        "HURRICANE ISAAC",
        "HURRICANE IVAN",
        "HURRICANE JEANNE",
        "HURRICANE KATRINA",
        "HURRICANE MATTHEW",
        "HURRICANE RITA",
        "HURRICANE SANDY",
        "HURRICANE WILMA",
        "TROPICAL DEPRESSION IVAN",
        "TROPICAL STORM BONNIE AND HURRICANE CHARLEY",
        "TROPICAL STORM FRANCES"
      ],
      range: [
        "#4c78a8",
        "#f58518",
        "#e45756",
        "#72b7b2",
        "#54a24b",
        "#eeca3b",
        "#b279a2",
        "#ff9da6",
        "#9d755d",
        "#bab0ac"
      ]
    })
    .editPointMark({ target: "scatterPlot", fill: "transparent", strokeWidth: 2 })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .encodePointRadius({ target: "scatterPlot", value: 2.7386127875 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-y-tick-widths",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "5,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 44.5 },
          { text: "10,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "15,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "20,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 },
          { text: "25,000,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.0625 }
        ]
      }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 1000000, 2000000, 3000000, 4000000, 5000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, flush: true, labelMap: [{ value: 1000000, label: "" }, { value: 3000000, label: "" }, { value: 5000000, label: "" }] }
      },
      title: { text: "Volume Nour Sand Remaining (cubic yds)", fontSize: 11, offset: 28, at: 2450000 }
    })
    .editXAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { fontFamily: "sans-serif", color: "black", format: ",.0f" } }, title: { fontWeight: "bold", color: "black" } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5000000, 10000000, 15000000, 20000000, 25000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Total FEMA Damage Payout ($)", fontSize: 11, offset: 66.048828125 }
    })
    .editYAxis({ line: { color: "#888" }, ticksAndLabels: { ticks: { color: "#888" }, labels: { fontFamily: "sans-serif", color: "black", format: ",.0f" } }, title: { fontWeight: "bold", color: "black" } })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["stroke"],
        position: "right",
        title: "Title",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, fill: "transparent", strokeWidth: 1.5 }] },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
      }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "stroke",
      labelMap: [
        { value: "TROPICAL STORM BONNIE AND HURRICANE CHARLEY", label: "TROPICAL STORM BONNIE AN…" }
      ]
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "stroke",
      symbol: { opacity: 0.7 }
    });
}