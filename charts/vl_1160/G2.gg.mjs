// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-f30bfed200b50a98, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Fixed canvas from contract; source plot area preserved (200x200).
    .createCanvas({
      width: 246,
      height: 272,
      margin: { left: 39, top: 22, right: 7, bottom: 50 }
    })
    // Raw immutable source data; no invented schema.
    .createData({ values: data })
    // Source "value" is numeric strings ("10.5"); derive a numeric field.
    .createComputedData({ id: "value", as: "value_num", expression: { op: "toNumber", operand: { field: "value" } } })
    // Integrated high-level declaration; guides owned explicitly below.
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "value_num", fieldType: "quantitative" },
      guides: false
    })
    // Source line strokeWidth 2 (mark samples).
    .editLineMark({ strokeWidth: 2 })
    // Positional scale domains moved from the facade bindings to scale editors.
    .editXScale({ domain: [694224000000, 1609459200000] })
    .editYScale({ domain: [0, 11] })
    // Complete display axes with source typography/geometry in tight margins.
    .createGuides({
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      axes: {
        x: {
          ticksAndLabels: {
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              offset: 7,
              rotation: -Math.PI / 2
            }
          },
          title: { text: "date", fontSize: 11, fontWeight: "bold", offset: 42 }
        },
        y: {
          ticksAndLabels: {
            ticks: { length: 5 },
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: "Unemployment Rate (%)", fontSize: 11, fontWeight: "bold", offset: 28 }
        }
      }
    })
    // Source chart title (anchor start), tight top margin requires negative offset.
    .createTitle({ text: "Unemployment rate aged 25-34", titleStyle: { fontSize: 13 }, offset: -12 });
}