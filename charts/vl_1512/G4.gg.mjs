// DOCS: actual delivered doc-e790db38fc2a278a, doc-dfae58344d5a524e, doc-c28bf7534d9441b6, doc-dd4a5f585ff65fb2
import { chart } from "ggaction";
import data from "./data.json";

const TAXON_DOMAIN = [
  "Mogibacterium", "Faecalitalea", "Butyricicoccus", "Tyzzerella", "Lachnospira",
  "Bilophila", "Lactobacillus", "Flavonifractor", "Catenibacterium", "Marvinbryantia",
  "Holdemania", "Cloacibacillus", "Erysipelatoclostridium", "Desulfovibrio",
  "Subdoligranulum", "Odoribacter", "Parasutterella", "Holdemanella", "Barnesiella",
  "Lactococcus", "Roseburia", "Akkermansia", "Rothia", "Eubacterium", "Leuconostoc",
  "Eggerthella", "Methanobrevibacter", "Alistipes", "Veillonella", "Terrisporobacter",
  "Fusobacterium", "Sutterella", "Dorea", "Granulicatella", "Lachnoclostridium",
  "Phascolarctobacterium", "Bifidobacterium", "Slackia", "Hungatella", "Butyricimonas",
  "Bacteroides", "Gemella", "Intestinibacter", "Parabacteroides", "Anaerostipes",
  "Blautia", "Paraprevotella", "Faecalibacterium", "Actinomyces", "Collinsella",
  "Anaerococcus", "Atopobium", "Acidaminococcus", "Pseudomonas", "Haemophilus",
  "Enterococcus", "Streptococcus", "Acinetobacter", "Neisseria", "Bacillus",
  "Dialister", "Porphyromonas", "Megamonas", "Staphylococcus"
];

export function buildChart() {
  return chart()
    .createCanvas({ width: 874, height: 539, margin: { left: 69, top: 10, right: 5, bottom: 129 } })
    .createData({ values: data })
    
    
    .createScatterPlot({
      x: { field: "taxon", fieldType: "nominal" },
      y: { field: "growth_rate", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: TAXON_DOMAIN })
    .editYScale({ type: "log", domain: [0.000001, 100] })
    .encodePointRadius({ value: Math.sqrt(40) / 2 })
    
    .editPointMark({ fill: "#4c78a8" })
    .encodeOpacity({ value: 0.8 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "source-taxon-glyphs", measurements: [{ "text": "Mogibacterium", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 65.59375 }, { "text": "Faecalitalea", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 53.921875 }, { "text": "Butyricicoccus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 63.90625 }, { "text": "Tyzzerella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 45.03125 }, { "text": "Lachnospira", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 54.484375 }, { "text": "Bilophila", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 37.8125 }, { "text": "Lactobacillus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 57.8125 }, { "text": "Flavonifractor", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 60.578125 }, { "text": "Catenibacterium", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 72.8125 }, { "text": "Marvinbryantia", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 65.59375 }, { "text": "Holdemania", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 53.375 }, { "text": "Cloacibacillus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 61.140625 }, { "text": "Erysipelatoclostridium", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 97.265625 }, { "text": "Desulfovibrio", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 57.8125 }, { "text": "Subdoligranulum", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 75.0625 }, { "text": "Odoribacter", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 52.25 }, { "text": "Parasutterella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 61.703125 }, { "text": "Holdemanella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 61.15625 }, { "text": "Barnesiella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 49.484375 }, { "text": "Lactococcus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 55.59375 }, { "text": "Roseburia", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 45.59375 }, { "text": "Akkermansia", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 57.8125 }, { "text": "Rothia", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 28.90625 }, { "text": "Eubacterium", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 56.140625 }, { "text": "Leuconostoc", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 56.71875 }, { "text": "Eggerthella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 50.59375 }, { "text": "Methanobrevibacter", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 88.390625 }, { "text": "Alistipes", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 37.25 }, { "text": "Veillonella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 45.046875 }, { "text": "Terrisporobacter", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 72.265625 }, { "text": "Fusobacterium", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 66.140625 }, { "text": "Sutterella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 42.25 }, { "text": "Dorea", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 27.25 }, { "text": "Granulicatella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 61.15625 }, { "text": "Lachnoclostridium", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 80.609375 }, { "text": "Phascolarctobacterium", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 101.71875 }, { "text": "Bifidobacterium", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 68.921875 }, { "text": "Slackia", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 32.25 }, { "text": "Hungatella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 47.8125 }, { "text": "Butyricimonas", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 62.8125 }, { "text": "Bacteroides", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 52.8125 }, { "text": "Gemella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 37.25 }, { "text": "Intestinibacter", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 62.265625 }, { "text": "Parabacteroides", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 72.828125 }, { "text": "Anaerostipes", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 58.375 }, { "text": "Blautia", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 30.578125 }, { "text": "Paraprevotella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 64.484375 }, { "text": "Faecalibacterium", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 76.15625 }, { "text": "Actinomyces", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 56.6875 }, { "text": "Collinsella", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 45.578125 }, { "text": "Anaerococcus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 63.375 }, { "text": "Atopobium", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 47.8125 }, { "text": "Acidaminococcus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 77.8125 }, { "text": "Pseudomonas", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 63.9375 }, { "text": "Haemophilus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 58.375 }, { "text": "Enterococcus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 60.59375 }, { "text": "Streptococcus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 63.375 }, { "text": "Acinetobacter", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 61.15625 }, { "text": "Neisseria", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 41.6875 }, { "text": "Bacillus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 34.46875 }, { "text": "Dialister", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 36.125 }, { "text": "Porphyromonas", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 70.59375 }, { "text": "Megamonas", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 55.03125 }, { "text": "Staphylococcus", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 70.046875 }, { "text": "0.000001", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 41.71875 }, { "text": "0.00001", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 36.15625 }, { "text": "0.0001", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 30.59375 }, { "text": "0.001", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 25.03125 }, { "text": "0.01", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 19.46875 }, { "text": "0.1", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 13.90625 }, { "text": "1", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 5.5625 }, { "text": "10", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 11.125 }, { "text": "100", "fontFamily": "sans-serif", "fontSize": 10, "fontWeight": 400, "width": 16.6875 }] } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "taxon", fontSize: 11, fontWeight: 700, offset: 122.2 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0.000001, 0.00001, 0.0001, 0.001, 0.01, 0.1, 1, 10, 100],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "growth rate [1/h]", fontSize: 11, fontWeight: 700, offset: 56 }
    });
}