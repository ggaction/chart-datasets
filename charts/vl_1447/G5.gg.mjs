// DOCS: doc-e790db38fc2a278a, doc-2fcdfbdfb290e440
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 275,
      height: 539,
      margin: { left: 69, top: 10, right: 6, bottom: 129 }
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
        "Ruminococcus", "Bacteroides", "Haemophilus", "Terrisporobacter",
        "Roseburia", "Streptococcus", "Phascolarctobacterium", "Lachnospira",
        "Clostridium", "Dorea", "Dialister", "Holdemanella", "Collinsella",
        "Bulleidia", "Intestinibacter", "Phocaeicola", "Anaerobutyricum",
        "Catenibacterium", "Faecalibacterium", "Mediterraneibacter",
        "Anaerostipes", "Blautia", "Succinivibrio", "Methanobrevibacter",
        "Prevotella"
      ]
    })
    .editYScale({ type: "log", domain: [0.000001, 10] })
    .editPointMark({ shape: "circle", opacity: 0.8 })
    .encodePointRadius({ value: 3.1622776601683795 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: -Math.PI / 2,
          overlap: "allow"
        }
      },
      title: { text: "taxon", fontSize: 11 }
    })
    .editXAxisTitle({
      fontWeight: 700
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        values: [0.000001, 0.00001, 0.0001, 0.001, 0.01, 0.1, 1, 10],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "growth rate [1/h]", fontSize: 11 }
    })
    .editYAxisTitle({
      fontWeight: 700
    });
}
