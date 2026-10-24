import { chart } from "ggaction";
import data from "./data.json";
import cdrData from "./cdr-data.json";
import mutationData from "./mutation-data.json";
export function buildChart(){
 return chart()
  // DOCS: doc-cffb363a4b862ced
  .createCanvas({ width: 358, height: 143, margin: { left: 49, top: 22, right: 69, bottom: 41 } })
  .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1, underlay: true } })
  .createData({ values: data })
  // DOCS: doc-f84e560d3e4dc523
  .createHeatmap({ x: { field: "position", fieldType: "ordinal", scale: { domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], paddingInner: 0, paddingOuter: 0 } }, y: { field: "seq_id", fieldType: "nominal", scale: { domain: ["seq1"], paddingInner: 0, paddingOuter: 0 } }, guides: false })
  .editRectMark({ fill: "#169cf5", opacity: 0.25, stroke: false })
  .createData({ id: "cdrData", values: cdrData })
  .createRectMark({ id: "cdr", stroke: false, opacity: 0.25 })
  .editRectMark({ target: "cdr", fill: "#f5e216" })
  .encodeX({ field: "position", fieldType: "ordinal", scale: { domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], paddingInner: 0, paddingOuter: 0 } })
  .encodeY({ field: "seq_id", fieldType: "nominal", scale: { domain: ["seq1"], paddingInner: 0, paddingOuter: 0 } })
  .createData({ id: "mutationData", values: mutationData })
  .createRectMark({ id: "mutations", stroke: false })
  .createCoordinate({ id: "ticks", type: "cartesian", layers: ["mutations"] })
  .encodeX({ field: "position", fieldType: "ordinal", scale: { id: "tickX", domain: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], paddingInner: 0.9, paddingOuter: 0.45 } })
  .encodeY({ field: "seq_id", fieldType: "nominal", scale: { id: "tickY", domain: ["seq1", " seq2", "  seq3", "   seq4"], paddingInner: 0.25, paddingOuter: 0.125 } })
  .encodeColor({ field: "real_mut", target: "mutations", scale: { domain: [true, false], range: ["black", "transparent"] } }).createAxes({coordinate: {id: "ticks"}, x: {line: {color: "#888"}, ticksAndLabels: {values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], ticks: {color: "#888", length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 12, color: "black", rotation: {value: 90, unit: "degrees"}, offset: 7.5, alongOffset: -0.859375, labelMap: [{value: 1, label: ""}, {value: 3, label: ""}, {value: 5, label: ""}, {value: 7, label: ""}, {value: 9, label: ""}, {value: 11, label: ""}]}}, title: {text: "Amino acid position", offset: 30.92578125, alongOffset: 0.5, fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black"}}, y: {line: {color: "#888"}, ticksAndLabels: {values: ["seq1", " seq2", "  seq3", "   seq4"], ticks: {color: "#888", length: 5, alongOffset: 0.5}, labels: {fontFamily: "sans-serif", fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.390625, labelMap: [{value: "seq1", label: "seq1"}, {value: " seq2", label: "seq2"}, {value: "  seq3", label: "seq3"}, {value: "   seq4", label: "seq4"}]}}, title: {text: "mAb", offset: 37.1064453125, alongOffset: 0.5, fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black"}}}).createGrid({horizontal: {coordinate: "ticks", values: ["seq1", " seq2", "  seq3", "   seq4"], color: "#ddd", lineWidth: 1, alongOffset: 0.5}})
  .createLegend({ symbol: { layers: [{ type: "point", size: 5, strokeWidth: 0 }] }, labels: { fontFamily: "sans-serif", fontSize: 10, color: "black" }, titleStyle: { fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, color: "black" } })
  // DOCS: doc-e7f2fa9f88cd79b5
  .createTitle({ text: "lineage 2 heavy chain", offset: -10.953125, titleStyle: { fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, color: "black" } })
  .editTitle({ align: "center" });
}