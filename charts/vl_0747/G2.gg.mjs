// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot API),
// doc-bedf05337affd6f4 (Bar Chart Recipe), doc-ba092ec842bafcc1 (types/basic.d.ts)
import { chart } from "ggaction";
import data from "./data.json";

// G1: compact integrated declaration of the settled first render.
// Vertical band bars of Points by Team; source disables all grid lines, x ticks,
// and both axis titles, so guide ownership is disabled here. Explicit resolved
// domains pinned, raw category order preserved; band paddings from the resolved
// reference scale. The constant fill and the authored subtitle font are applied
// with separate focused calls so every action stays within 3 top-level fields.
export function buildChart() {
  return chart()
    .createCanvas({
      width: 343,
      height: 407,
      margin: { left: 38, top: 41, right: 5, bottom: 66 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "Team",
        fieldType: "nominal"
      },
      y: { field: "Points", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({
      domain: [
        "Australia",
        "Bangladesh",
        "England",
        "India",
        "New Zealand",
        "Pakistan",
        "South Africa",
        "Sri Lanka",
        "West Indies",
        "Zimbabwe"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 4500] })
    .editBarMark({ fill: "#5d71a4" })
    .encodeBarWidth({ pixels: 27 })
    .createTitle({
      text: "Top 10 ICC Test Points 2022",
      align: "left",
      titleStyle: { fontSize: 13, fontWeight: "bold" }
    })
    .editTitle({ subtitle: "Source: espncricinfo.com", gap: 0, subtitleStyle: { fontSize: 12, fontFamily: "Arial" } })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: { length: 0 }, labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } } },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: { labels: { fontSize: 10 } },
      title: false
    });
}