// DOCS: doc-e790db38fc2a278a, doc-d9e3b1b7add0d2c6
import { chart } from "ggaction";
import data from "./data.json";

const TAXA = ["Gemella","Lactococcus","Atopobium","Rothia","Methanobrevibacter","Pseudomonas","Lactobacillus","Anaerococcus","Eubacterium","Eggerthella","Erysipelatoclostridium","Hungatella","Sutterella","Leuconostoc","Actinomyces","Listeria","Butyricimonas","Anaerotruncus","Granulicatella","Gordonibacter","Holdemania","Acinetobacter","Weissella","Odoribacter","Neisseria","Enterococcus","Lachnoclostridium","Bilophila","Marvinbryantia","Acidaminococcus","Mogibacterium","Anaerofustis","Haemophilus","Staphylococcus","Veillonella","Bacillus","Lachnospira","Faecalitalea","Slackia","Flavonifractor","Butyricicoccus","Tyzzerella","Streptococcus","Fusobacterium","Desulfovibrio","Megamonas","Parasutterella","Barnesiella","Adlercreutzia","Intestinibacter","Parabacteroides","Dorea","Phascolarctobacterium","Bifidobacterium","Porphyromonas","Alistipes","Subdoligranulum","Collinsella","Anaerostipes","Dialister","Holdemanella","Roseburia","Paraprevotella","Terrisporobacter","Akkermansia","Faecalibacterium","Megasphaera","Catenibacterium","Bacteroides","Blautia"];

const Y_TICKS = [0.0001,0.0002,0.0003,0.0004,0.0005,0.0006,0.0007,0.0008,0.0009,0.001,0.002,0.003,0.004,0.005,0.006,0.007,0.008,0.009,0.01,0.02,0.03,0.04,0.05,0.06,0.07,0.08,0.09,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1,2,3,4,5,6,7,8,9,10];

