import {chart} from "ggaction";
import data from "./data.json";

// DOCS: doc-2b2e3149e57e859d, doc-5d1780cc7372f105, doc-b6e95d5d607008d6

export function buildChart() {
  return chart()
    .createCanvas({
      margin: {left: 43, top: 5, right: 64, bottom: 37},
      plot: {width: 200, height: 100},
      plotBorder: {underlay: true}
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1640-original-source-font-widths",
        measurements: [
          {text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625},
          {text: "5", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625}
        ]
      }
    })
    .createData({values: data})
    .createFlattenData({id: "flattened", fields: ["foo", "bar"], as: ["quant", "cat"]})
    .createComputedData({
      id: "display",
      as: "cat_display",
      expression: {
        op: "if",
        condition: {op: "isNull", operand: {field: "cat"}},
        then: {constant: "null"},
        else: {field: "cat"}
      }
    })
    .createScatterPlot({
      x: {field: "quant"},
      y: {field: "cat_display", fieldType: "nominal"},
      guides: false
    })
    .editXScale({domain: [0, 5]})
    .editYScale({domain: ["null", "A", "B", "C", "D"]})
    .createAxes({
      x: {
        underlay: true,
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5],
          ticks: {length: 5, alongOffset: 0.5},
          labels: {fontSize: 10, offset: 5.5, alongOffset: 0.5, flush: true}
        },
        title: {text: "quant", fontSize: 11, fontWeight: 700, baseline: "alphabetic", offset: 30.5, alongOffset: 0.5}
      },
      y: {
        underlay: true,
        ticksAndLabels: {
          values: ["null", "A", "B", "C", "D"],
          ticks: {length: 5, alongOffset: 0.5},
          labels: {fontSize: 10, offset: 6.5, alongOffset: 0.890625}
        },
        title: {text: "cat", fontSize: 11, fontWeight: 700, baseline: "alphabetic", offset: 28.06640625, alongOffset: 0.5}
      }
    })
    .createGrid({vertical: {color: "#ddd"}, horizontal: false})
    .editXAxisLine({color: "#888"})
    .editXAxisTicks({color: "#888"})
    .editXAxisLabels({color: "black"})
    .editXAxisTitle({color: "black"})
    .editYAxisLine({color: "#888"})
    .editYAxisTicks({color: "#888"})
    .editYAxisLabels({color: "black"})
    .editYAxisTitle({color: "black"})
    .encodeColor({field: "key"})
    .encodePointRadius({value: 2.739})
    .editPointMark({stroke: false, opacity: 0.7})
    .createLegend({
      labels: {fontSize: 10, color: "black"},
      titleStyle: {fontSize: 11, fontWeight: 700, color: "black"},
      symbol: {layers: [{type: "point", size: 5, strokeWidth: 0, opacity: 0.7}]}
    })
    .editLegend({titlePadding: 3});
}