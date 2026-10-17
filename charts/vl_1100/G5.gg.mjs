// DOCS: doc-5d974e8fdcb4f774
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 354, height: 342, margin: { left: 49, top: 40, right: 5, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "ValueNum", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createSortedData({ id: "sortedBySource", sortBy: [{ field: "Source", order: "descending" }] })
    .createAreaPlot({
      guides: false,
      x: { field: "Time", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "ValueNum" }
    })
    .encodeGroup({ field: "Source" })
    .encodeColor({ field: "Source" })
    .editColorScale({ domain: ["Coal", "Gas", "Oil"], range: ["rgb(169,221,183)", "rgb(69,180,194)", "rgb(33,115,177)"] })
    .editXScale({ domain: [-3786825600000, 1546300800000], nice: false })
    .editYScale({ domain: [0, 140000] })
    .layoutSeries({ mode: "stack" })
    .editAreaMark({ opacity: 1 })
    .createTitle({ text: "Global fossil fuel consumption", titleStyle: { fontSize: 13, fontWeight: 700 }, offset: -11 })
    .editTitle({ alongOffset: -43, subtitle: "TWh. Source: Smil (2017) / BP Statistical Review of World Energy", subtitleStyle: { fontSize: 10, fontStyle: "italic" } })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [-3471292800000, -2840140800000, -2208988800000, -1577923200000, -946771200000, -315619200000, 315532800000, 946684800000],
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: "%Y" }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 8,
        ticks: {},
        labels: { fontSize: 10, offset: 7, format: "," }
      },
      title: false
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ color: "black" })
    .createLegend({ position: "top-left", title: false, labels: { fontSize: 10 } });
}