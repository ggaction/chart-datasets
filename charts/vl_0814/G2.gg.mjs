// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 1280, height: 460, margin: { left: 39, top: 40, right: 5, bottom: 120 } })
    .createData({ values: data })
    .createComputedData({
      id: "ratingsNum",
      as: "RatingsPct",
      expression: { op: "toNumber", operand: { field: "Ratings %" } }
    })
    .createLinePlot({
      x: { field: "Date", fieldType: "nominal" },
      y: { field: "RatingsPct", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({
      field: "Programming Language"
    })
    .createScatterPlot({
      x: { field: "Date", fieldType: "nominal" },
      y: { field: "RatingsPct", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({
      target: "scatterPlot",
      field: "Programming Language"
    })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .editXScale({ type: "point", domain: ["2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"] })
    .editYScale({ domain: [0, 18] })
    .editColorScale({ domain: ["Python", "R"], range: ["#EF0107", "#034694", "#00B2A9", "#4fc3f7", "#FBE122", "black"] })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: 45, unit: "degrees" } }
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 40 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { color: "#888" },
          values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18],
          labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
        },
        title: { text: "Ratings %", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 28 }
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "linePlot",
        channels: ["color"],
        position: "bottom",
        direction: "horizontal",
        columns: 1,
        title: "Programming Language",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] }
      }
    })
    .createTitle({
      text: "Tiobe Index - Python vs R",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", fontStyle: "normal", color: "black" },
      subtitleStyle: { fontSize: 10, fontFamily: "sans-serif", fontStyle: "italic", color: "black" }
    })
    .editTitle({ alongOffset: -33, gap: 1, offset: -4 })
    .editTitle({ subtitle: "An indicator of the popularity of Programming Languages, Source: Tiobe Index" });
}