const Y_LABELS = [
  { value: 0.0001, label: "0.0001" },
  { value: 0.0002, label: "0.0002" },
  { value: 0.0003, label: "" },
  { value: 0.0004, label: "" },
  { value: 0.0005, label: "" },
  { value: 0.0006, label: "" },
  { value: 0.0007, label: "" },
  { value: 0.0008, label: "" },
  { value: 0.0009, label: "" },
  { value: 0.001, label: "0.001" },
  { value: 0.002, label: "0.002" },
  { value: 0.003, label: "" },
  { value: 0.004, label: "" },
  { value: 0.005, label: "" },
  { value: 0.006, label: "" },
  { value: 0.007, label: "" },
  { value: 0.008, label: "" },
  { value: 0.009, label: "" },
  { value: 0.01, label: "0.01" },
  { value: 0.02, label: "0.02" },
  { value: 0.03, label: "" },
  { value: 0.04, label: "" },
  { value: 0.05, label: "" },
  { value: 0.06, label: "" },
  { value: 0.07, label: "" },
  { value: 0.08, label: "" },
  { value: 0.09, label: "" },
  { value: 0.1, label: "0.1" },
  { value: 0.2, label: "0.2" },
  { value: 0.3, label: "" },
  { value: 0.4, label: "" },
  { value: 0.5, label: "" },
  { value: 0.6, label: "" },
  { value: 0.7, label: "" },
  { value: 0.8, label: "" },
  { value: 0.9, label: "" },
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "" },
  { value: 4, label: "" },
  { value: 5, label: "" },
  { value: 6, label: "" },
  { value: 7, label: "" },
  { value: 8, label: "" },
  { value: 9, label: "" },
  { value: 10, label: "10" }
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 863, height: 539, margin: { left: 58, top: 10, right: 5, bottom: 129 } })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "taxon", fieldType: "nominal" },
      y: { field: "growth_rate", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "point", domain: TAXA })
    .editYScale({ type: "log", domain: [0.0001, 10] })
    .encodePointRadius({ value: 3.1622776601683795 })
    .encodeOpacity({ value: 0.8 })
    .editPointMark({ fill: "#4c78a8" })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-axis-glyphs", measurements: [{ text: "Gemella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.25 }, { text: "Lactococcus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 55.59375 }, { text: "Atopobium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 47.8125 }, { text: "Rothia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 28.90625 }, { text: "Methanobrevibacter", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 88.390625 }, { text: "Pseudomonas", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.9375 }, { text: "Lactobacillus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 57.8125 }, { text: "Anaerococcus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.375 }, { text: "Eubacterium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 56.140625 }, { text: "Eggerthella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 50.59375 }, { text: "Erysipelatoclostridium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 97.265625 }, { text: "Hungatella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 47.8125 }, { text: "Sutterella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 42.25 }, { text: "Leuconostoc", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 56.71875 }, { text: "Actinomyces", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 56.6875 }, { text: "Listeria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 32.25 }, { text: "Butyricimonas", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 62.8125 }, { text: "Anaerotruncus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 65.046875 }, { text: "Granulicatella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 61.15625 }, { text: "Gordonibacter", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.375 }, { text: "Holdemania", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 53.375 }, { text: "Acinetobacter", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 61.15625 }, { text: "Weissella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 42.625 }, { text: "Odoribacter", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 52.25 }, { text: "Neisseria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 41.6875 }, { text: "Enterococcus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 60.59375 }, { text: "Lachnoclostridium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 80.609375 }, { text: "Bilophila", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.8125 }, { text: "Marvinbryantia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 65.59375 }, { text: "Acidaminococcus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 77.8125 }, { text: "Mogibacterium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 65.59375 }, { text: "Anaerofustis", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 55.59375 }, { text: "Haemophilus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 58.375 }, { text: "Staphylococcus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 70.046875 }, { text: "Veillonella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 45.046875 }, { text: "Bacillus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 34.46875 }, { text: "Lachnospira", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 54.484375 }, { text: "Faecalitalea", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 53.921875 }, { text: "Slackia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 32.25 }, { text: "Flavonifractor", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 60.578125 }, { text: "Butyricicoccus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.90625 }, { text: "Tyzzerella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 45.03125 }, { text: "Streptococcus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 63.375 }, { text: "Fusobacterium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 66.140625 }, { text: "Desulfovibrio", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 57.8125 }, { text: "Megamonas", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 55.03125 }, { text: "Parasutterella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 61.703125 }, { text: "Barnesiella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 49.484375 }, { text: "Adlercreutzia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 58.359375 }, { text: "Intestinibacter", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 62.265625 }, { text: "Parabacteroides", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 72.828125 }, { text: "Dorea", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 27.25 }, { text: "Phascolarctobacterium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 101.71875 }, { text: "Bifidobacterium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 68.921875 }, { text: "Porphyromonas", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 70.59375 }, { text: "Alistipes", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.25 }, { text: "Subdoligranulum", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 75.0625 }, { text: "Collinsella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 45.578125 }, { text: "Anaerostipes", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 58.375 }, { text: "Dialister", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.125 }, { text: "Holdemanella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 61.15625 }, { text: "Roseburia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 45.59375 }, { text: "Paraprevotella", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 64.484375 }, { text: "Terrisporobacter", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 72.265625 }, { text: "Akkermansia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 57.8125 }, { text: "Faecalibacterium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 76.15625 }, { text: "Megasphaera", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 61.15625 }, { text: "Catenibacterium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 72.8125 }, { text: "Bacteroides", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 52.8125 }, { text: "Blautia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.578125 }, { text: "0.0001", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "0.0002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.59375 }, { text: "0.001", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 }, { text: "0.002", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.03125 }, { text: "0.01", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.46875 }, { text: "0.02", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 19.46875 }, { text: "0.1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 13.90625 }, { text: "0.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 13.90625 }, { text: "1", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 }, { text: "2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5625 }, { text: "10", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 11.125 }] } })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "taxon", fontSize: 11, offset: 122.2 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", labelMap: Y_LABELS }
      },
      title: { text: "growth rate [1/h]", fontSize: 11, offset: 45, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisTitle({ fontWeight: 700 });
}