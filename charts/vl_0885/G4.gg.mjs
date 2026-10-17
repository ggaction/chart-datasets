// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 403,
      height: 404,
      margin: { left: 53, top: 22, right: 5, bottom: 37 }
    })
    .editCanvas({ background: "#fff0d8" })
    .createData({ values: data })
    // Parse "1981"-style strings into epoch-milliseconds year instants for the time scale.
    .createTimeUnitData({ id: "years", field: "Year", unit: "year" })
    .createBarPlot({
      guides: false,
      x: {
        field: "Year_year",
        fieldType: "temporal",
        temporalUnit: "timestamp"
      },
      y: { field: "Percent Gain or Loss" },
    })
    .editBarMark({ fill: "#fe921f", stroke: false })
    .encodeBarWidth({ pixels: 5 })
    .editXScale({ domain: [328314841791, 1628299558208], range: [53, 398] })
    .editYScale({ domain: [-0.8, 2.2] })
    .createTitle({
      text: "Apple stock % annual change",
      offset: -8,
      titleStyle: { fontSize: 13 }
    })
    .editTitle({
      align: "left",
      titleStyle: { color: "black", fontWeight: "bold" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        count: 9,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Year", fontSize: 11, offset: 28 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "#000" }
      },
      title: { color: "#000", fontWeight: "bold" }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 9,
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ".0%" }
      },
      title: { text: "Percent Gain or Loss", fontSize: 11, offset: 40.5 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { color: "#000" }
      },
      title: { color: "#000", fontWeight: "bold" }
    })
    .createGrid({
      horizontal: { color: "#ddd" },
      vertical: { color: "#ddd" }
    });
}