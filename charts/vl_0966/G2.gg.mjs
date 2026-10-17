import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-2ba6dfbdbb611825
export function buildChart() {
  return chart()
    .createCanvas({ width: 238, height: 236, margin: { left: 72, top: 49, right: 16, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "esg", as: "ESG_score", expression: { op: "toNumber", operand: { field: "ESG Score_1-25" } } })
    .createBarPlot({
      x: { field: "ESG_score", aggregate: "sum" },
      y: "Rank_1-25",
      guides: false
    })
    .editBarMark({ target: "barPlot", fill: "#86d0bb" })
    .encodeBarWidth({ pixels: 5 })
    .editYScale({
      target: "barPlot",
      domain: ["Accenture", "Adobe", "Crown Holdings", "Deere", "Exponent", "Gildan Activewear", "Hewlett-Packard", "IHS Markit", "J.B. Hunt", "Linde", "Matson", "Metropolitan Bank", "Microsoft", "Motorola Solutions", "Nvidia", "Oracle", "Qualcomm", "Rogers", "STMicroelectronics", "Salesforce.com", "Sherwin-Williams", "Stellantis", "TE Connectivity", "Texas Instruments", "Xylem"]
    })
    .editYScale({ target: "barPlot", paddingInner: 0.1, paddingOuter: 0.05 })
    .editXScale({ target: "barPlot", domain: [0, 80] })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
        title: { text: "ESG score", fontSize: 11, fontWeight: 700, offset: 28 }
      },
      y: {
        line: {},
        title: false,
        ticksAndLabels: { ticks: { length: 5 }, labels: { fontSize: 7, offset: 7, overlap: "allow" } }
      }
    })
    .createTitle({
      text: "Best 25 ESG Companies 2021",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -3,
      alongOffset: -66.513671875
    })
    .editTitle({
      subtitle: "Top stocks for environmental, social and goverance\nvalues, Source: Investor's Business Daily",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      gap: 1
    });
}
