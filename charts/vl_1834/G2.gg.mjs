// DOCS: doc-2e6240c00cb297cc, doc-2bd5de4bd99e314a, doc-80f403fb119727fd
import { chart } from "ggaction";
import data from "./data.json";

const rowExpression =
  { op: "if", condition: { op: "lte", left: { field: "id" }, right: { constant: 10 } }, then: { constant: 1 }, else:
  { op: "if", condition: { op: "lte", left: { field: "id" }, right: { constant: 20 } }, then: { constant: 2 }, else:
  { op: "if", condition: { op: "lte", left: { field: "id" }, right: { constant: 30 } }, then: { constant: 3 }, else:
  { op: "if", condition: { op: "lte", left: { field: "id" }, right: { constant: 40 } }, then: { constant: 4 }, else:
  { op: "if", condition: { op: "lte", left: { field: "id" }, right: { constant: 50 } }, then: { constant: 5 }, else:
  { op: "if", condition: { op: "lte", left: { field: "id" }, right: { constant: 60 } }, then: { constant: 6 }, else:
  { op: "if", condition: { op: "lte", left: { field: "id" }, right: { constant: 70 } }, then: { constant: 7 }, else:
  { op: "if", condition: { op: "lte", left: { field: "id" }, right: { constant: 80 } }, then: { constant: 8 }, else:
  { op: "if", condition: { op: "lte", left: { field: "id" }, right: { constant: 90 } }, then: { constant: 9 }, else: { constant: 10 } }}}}}}}}};

const colExpression = {
  op: "subtract",
  left: { field: "id" },
  right: { op: "multiply", left: { field: "row" }, right: { constant: 10 } }
};

export function buildChart() {
  return chart()
    .createCanvas({ width: 529, height: 460, margin: { left: 39, top: 24, right: 90, bottom: 36 } })
    .createData({ values: data })
    .createComputedData({ id: "withRow", as: "row", expression: rowExpression })
    .createComputedData({ id: "withCol", as: "col", expression: colExpression })
    .createScatterPlot({
      x: { field: "col", fieldType: "ordinal" },
      y: { field: "row", fieldType: "ordinal" },
      guides: false
    })
    .editXScale({ type: "point", domain: [-9, -8, -7, -6, -5, -4, -3, -2, -1, 0] })
    .editYScale({ type: "point", domain: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] })
    .encodeColor({ field: "tipo", fieldType: "nominal", scale: { type: "ordinal", domain: ["Evadido", "Graduado", "Regular", "Reingresso"] } })
    .editColorScale({ palette: "set2" })
    .encodePointRadius({ value: 4.743416490252569 })
    .encodeOpacity({ value: 0.7 })
    .createAxes({
      x: {
        ticksAndLabels: { ticks: {}, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" } } },
        title: { text: "col", fontSize: 11, fontWeight: 700, offset: 26 }
      },
      y: {
        ticksAndLabels: { ticks: {}, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 } },
        title: { text: "row", fontSize: 11, fontWeight: 700, offset: 27, rotation: { value: -90, unit: "degrees" } }
      }
    })
    .createLegend({
      position: "right",
      title: "tipo",
      symbol: { layers: [{ type: "point", shape: "circle", size: 4.743416490252569 }] }
    })
    .editLegend({
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createTitle({
      text: "Situação academica das mulheres desde 2000.1",
      titleStyle: { fontSize: 15, fontWeight: 700 },
      offset: -11
    })
    .editTitle({ align: "center" });
}