// DOCS: actual delivered doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-c2eafbbd16fe3c71
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 379,
      height: 264,
      margin: { left: 44, top: 27, right: 135, bottom: 37 }
    })
    .createData({ id: "raw", values: data })
    .createSortedData({ id: "byWhen", source: "raw", sortBy: [{ field: "when", order: "ascending" }] })
    // G1 facade: exactly 3 top-level fields (x, y, guides:false); id omitted.
    .createLinePlot({
      x: { field: "when", fieldType: "temporal" },
      y: { field: "value", fieldType: "quantitative" },
      guides: false
    })
    // Positional scale domains moved out of the facade into scale editors.
    .editXScale({ target: "linePlot", domain: [1668725000, 1668727000] })
    .editYScale({ target: "linePlot", domain: [0, 200] })
    // Series grouping by the nominal color field (moved out of the facade).
    .encodeGroup({ target: "linePlot", fieldType: "nominal", field: "labelRef" })
    // Field-driven series color mapping, target only (scale edited separately).
    .encodeColor({ target: "linePlot", fieldType: "nominal", field: "labelRef" })
    // Exact resolved domain order and palette.
    .editColorScale({ target: "linePlot", domain: ["ref1", "ref2"], range: ["green", "blue"] })
    // Constant line appearance: monotone interpolation, width 2.
    .editLineMark({ target: "linePlot", curve: "monotone", strokeWidth: 2 })
    // Source point:true overlay: same bindings/domains, 3 top-level fields.
    .createScatterPlot({
      x: { field: "when", fieldType: "temporal", scale: { domain: [1668725000, 1668727000] } },
      y: { field: "value", fieldType: "quantitative", scale: { domain: [0, 200] } },
      guides: false
    })
    // Field-driven point stroke mapping (id omitted, default scatterPlot); white fill allowed alongside stroke.
    .encodeStroke({ target: "scatterPlot", fieldType: "nominal", field: "labelRef" })
    .editStrokeScale({ target: "scatterPlot", domain: ["ref1", "ref2"], range: ["green", "blue"] })
    // White-filled points at source size (area 30 -> radius 2.7386127875258306).
    .editPointMark({ target: "scatterPlot", fill: "white", opacity: 1 })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .editPointMark({ target: "scatterPlot", strokeWidth: 2 })
    // Source grids on both positional axes (inferred default style omitted).
    .createGrid({ vertical: { color: '#ddd' }, horizontal: { color: '#ddd' } })
    // Complete X axis: no domain line, no ticks, source label typography,
    // resolved 5-tick time domain in epoch ms, title "T".
    .createXAxis({
      ticksAndLabels: {
        values: [1668725000, 1668725500, 1668726000, 1668726500, 1668727000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: "%S.%L" }
      },
      title: { text: "T", fontSize: 11, fontWeight: "bold", offset: 28 }
    })
    // Complete Y axis: same policy, resolved domain 0..200 step 50, title "V".
    .createYAxis({
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "V", fontSize: 11, fontWeight: "bold", offset: 33 }
    })
    // Outside right legend with source title; implicit legend disabled above.
    .editXAxisLine({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .createLegend({ channels: ["stroke"], title: "Test", target: "scatterPlot" })
    .editLegendLabels({ fontSize: 10, fontFamily: "sans-serif" })
    // labelExpr "labels[datum.value]" resolved against the params values.
    .editLegendBlock({
      target: "scatterPlot",
      channel: "stroke",
      labelMap: [
        { value: "ref1", label: "My first cool Label" },
        { value: "ref2", label: "My second cool label" }
      ]
    })
    // Source chart title; tight top margin (27) -> offset = 27 - 16 - 13 = -2.
    .createTitle({
      text: "Foo Bar",
      offset: -2,
      titleStyle: { fontSize: 13, fontWeight: "bold" }
    });
}