// DOCS: doc-b11b4627b143730d doc-c2eafbbd16fe3c71 doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 485, height: 347, margin: { left: 78, top: 10, right: 7, bottom: 37 } })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "Year Acquired", fieldType: "temporal" },
      y: { field: "max", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [-6847804800000, 1546300800000] })
    .editYScale({ type: "log", domain: [1, 10000000] })
    .editLineMark({ stroke: "blue", strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [
          -6626966400000,
          -5995814400000,
          -5364662400000,
          -4733596800000,
          -4102444800000,
          -3471292800000,
          -2840140800000,
          -2208988800000,
          -1577923200000,
          -946771200000,
          -315619200000,
          315532800000,
          946684800000
        ],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true, format: "%Y" }
      },
      title: { text: "Year Acquired", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [1, 10, 100, 1000, 10000, 100000, 1000000, 10000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "max, min", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 56 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .editVerticalGrid({ color: "#ddd", lineWidth: 1 })
    .createLinePlot({
      id: "minLine",
      x: { field: "Year Acquired", fieldType: "temporal" },
      y: { field: "min", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ target: "minLine", stroke: "orange", strokeWidth: 2 });
}