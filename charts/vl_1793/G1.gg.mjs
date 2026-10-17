// DOCS: doc-99b0513458edff76, doc-74fc341a49e892f8, doc-fb3b01cca895bdad
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 490, height: 405, margin: { left: 45, top: 28, right: 5, bottom: 153 } })
    .createData({ values: data })
    .createTimeUnitData({ id: "date_day", field: "date", unit: "day" })
    .createLinePlot({
      x: { field: "date_day", fieldType: "ordinal", scale: { id: "x", type: "point", domain: [1600560000000, 1600646400000, 1600732800000, 1600819200000, 1600905600000, 1600992000000, 1601078400000] } },
      y: { field: "value", fieldType: "quantitative", scale: { id: "y", domain: [0, 3] } },
      guides: false
    })
    .encodeColor({ field: "symbol", scale: { id: "sym", type: "ordinal", domain: ["Mastery", "Self-care"], range: ["#4c78a8", "#f58518"] } })
    .editLineMark({ strokeWidth: 2.7, curve: "cardinal", tension: 0.9 })
    .createScatterPlot({
      x: { field: "date_day", fieldType: "ordinal", scale: { id: "x" } },
      y: { field: "value", fieldType: "quantitative", scale: { id: "y" } },
      guides: false
    })
    .encodeColor({ field: "symbol", scale: { id: "sym", type: "ordinal", domain: ["Mastery", "Self-care"], range: ["#4c78a8", "#f58518"] } })
    .encodePointRadius({ value: 2.7386127875258306 })
    .editPointMark({ opacity: 1, stroke: false })
    .createAxes({
      x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [1600560000000, 1600646400000, 1600732800000, 1600819200000, 1600905600000, 1600992000000, 1601078400000],
            ticks: { length: 0 },
            labels: {
              format: "%b %d %a",
              labelMap: [
                { value: 1600560000000, label: "Sep 20 Su" },
                { value: 1600646400000, label: "Sep 21 Mo" },
                { value: 1600732800000, label: "Sep 22 Tu" },
                { value: 1600819200000, label: "Sep 23 We" },
                { value: 1600905600000, label: "Sep 24 Th" },
                { value: 1600992000000, label: "Sep 25 Fr" },
                { value: 1601078400000, label: "Sep 26 Sa" }
              ],
              color: "rgba(0, 0, 0, 0.4)", fontSize: 12, fontFamily: "Inter", fontWeight: 500,
              offset: 32, rotation: { value: 65, unit: "degrees" }
            }
          },
          title: false
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 0.5, 1, 1.5, 2, 2.5, 3],
            ticks: { length: 0 },
            labels: { format: ".1f", color: "rgba(0, 0, 0, 0.4)", fontSize: 12, fontFamily: "Inter", fontWeight: 500, offset: 10 }
          },
          title: { text: "Intensity", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 35 }
        }
    })
    .createLegend({ position: "bottom", columns: 2, offset: 100 })
    .editLegend({
      title: "symbol",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "rgb(0, 0, 0)" },
      labels: { color: "rgba(0, 0, 0, 0.75)", fontSize: 14, fontFamily: "Inter", fontWeight: 600 }
    })
    .editLegend({
      symbol: { layers: [{ type: "point", size: 6.123724356957945 }] }
    })
    .createTitle({ text: "Urges (Effective)", titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif" }, offset: -3 });
}