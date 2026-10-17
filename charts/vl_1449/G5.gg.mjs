// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 267,
      height: 539,
      margin: { left: 53, top: 10, right: 6, bottom: 129 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: {
        field: "taxon",
        fieldType: "nominal"
      },
      y: {
        field: "growth_rate",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({
      type: "point",
      domain: [
        "Haemophilus","Streptococcus","Bacteroides","Dialister","Roseburia",
        "Phascolarctobacterium","Terrisporobacter","Holdemanella","Dorea",
        "Lachnospira","Collinsella","Catenibacterium","Ruminococcus",
        "Phocaeicola","Bulleidia","Faecalibacterium","Intestinibacter",
        "Butyrivibrio","Mediterraneibacter","Clostridium","Anaerobutyricum",
        "Succinivibrio","Anaerostipes","Methanobrevibacter","Blautia","Prevotella"
      ]
    })
    .editYScale({
      type: "log",
      domain: [0.001, 1],
      nice: false
    })
    .encodePointRadius({ value: 3.1622776601683795 })
    .editPointMark({ fill: "#4c78a8", opacity: 0.8, stroke: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: -Math.PI / 2, overlap: "allow" }
      },
      title: { text: "taxon", fontSize: 11, offset: 122 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "#000" }
    })
    .editXAxisTitle({ fontWeight: 700, color: "#000" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "growth rate [1/h]", fontSize: 11, offset: 40.5 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({
      ticks: { color: "#888" },
      labels: { color: "#000" }
    })
    .editYAxisTitle({ fontWeight: 700, color: "#000" });
}
