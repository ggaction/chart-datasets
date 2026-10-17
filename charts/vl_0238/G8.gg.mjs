import { chart } from "ggaction";
import data from "./data.json";
// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17

export function buildChart() {
  return chart()
    .createCanvas({
      width: 449,
      height: 374,
      margin: { left: 24, top: 52, right: 125, bottom: 22 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "Progressive Carries", fieldType: "quantitative" },
      y: { field: "Progressive Passes", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 14] })
    .editYScale({ domain: [0, 12] })
    .encodeSize({ field: "Expected Assists", fieldType: "quantitative" })
    .editSizeScale({ domain: [0, 0.3877551020408163], range: [3.9269908169872414, 157.07963267948966] })
    .encodeOpacity({ value: 0.7 })
    .editPointMark({ fill: "#000080" })
    .createTitle({
      text: "Ball Progression and Goal Creation in the 2021-22 Premier League",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ gap: 1, offset: -13, alongOffset: -18.123 })
    .editTitle({
      subtitle: "Progressive Passes (x), Progressive Carries (y). size by Expected Assists\nall stats normalised per 90mins played. min 1500 mins played",
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { color: "black" }
    })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14],
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12],
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .editYAxisLine({ color: "#888" })
    .createLegend({
      position: "right",
      title: "Expected Assists",
      titleStyle: { fontSize: 11 }
    })
    .editLegend({
      values: [0, 0.1, 0.2, 0.3],
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10, format: ".1f" }
    })
    .editLegendTitle({
      color: "black",
      fontWeight: 700
    })
    .editLegendLabels({
      color: "black",
      fontFamily: "sans-serif"
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "#000080", opacity: 0.7 }
    });
}