// DOCS: doc-eb6e59db232dc6c0, doc-82e309a0b6ac0052, doc-3558b809b504c100, doc-0408a7975bd52e06
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 354,
      height: 381,
      margin: { left: 48, top: 44, right: 6, bottom: 37 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "hpNum",
      as: "hp_num",
      expression: { op: "toNumber", operand: { field: "hp_growth" } }
    })
    .createComputedData({
      id: "rrpNum",
      as: "rrp_num",
      expression: { op: "toNumber", operand: { field: "rrp_growth" } }
    })
    .filterData({ id: "filterHp", field: "hp_num", predicate: { op: "lt", value: 0.25 } })
    .filterData({ id: "filterRrp", field: "rrp_num", predicate: { op: "lt", value: 0.25 } })
    .createComputedData({
      id: "biasedX",
      as: "biasedX",
      expression: { op: "add", left: { field: "rrp_num" }, right: { constant: 5e-17 } }
    })
    .createComputedData({
      id: "biasedY",
      as: "biasedY",
      expression: { op: "add", left: { field: "hp_num" }, right: { constant: 2e-16 } }
    })
    .createBin2DData({ id: "bins", x: "biasedX", y: "biasedY" })
    .editBin2DData({
      bins: { x: 6, y: 17 },
      extent: { x: [0.005, 0.035], y: [-0.08, 0.26] },
      includeEmpty: false
    })
    .createComputedData({
      id: "x0e",
      as: "x0e",
      expression: { op: "add", left: { field: "__bins_x0" }, right: { constant: 0.00005 } }
    })
    .createComputedData({
      id: "x1e",
      as: "x1e",
      expression: { op: "add", left: { field: "__bins_x1" }, right: { constant: 0.00005 } }
    })
    .createComputedData({
      id: "y0e",
      as: "y0e",
      expression: { op: "add", left: { field: "__bins_y0" }, right: { constant: -0.00055 } }
    })
    .createComputedData({
      id: "y1e",
      as: "y1e",
      expression: { op: "add", left: { field: "__bins_y1" }, right: { constant: -0.00055 } }
    })
    .createHeatmap({
      x: { field: "x0e", fieldType: "nominal" },
      y: { field: "y0e", fieldType: "nominal" },
      guides: false
    })
    .encodeXRange({
      lower: "x0e",
      upper: "x1e",
      scale: { id: "xRect", type: "linear", domain: [0.005, 0.035] }
    })
    .encodeYRange({
      lower: "y0e",
      upper: "y1e",
      scale: { id: "yRect", type: "linear", domain: [-0.08, 0.25] }
    })
    .encodeColor({
      field: "__bins_count",
      fieldType: "quantitative"
    })
    .editColorScale({
      domain: [1, 5],
      palette: { name: "magma", extent: [1, 0] },
      interpolate: "hcl"
    })
    .createXAxis({
      scale: "xRect",
      ticksAndLabels: {
        values: [0.005, 0.01, 0.015, 0.02, 0.025, 0.03, 0.035],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: ".1%", flush: true }
      },
      title: { text: "Real Income Growth", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxis({ ticksAndLabels: { ticks: { color: "#888" } } })
    .createYAxis({
      scale: "yRect",
      ticksAndLabels: {
        values: [-0.08, -0.06, -0.04, -0.02, 0, 0.02, 0.04, 0.06, 0.08, 0.1, 0.12, 0.14, 0.16, 0.18, 0.2, 0.22, 0.24],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, format: ".0%" }
      },
      title: { text: "House Price Growth ", fontSize: 11, fontWeight: 700, offset: 39 }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxis({ ticksAndLabels: { ticks: { color: "#888" } } })
    .createTitle({
      text: "House Prices and Real Incomes- heat map",
      alongOffset: -42.3,
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({
      subtitle: "12 month growth rate, by quarter. Source: ONS,",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      gap: 1
    });
}
