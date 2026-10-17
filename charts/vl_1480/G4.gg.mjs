import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-2bd5de4bd99e314a, doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-333a87e52954985d
export function buildChart() {
  return chart()
    .createCanvas({
      width: 794,
      height: 460,
      margin: { left: 44, top: 38, right: 100, bottom: 122 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "surface type",
        fieldType: "nominal"
      },
      y: {
        field: "length(km)",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({
      domain: [
        "?", "concrete", "paving_stones", "concrete:plates", "asphalt",
        "sett", "grass", "paved", "ground", "wood", "concrete:lanes",
        "grass_paver", "stepping_stones", "cobblestone", "gravel",
        "pebblestone", "rock", "fine_gravel", "unhewn_cobblestone",
        "paver", "unpaved", "compacted", "earth", "dirt", "ceramic:tiles"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 240] })
    .encodeBarWidth({ band: 1 })
    .encodeColor({
      field: "feature count",
      fieldType: "quantitative",
      aggregate: "mean"
    })
    .editColorScale({
      domain: [1, 6390],
      palette: "blues",
      interpolate: "hcl"
    })
    .createTitle({
      text: "Sidewalks Surface Type",
      titleStyle: { fontSize: 24 },
      offset: -6
    })
    .editTitle({ alongOffset: 189.156, titleStyle: { fontWeight: 700 } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "surface type", fontSize: 11, fontWeight: 700, offset: 105 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "length(km)", fontSize: 11, fontWeight: 700, offset: 35 }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: '#ddd', lineWidth: 1 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        title: "feature count",
        gradient: { length: 200 },
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10, format: ",.0f" }
      }
    });
}