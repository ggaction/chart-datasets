// DOCS: doc-5d974e8fdcb4f774, doc-9f1e9ae3b82a4178, doc-18627fd264d621fc
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 444, height: 536, margin: { top: 40, right: 11, bottom: 146, left: 83 } })
  .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createData({ values: data })
    .createComputedData({ id: "dated", as: "YearEpoch", expression: { op: "parseTime", operand: { field: "Year" } } })
    .createSortedData({
      id: "stackOrder",
      sortBy: [
        { field: "Country Name", order: "descending" },
        { field: "YearEpoch", order: "ascending", temporalUnit: "timestamp" }
      ]
    })
    .createStackData({ category: "YearEpoch", group: "Country Name", value: "Urban Population" })
    .createAreaPlot({
      x: { field: "YearEpoch", fieldType: "temporal", temporalUnit: "timestamp" },
      y: { lower: "Urban Population_start", upper: "Urban Population_end" },
      guides: false
    })
    .editXScale({ type: "time", domain: [-315619200000, 1609459200000] })
    .editYScale({ domain: [0, 350000000], zero: true })
    .encodeGroup({ field: "Country Name" })
    .encodeColor({
      field: "Country Name",
      palette: "category10",
      scale: { domain: ["Argentina", "United Arab Emirates", "United States"] }
    })
    .editAreaMark({ opacity: 1 })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [-315619200000, 0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", flush: true, color: "black" }
          },
          title: { text: "Year", fontSize: 11, fontWeight: "bold", offset: 28, color: "black" }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [0, 50000000, 100000000, 150000000, 200000000, 250000000, 300000000, 350000000],
            ticks: { length: 5, color: "#888" },
            labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", format: ",.0f", color: "black" }
          },
          title: { text: "Ubran Population", fontSize: 11, fontWeight: "bold", offset: 74, color: "black" }
        }
      },
      grid: false,
      legend: {
        columns: 2, position: "bottom", offset: 50,
        title: "Country Name",
        labels: { fontSize: 10, color: "black" },
        titleStyle: { fontSize: 11, fontWeight: "bold", color: "black" },
        border: { background: "#FcFdFd", color: "transparent", lineWidth: 0 }
      }
    })
    .createTitle({
      text: "Urban Population in Argentina, US and UAE",
      offset: -12,
      titleStyle: { fontSize: 13, fontWeight: "bold", color: "black" }
    })
    .editTitle({ alongOffset: -77.6103515625 })
    .editTitle({
      subtitle: "From 1960-2022. Source: World Bank",
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 3
    });
}