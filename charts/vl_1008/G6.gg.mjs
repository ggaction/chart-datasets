// DOCS: doc-7f2c254224fc4908, doc-81ac3d4bc4ec614b
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 384,
      height: 389,
      margin: { left: 39, top: 52, right: 55, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "pointsNum",
      as: "PointsNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "variable" }, right: { constant: "Points" } },
        then: { op: "toNumber", operand: { field: "value" } },
        else: { constant: 0 }
      }
    })
    .createComputedData({
      id: "gamesNum",
      as: "GamesNum",
      expression: {
        op: "if",
        condition: { op: "eq", left: { field: "variable" }, right: { constant: "Games" } },
        then: { op: "toNumber", operand: { field: "value" } },
        else: { constant: 0 }
      }
    })
    .createSummaryData({
      id: "playerSummary",
      groupBy: ["Season", "Player"],
      aggregates: [
        { op: "sum", field: "PointsNum", as: "PointsNum" },
        { op: "sum", field: "GamesNum", as: "GamesNum" }
      ]
    })
    .createScatterPlot({
      x: {
        field: "PointsNum",
        fieldType: "quantitative"
      },
      y: {
        field: "GamesNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [200, 360], zero: false })
    .editYScale({ domain: [15, 24], zero: false })
    .encodePointRadius({ value: 2.7386127875258306 })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "red" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [200, 220, 240, 260, 280, 300, 320, 340, 360],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Points", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Games", fontSize: 11, fontFamily: "sans-serif", offset: 28 }
    })
    .editXAxis({ title: { fontWeight: 700 } })
    .editYAxis({ title: { fontWeight: 700 } })
    .createTitle({
      text: "Leading Points Scorers in Gallager Premiership",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      alongOffset: -33.123046875
    })
    .editTitle({ offset: -13, gap: 3 })
    .editTitle({
      subtitle: "This graph shows the leading points scorers in the Gallager Premiership since 1987,\ndisplaying points scored against games played",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" },
      titleStyle: { fontWeight: 700, color: "black" }
    });
}
