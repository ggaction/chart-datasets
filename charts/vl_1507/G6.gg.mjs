// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot), doc-333a87e52954985d (grouped bar trace)
import { chart } from "ggaction";
import data from "./data.json";

const authors = [
  "BvB93", "Firestar-Reimu", "HaoZeke", "Lioscro", "Mukulikaa",
  "WarrenWeckesser", "Yutaro-Sanada", "bashtage", "charris", "fangq",
  "grlee77", "henryiii", "jamiecook", "ma-sadeghi", "mattip",
  "melissawm", "r-devulap", "rgommers", "rossbar", "seberg",
  "serge-sans-paille", "stefanv"
];

const associationColors = [
  "rgb(211.82745098039214, 211.82745098039214, 211.82745098039214)",
  "rgb(166.98562091503268, 229.89803921568628, 166.98562091503268)",
  "rgb(96.37647058823529, 192.75294117647059, 96.37647058823529)",
  "rgb(0.0, 100.3921568627451, 0.0)"
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 600,
      height: 436,
      margin: { left: 39, top: 27, right: 121, bottom: 109 }
    })
    .createData({ values: data })
    .createTitle({
      text: "Top 50 first responders for numpy in the last 10 days",
      offset: -3,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({
      align: "center",
      titleStyle: { fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createBarPlot({
      x: {
        field: "author",
        fieldType: "nominal"
      },
      y: {
        field: "n_first_responses",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: authors, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 16] })
    .encodeColor({
      field: "authorAssociation",
      layout: "overlay"
    })
    .editColorScale({ type: "ordinal", domain: ["MEMBER", "CONTRIBUTOR", "COLLABORATOR", "NONE"], range: associationColors })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: {
        text: "author",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 92
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "n_first_responses",
        fontSize: 11,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 27
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 } })
    .createLegend({
      title: "authorAssociation",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    });
}