// DOCS: doc-8270cd43de503558 docs/api/composition/facets.md
// DOCS: doc-76573a465e2b6a33 docs/api/basic-charts.md
// DOCS: doc-8aa16ed3796df7b3 docs/recipes/facet.md
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Stage1 — canvas and text metrics
    // DOCS: doc-76573a465e2b6a33 docs/api/basic-charts.md
    .createCanvas({
      plot: { width: 700, height: 300 },
      margin: { left: 96, top: 27, right: 93, bottom: 38 },
      plotBorder: {}
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1405-own-source-widths-prototype",
        measurements: [
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "Misdemeanor", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 60.59375 }
        ]
      }
    })
    .createData({ values: data })
    // Stage2 — scatter plot with complete guides at birth
    // DOCS: doc-2b2e3149e57e859d npm/knowledge/action-cards.json
    .createScatterPlot({
      x: { field: "povertyR", scale: { domain: [0, 45] } },
      y: { field: "money_bond_rate", scale: { domain: [0, 100] } },
      guides: false
    })
    // Stage3 — encodings: stroke is nominal despite numeric years
    .encodeStroke({
      field: "year",
      fieldType: "nominal",
      scale: { domain: [2014, 2015, 2016] }
    })
    .encodeSize({
      field: "total_pop",
      scale: { domain: [0, 3302964], range: [3.141592653589793, 283.5287369864788] }
    })
    .editPointMark({ fill: "transparent", strokeWidth: 2, opacity: 0.7 }).createXAxis({
      ticksAndLabels: {
        values: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.5, flush: true }
      },
      title: { text: "Poverty Rate (%)", fontSize: 11, fontWeight: 700, offset: 28.578125, alongOffset: 0.5 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0,10,20,30,40,50,60,70,80,90,100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7.5, alongOffset: 0.890625 }
      },
      title: { text: "% Money Bonds", fontSize: 11, fontWeight: 700, offset: 33.1064453125, alongOffset: 0.5 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black" }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "black" } },
      title: { color: "black" }
    })
    .createGrid({
      horizontal: { values: [0,10,20,30,40,50,60,70,80,90,100], color: "#ddd" },
      vertical: { values: [0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44], color: "#ddd" }
    })
    // Stage5 — stroke legend block
    .createLegend({
      channels: ["stroke"],
      blockLayout: "column",
      symbol: { layers: [{ type: "point", fill: "transparent", strokeWidth: 1.5, opacity: 0.7 }] }
    })
    .editLegendLabels({ fontSize: 10, color: "black" })
    // Stage6 — size legend block
    .createLegend({
      channels: ["size"],
      values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000],
      labels: { fontSize: 10, color: "black", format: ",.0f", offset: 0 }
    })
    .editLegendTitle({ fontSize: 11, fontWeight: 700, color: "black" })
    .editLegend({ channel: "size", title: "population" })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "transparent", stroke: "#888", strokeWidth: 1.5, opacity: 0.7 }
    })
    // Stage7 — facet with rotated column-side headers and field title
    // DOCS: doc-f84a6354ad5070da docs/recipes/edit-facet-source.md
    .facet({
      field: "off_type",
      columns: 1,
      headers: {
        fontSize: 10,
        fontWeight: 400,
        color: "black",
        column: {
          side: "left",
          offset: 49.2939453125,
          rotation: { value: -90, unit: "degrees" },
          title: { text: "Type of Offense", fontSize: 11, fontWeight: 700, offset: 79.421875 }
        }
      }
    })
    .editFacetGuides({ axes: "outer", legend: "shared" })
    .editCompositionLayout({ spacing: "plot", gap: 22, topLane: "shared" })
    // Stage8 — title
    .createTitle({
      text: "% of money bonds (out of money and personal recognizance bonds) vs poverty rate in CO",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({ align: "left", alongOffset: -91, offset: -2.953125 });
}