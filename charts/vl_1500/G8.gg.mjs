// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-dfae58344d5a524e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 440,
      height: 431,
      margin: { left: 39, top: 27, right: 121, bottom: 104 }
    })
    .createData({ values: data })
    .createTitle({
      text: "PR authors for numpy in the last 10 days",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      offset: -13
    })
    .editTitle({ titleStyle: { fontWeight: 700 } })
    .createBarPlot({
      x: { field: "username", fieldType: "nominal" },
      y: { field: "authored" },
      guides: false
    })
    .editXScale({
      domain: ["BvB93","Dbhasin1","HaoZeke","abatomunkuev","charris","evanmiller","h-vetinari","henryiii","mattip","melissawm","rgommers","rk-mlu","serge-sans-paille","timhoffm"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 22] })
    .encodeColor({ field: "authorAssociation", layout: "overlay" })
    .editColorScale({
      domain: ["MEMBER", "CONTRIBUTOR", "COLLABORATOR", "NONE"],
      range: [
        "rgb(211.82745098039214, 211.82745098039214, 211.82745098039214)",
        "rgb(166.98562091503268, 229.89803921568628, 166.98562091503268)",
        "rgb(96.37647058823529, 192.75294117647059, 96.37647058823529)",
        "rgb(0.0, 100.3921568627451, 0.0)"
      ]
    })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "username", fontSize: 11, offset: 96 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { labels: { fontFamily: "sans-serif" } },
      title: { fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        values: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "authored", fontSize: 11, offset: 28 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { labels: { fontFamily: "sans-serif" } },
      title: { fontWeight: 700, fontFamily: "sans-serif" }
    })
    .createGrid({ horizontal: true })
    .editHorizontalGrid({ color: "#ddd" })
    .createLegend({
      title: "authorAssociation",
      titleStyle: { fontSize: 11, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editLegendTitle({ fontWeight: 700 });
}