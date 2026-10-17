// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-fc11e9fb291905d1 (createBarPlot)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 424,
      height: 372,
      margin: { left: 113, top: 39, right: 11, bottom: 33 }
    })
    .createData({
      values: data,
    })
    .createComputedData({
      id: "esgNum",
      as: "ESG Score_num",
      expression: { op: "toNumber", operand: { field: "ESG Score_1-25" } }
    })
    .createBarPlot({
      x: {
        field: "ESG Score_num",
        aggregate: "sum",
        fieldType: "quantitative"
      },
      y: {
        field: "Rank_1-25",
        fieldType: "nominal"
      },
      guides: false
    })
    .editXScale({ domain: [0, 80] })
    .editYScale({
      paddingInner: 0.1,
      paddingOuter: 0.05,
      domain: [
        "Accenture",
        "Adobe",
        "Crown Holdings",
        "Deere",
        "Exponent",
        "Gildan Activewear",
        "Hewlett-Packard",
        "IHS Markit",
        "J.B. Hunt",
        "Linde",
        "Matson",
        "Metropolitan Bank",
        "Microsoft",
        "Motorola Solutions",
        "Nvidia",
        "Oracle",
        "Qualcomm",
        "Rogers",
        "STMicroelectronics",
        "Salesforce.com",
        "Sherwin-Williams",
        "Stellantis",
        "TE Connectivity",
        "Texas Instruments",
        "Xylem"
      ]
    })
    .editBarMark({ fill: "#86d0bb" })
    .encodeBarWidth({ pixels: 8 })
    .createGuides({
      grid: false,
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 8,
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: "ESG score", fontSize: 11, fontWeight: "bold", offset: 26 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: "Company", fontSize: 11, fontWeight: "bold" }
        }
      }
    })
    .createTitle({
      text: "Best 25 ESG Companies 2021",
      align: "left",
      titleStyle: { fontSize: 13 }
    })
    .editTitle({
      maxWidth: 300,
      wrap: "word",
      gap: 0
    })
    .editTitle({
      subtitle:
        "Top stocks for environmental, social and goverance values, Source: Investor's Business Daily",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" },
      offset: -13
    });
}