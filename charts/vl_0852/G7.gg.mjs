// DOCS: doc-b36f50bcd525bf65, doc-1ef852966df13aa6, doc-da437c7bb625430b
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 446, height: 327, margin: { left: 39, top: 40, right: 7, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "date", expression: { op: "parseTime", operand: { field: "Date" }, format: "auto" } })
    .filterData({ id: "definedDates", field: "date", noneOf: [null] })
    .createComputedData({ id: "numericZ", as: "zValue", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({
      x: { field: "date", fieldType: "temporal" },
      y: { field: "zValue", fieldType: "quantitative" },
      guides: false
    })
    .encodeStrokeWidth({ value: 2 })
    .editXScale({ domain: [1515196800000, 1677628800000] })
    .editYScale({ domain: [-2.5, 3] })
    .encodeColor({ field: "Stock" })
    .editColorScale({ target: "linePlot", palette: "set1", domain: ["Alibaba", "Amazon", "Costco", "Ebay", "Etsy", "GAP", "T K Maxx"] })
    .createXAxis({
      ticksAndLabels: {
        values: [1546300800000, 1577836800000, 1609459200000, 1640995200000, 1672531200000],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Date", fontSize: 11, offset: 28 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { format: "%Y" } },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [-2, -1, 0, 1, 2, 3],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "Z-Score", fontSize: 11, offset: 27, rotation: { value: -90, unit: "degrees" } }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .createTitle({
      text: "Z-scores for online vs in-store stocks",
      titleStyle: { fontSize: 13 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({ subtitle: "Weekly data of z-score for selceted firms", offset: -5, gap: 3 })
    .editTitle({ titleStyle: { fontWeight: 700 }, alongOffset: -33.4 })
    .createLegend({ position: "top-left", title: "Stock", symbol: { length: 10, lineWidth: 1.5 } })
    .editLegendTitle({ fontSize: 11, fontWeight: 700 })
    .editLegendLabels({ fontSize: 10 });
}