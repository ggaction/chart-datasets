// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 484, height: 398, margin: { left: 29, top: 76, right: 5, bottom: 22 } })
    .createData({ id: "drugs", values: data })
    .createFoldData({ id: "folded", fields: ["Methamphetamine", "Marijuana", "Heroin", "Cocaine"], as: { key: "var", value: "val" } })
    .createComputedData({ id: "valNum", as: "valNum", expression: { op: "toNumber", operand: { field: "val" } } })
    .createStackData({ category: "Year", group: "var", value: "valNum" })
    .createBarPlot({
      x: { field: "Year", fieldType: "ordinal" },
      y: { lower: "valNum_start", upper: "valNum_end" },
      guides: false
    })
    .editXScale({ domain: ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 160] })
    .encodeColor({ field: "var", fieldType: "nominal", layout: "overlay" })
    .editColorScale({ domain: ["Cocaine", "Heroin", "Marijuana", "Methamphetamine"], range: ["rgb(66, 10, 104)", "rgb(147, 38, 103)", "rgb(221, 81, 58)", "rgb(252, 165, 10)"] })
    .encodeBarWidth({ pixels: 25 })
    .createTitle({ text: "Is this $150 billion of missing GDP?", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" } })
    .editTitle({ subtitle: "Estimates of illegal drug spending by Americans. USD billions. Source: RAND", offset: -11, gap: 2 })
    .editTitle({ alongOffset: -24 })
    .createAxes({
      x: {
        line: { color: "#888" },
        ticksAndLabels: { ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" } },
        title: false
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: { values: [0, 20, 40, 60, 80, 100, 120, 140, 160], ticks: { length: 5, color: "#888" }, labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" } },
        title: false
      }
    })
    .createGrid({ horizontal: { color: "#ddd" } })
    .createLegend({ position: "top", title: false, labels: { fontSize: 10, fontFamily: "sans-serif" } });
}
