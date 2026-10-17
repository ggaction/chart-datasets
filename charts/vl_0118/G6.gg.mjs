// DOCS: doc-b785fcba5a7e78ae
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createData({ values: data })
    .createComputedData({ id: "dateMs", as: "dateMs", expression: { op: "parseTime", operand: { field: "date" }, format: "%Y-%m-%d" } })
    .createComputedData({ id: "pricesN", as: "pricesN", expression: { op: "toNumber", operand: { field: "prices" } } })
    .filterData({ id: "filtered", field: "dateMs", range: { min: 1514764800000, max: 1924819200000 } })
    .createCanvas({ width: 343, height: 564, margin: { left: 46, top: 40, right: 7, bottom: 224 } })
    .createTitle({ text: "Covid-19 and price collection - regional impact", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({ offset: -13, alongOffset: -40.9013671875, gap: 1 })
    .editTitle({ subtitle: "Number of useable prices in the LRPD." })
    .createLinePlot({
      x: { field: "dateMs", fieldType: "temporal" },
      y: { field: "pricesN", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [1514764800000, 1661990400000] })
    .editYScale({ domain: [0, 18000], zero: true })
    .encodeColor({ field: "region", fieldType: "nominal" })
    .editColorScale({ palette: "set1", domain: ["East Anglia", "East Midlands", "London", "North", "North West", "Northern Ireland", "Scotland", "South East", "South West", "Wales", "West Midlands", "Yorkshire & Humber"] })
    .editLineMark({ strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, offset: 7 } },
      title: { text: "date", fontSize: 11, offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7, labelMap: [{ value: 0, label: "0.0" }, { value: 2000, label: "2.0k" }, { value: 4000, label: "4.0k" }, { value: 6000, label: "6.0k" }, { value: 8000, label: "8.0k" }, { value: 10000, label: "10k" }, { value: 12000, label: "12k" }, { value: 14000, label: "14k" }, { value: 16000, label: "16k" }, { value: 18000, label: "18k" }] },
        values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000]
      },
      title: { text: "prices", fontSize: 11, offset: 35 }
    })
    .editXAxis({
      ticksAndLabels: { labels: { format: "%Y" } },
      title: { fontWeight: 700 }
    })
    .editYAxis({
      title: { fontWeight: 700 }
    })
    .createHorizontalGrid({ values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000, 18000] })
    .createVerticalGrid({ values: [1514764800000, 1546300800000, 1577836800000, 1609459200000, 1640995200000] })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "region",
        position: "bottom",
        columns: 2,
        labels: { fontSize: 10 },
        titleStyle: { fontSize: 11, fontWeight: 700 },
        symbol: { layers: [{ type: "line", length: 10, lineWidth: 1.5 }] }
      }
    });
}
