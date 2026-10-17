// DOCS: doc-7f2c254224fc4908, doc-81ac3d4bc4ec614b, doc-81f3b4da1bfe0908
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 422,
      height: 357,
      margin: { left: 74, top: 28, right: 148, bottom: 129 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "axis_label",
        fieldType: "nominal"
      },
      y: {
        field: "pf",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({
      domain: [
        "2017 Yale A (R14)",
        "2013 Penn A (R14)",
        "2012 Penn A (R15)",
        "2019 Columbia A (R13)",
        "2010 Penn A (R18)",
        "2016 MIT A (R15)",
        "2014 Chicago A (R21)",
        "2017 Stanford A (R15)",
        "2017 Stanford A (R18)",
        "2016 Berkeley A (R9)"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({
      domain: [0, 300],
      zero: true
    })
    .encodeColor({
      field: "team",
      layout: "overlay"
    })
    .editColorScale({
      domain: [
        "Chicago A",
        "Penn A",
        "Yale A",
        "Columbia A",
        "MIT A",
        "Stanford A",
        "Berkeley A"
      ],
      range: [
        "#8B1F41",
        "#045ea7",
        "#00356B",
        "#9BCBEB",
        "#8A8B8C",
        "#B1040E",
        "#3B7EA1"
      ]
    })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: {
          rotation: { value: -45, unit: "degrees" },
          fontSize: 12,
          offset: 2
        }
      },
      title: {
        text: "Team",
        fontSize: 12,
        offset: 110
      }
    })
    .editXAxisLine({ color: "#023B7F", lineWidth: 1 })
    .editXAxisTicks({ color: "#023B7F" })
    .editXAxisLabels({ color: "#023B7F", fontFamily: "Helvetica Neue" })
    .editXAxisTitle({ color: "#023B7F", fontFamily: "Helvetica Neue", fontWeight: 700 })
    .createYAxis({
      line: false,
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250, 300],
        ticks: { length: 0 },
        labels: { fontSize: 12, offset: 7 }
      },
      title: {
        text: "Points scored",
        fontSize: 12,
        offset: 42
      }
    })
    .editYAxisLabels({ color: "#023B7F", fontFamily: "Helvetica Neue" })
    .editYAxisTitle({ color: "#023B7F", fontFamily: "Helvetica Neue", fontWeight: 700 })
    .createGrid({
      horizontal: true,
      vertical: false
    })
    .editHorizontalGrid({
      color: "#023B7F",
      lineWidth: 1
    })
    .createLegend({
      title: "Team",
      titleStyle: {
        color: "#023B7F",
        fontSize: 20,
        fontFamily: "Helvetica Neue",
        fontWeight: 700
      },
      labels: {
        color: "#023B7F",
        fontSize: 16,
        fontFamily: "Helvetica Neue"
      }
    })
    .createTitle({
      text: "Most Points in a Loss",
      offset: -13,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({ align: "center" });
}
