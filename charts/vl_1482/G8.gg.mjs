// DOCS: doc-fc11e9fb291905d1, doc-333a87e52954985d, doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 794,
      height: 376,
      margin: { left: 44, top: 33, right: 100, bottom: 43 }
    })
    .createData({ values: data })
    .createTitle({
      text: "Sidewalks Tactile Paving Presence",
      offset: -11,
      titleStyle: { fontSize: 24, fontFamily: "sans-serif" }
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .createBarPlot({
      x: {
        field: "tactile_paving type",
        fieldType: "nominal"
      },
      y: {
        field: "length(km)",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({
      domain: ["?", "no", "yes"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({
      domain: [0, 260]
    })
    .encodeColor({
      field: "feature count",
      fieldType: "quantitative",
      aggregate: "mean"
    })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .editColorScale({
      domain: [11, 6682],
      palette: "blues",
      interpolate: "hcl"
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: {
        text: "tactile_paving type",
        fontSize: 11,
        offset: 28
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { fontFamily: "sans-serif" }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "length(km)",
        fontSize: 11,
        offset: 35
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { fontFamily: "sans-serif" }
    })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: {}, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      position: "right",
      titleStyle: { fontSize: 11 },
      labels: { fontSize: 10 }
    })
    .editLegendTitle({ fontWeight: 700 })
    .editLegend({ gradient: { length: 200 } });
}
