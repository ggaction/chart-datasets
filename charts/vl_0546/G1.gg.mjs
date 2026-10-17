// G1 — whole equivalent facet program (GDP loss by temperature scenario).
// Source: Vega-Lite column facet, 4 panels, shared outer axes + right legend.
// DOCS: doc-6c2c08869091f6a0 (createBarPlot prerequisites: canvas + dataset context)
// DOCS: doc-333a87e52954985d (data preparation before the bar facade)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // Verified standalone child canvas: 178x369.390625 with native measured margins
    // (the facet assembly creates the outer 337x422 canvas).
    // DOCS: doc-6c2c08869091f6a0 (createBarPlot prerequisites: canvas + dataset context)
    .createCanvas({
      width: 178,
      height: 369.390625,
      margin: { top: 3.390625, right: 98, bottom: 66, left: 30 }
    })
    // Retain every ancestor raw row and field exactly once; fresh numeric alias
    // (raw "Value 1" is a string column; quantitative bindings do not coerce strings).
    // DOCS: doc-333a87e52954985d (data preparation before the bar facade)
    .createData({ values: data })
    .createComputedData({
      id: "value_num",
      expression: { op: "toNumber", operand: { field: "Value 1" } },
      as: "value_num"
    })
    // Highest semantic facade; the source shared X order is bound via its native
    // scale domain (no reordering of raw or derived data). Guides are disabled
    // because the facet composition owns them.
    // DOCS: doc-fc11e9fb291905d1 (facade composition context)
    .createBarPlot({
      guides: false,
      x: {
        field: "Country",
        fieldType: "nominal",
        scale: {
          domain: ["Indonesia", "Thailand", "Philippines", "Malaysia", "Saudi Arabia"],
          paddingInner: 0.1,
          paddingOuter: 0.05
        }
      },
      y: { field: "value_num", fieldType: "quantitative", scale: { domain: [-13, 0.5] } }
    })
    // Source exact ordinal color scale.
    .encodeColor({
      field: "Country",
      layout: "overlay",
      scale: {
        domain: ["Indonesia", "Malaysia", "Philippines", "Saudi Arabia", "Thailand"],
        range: [
          "rgb(199, 233, 181)",
          "rgb(134, 208, 187)",
          "rgb(69, 180, 194)",
          "rgb(37, 139, 187)",
          "rgb(34, 90, 165)"
        ]
      }
    })
    // Source band fraction 1, no bar stroke.
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    // Complete source axes before the facet: no titles, no grid, #888 lines.
    // X: no painted ticks (length 0, transparent), white 10px labels offset 3.5
    // rotated 270 degrees. Y: ticks [-12..0 step 2] with U+2212 glyphs, 10px
    // labels offset 7, 5px #888 ticks.
    // DOCS: doc-6c2c08869091f6a0 (guide resources owned outside the facade)
    .createAxes({
      x: {
        position: "bottom",
        title: false,
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          ticks: { length: 0, color: "transparent" },
          labels: { fontSize: 10, color: "white", offset: 3.5, rotation: { value: 270, unit: "degrees" } }
        }
      },
      y: {
        position: "left",
        title: false,
        line: { color: "#888", lineWidth: 1 },
        ticksAndLabels: {
          values: [-12, -10, -8, -6, -4, -2, 0],
          ticks: { length: 5, color: "#888" },
          labels: {
            fontSize: 10,
            color: "black",
            offset: 7,
            labelMap: [
              { value: -12, label: "−12" },
              { value: -10, label: "−10" },
              { value: -8, label: "−8" },
              { value: -6, label: "−6" },
              { value: -4, label: "−4" },
              { value: -2, label: "−2" },
              { value: 0, label: "0" }
            ]
          }
        }
      }
    })
    // Shared right categorical legend with source fonts (title "Country" 11px
    // bold, labels 10px, closed 10x10 swatch layers without stroke).
    // DOCS: doc-6c2c08869091f6a0 (legend shared policy)
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" },
      symbol: {
        layers: [{ type: "swatch", width: 10, height: 10, stroke: "none", strokeWidth: 0 }]
      }
    })
    // Facet birth: the reviewed necessary four-key exception — column layout over
    // Scenario in original first-seen order ["1.4","2","2.6","3.2"], plot spacing,
    // outer axes, shared legend, and source header typography.
    // DOCS: doc-fc11e9fb291905d1 (facade composition context)
    .facet({
      field: "Scenario",
      spacing: "plot",
      guides: { axes: "outer", legend: "shared" },
      headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 10.609375 }
    })
    // Composition refinement: measured panel gap 3 with start alignment
    // reproduces plot origins x = 30/83/136/189, each inner plot 50x300.
    // DOCS: doc-333a87e52954985d (composition-level layout ownership)
    .editCompositionLayout({ gap: 3, align: "start" })
    // Title lifecycle after facet/layout: source fonts first (13px bold at the
    // measured alongOffset), then measured gap/offset, then the 10px italic subtitle.
    // DOCS: doc-333a87e52954985d (chart-level title above the composition)
    .createTitle({
      text: "GDP loss by temperature increase scenario",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -24.962890625
    })
    .editTitle({ gap: 3.34375, offset: -2.953125 })
    .editTitle({
      subtitle: "By most affected country. Source: Swiss Re",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    });
}