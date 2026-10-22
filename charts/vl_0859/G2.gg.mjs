import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    // DOCS: doc-b9261a4b2909a353 createLinePlot facade
    .createCanvas({
      plot: { width: 200, height: 200 },
      margin: { left: 45, top: 104, right: 12, bottom: 56 },
      plotBorder: {},
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0859-source-fonts-full-v1",
        measurements: [
          { text: "Category", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 47.67919921875 },
          { text: "Books newspapers and stationary", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 150.087890625 },
          { text: "Clothing", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.689453125 },
          { text: "Flowers plants seeds fertilisers and pet foods", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 200.09765625 },
          { text: "Specialist food stores", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 95.048828125 },
          { text: "Sports equipment games and toys", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 151.7529296875 },
          { text: "Supermarkets", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 62.24609375 },
          { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.24609375 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.24609375 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.24609375 },
          { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.24609375 },
          { text: "Date", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 23.84228515625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "120", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "140", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "Volume of Spending", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 105.5205078125 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
          { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "Volume of Spending", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 124.7060546875 },
          { text: "Retail Sales Data showing the volume of spending by different sectors", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 309.9951171875 },
          { text: "Source: ONS", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 58.9111328125 },
        ],
      },
    })
    .createData({ values: data })
    .createComputedData({
      id: "numeric",
      as: "numericValue",
      expression: { op: "toNumber", operand: { field: "Value" } },
    })
    // DOCS: doc-b9261a4b2909a353 createLinePlot
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "numericValue", scale: { zero: true, nice: { count: 10 } } },
      guides: false,
    })
    .editLineMark({ stroke: "#557A95", strokeWidth: 2 })
    .createAxes({
      x: {
        offset: 6,
        line: { color: "#888" },
        ticksAndLabels: {
          ticks: { color: "#888", length: 5 },
          labels: {
            fontSize: 10,
            color: "black",
            rotation: { value: 45, unit: "degrees" },
            offset: 7.776226556913753,
            alongOffset: -3.3117478741648254,
            format: "%Y",
          },
        },
        title: { text: "Date", fontSize: 11, fontWeight: 700, color: "black", offset: 40.37955474853516, alongOffset: 0.5 },
      },
      y: {
        line: { color: "#888" },
        ticksAndLabels: {
          rounding: "nearest",
          ticks: { color: "#888", length: 5 },
          labels: { fontSize: 10, color: "black", offset: 6.5, alongOffset: 0.890625 },
        },
        title: { text: "Volume of Spending", fontSize: 11, fontWeight: 700, color: "black", offset: 32.1064453125, alongOffset: 0.5 },
      },
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .facet({
      field: "Category",
      values: [
        "Books newspapers and stationary",
        "Clothing",
        "Flowers plants seeds fertilisers and pet foods",
        "Specialist food stores",
        "Sports equipment games and toys",
        "Supermarkets",
      ],
      headers: { fontSize: 10, fontWeight: 400, color: "black", offset: 15.609375 },
    })
    .editFacetScales({ y: "independent" })
    // DOCS: doc-06d1dfbd494a77d9 facets.md spacing between plots
    .editCompositionLayout({ spacing: "plot", gap: 63, topLane: "shared" })
    .editFacetHeaders({
      role: "column",
      title: { text: "Category", fontSize: 11, fontWeight: 700, color: "black", offset: 45.421875, alongOffset: -18.5 },
    })
    .createTitle({
      text: "Volume of Spending",
      subtitle: "Retail Sales Data showing the volume of spending by different sectors\nSource: ONS",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontWeight: 400, fontStyle: "italic", color: "black" },
      gap: 3.34375,
      offset: -2.953125,
    })
    .editTitle({ align: "left", alongOffset: -39.6845703125 });
}