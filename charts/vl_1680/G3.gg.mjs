// DOCS: doc-b11b4627b143730d, doc-c2eafbbd16fe3c71, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 230, height: 151, margin: { left: 54, top: 22, right: 116, bottom: 49 } })
    .createData({ id: "data", values: data })
    .createSortedData({
      id: "rankedSorted",
      sortBy: [
        { field: "point", order: "descending" },
        { field: "diff", order: "descending" }
      ]
    })
    .createWindowData({
      id: "ranked",
      sortBy: [
        { field: "point", order: "descending" },
        { field: "diff", order: "descending" }
      ],
      operations: [{ op: "rank", as: "rank" }]
    })
    .editWindowData({
      target: "ranked",
      partitionBy: "matchday"
    })
    .createLinePlot({
      x: { field: "matchday", fieldType: "ordinal" },
      y: { field: "rank", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "point", domain: [1, 2, 3] })
    .editYScale({ type: "linear", domain: [0.5, 4.5], reverse: true })
    .editYScale({ zero: false, nice: false })
    .encodeGroup({ field: "team" })
    .encodeColor({ field: "team" })
    .editColorScale({ type: "ordinal", domain: ["Germany", "Mexico", "South Korea", "Sweden"], range: ["black", "#127153", "#c91a3c", "#0c71ab"] })
    .editLineMark({ strokeWidth: 2 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "title-creation-exception",
        measurements: [
          {
            text: "World Cup 2018: Group F Rankings",
            fontFamily: "sans-serif",
            fontSize: 13,
            fontWeight: 700,
            fontStyle: "italic",
            width: 219.10205078125
          }
        ]
      }
    })
    .createTitle({
      text: "World Cup 2018: Group F Rankings",
      titleStyle: { fontStyle: "italic", fontFamily: "sans-serif", fontSize: 13 },
      offset: -13,
      alongOffset: -48.09326171875
    })
    .editTitle({ titleStyle: { fontWeight: 700, color: "black" } })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1, 2, 3],
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, rotation: -Math.PI / 2 }
        },
        title: { text: "matchday", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 20 }
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          values: [1, 2, 3, 4],
          ticks: { color: "#888" },
          labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
        },
        title: { text: "rank", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black", offset: 28 }
      }
    })

    .createLegend({
      title: "team",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" }
    });
}
