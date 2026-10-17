// DOCS: doc-01372de778fb8f70 (area flow: createCanvas -> createData -> encodeColor -> createGuides)
// NOTE: measured 4-key createTitle requirement (text/align/offset/titleStyle all geometrically essential:
// source title is centered at plot center x=264, 13px bold, top bounds 3..18 within 27px top margin).
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 561,
      height: 264,
      margin: { left: 64, top: 27, right: 97, bottom: 37 }
    })
    .createData({ values: data })
    .createSortedData({ id: "sourceOrder", sortBy: [{ field: "major_release", order: "descending" }, { field: "month", order: "ascending" }] })
      .createCompleteData({ id: "complete", key: "month", groupBy: "major_release" })
      .createComputedData({ id: "zeroDownload", as: "downloadFilled", expression: { op: "coalesce", operands: [{ field: "num_downloads" }, { constant: 0 }] } })
      .createStackData({ category: "month", group: "major_release", value: "downloadFilled" })
    .createAreaPlot({
      x: {
        field: "month",
        fieldType: "temporal"
      },
      y: {
        lower: "downloadFilled_start",
        upper: "downloadFilled_end"
      },
      guides: false
    })
    .editXScale({ domain: [1583020800000, 1682899200000] })
    .editYScale({ domain: [0, 500000] })
    .encodeGroup({ field: "major_release" })
    .encodeColor({
      field: "major_release",
      fieldType: "nominal"
    })
    .editColorScale({
      domain: ["0", "1", "2", "3"],
      range: ["#4c78a8", "#f58518", "#e45756", "#72b7b2"]
    })
    .editAreaMark({ opacity: 1 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [
          1585699200000, 1593561600000, 1601510400000,
          1609459200000, 1617235200000, 1625097600000, 1633046400000,
          1640995200000, 1648771200000, 1656633600000, 1664582400000,
          1672531200000, 1680307200000
        ],
        ticks: { color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7,
          labelMap: [
            { value: 1585699200000, label: "April" },
            { value: 1593561600000, label: "July" },
            { value: 1601510400000, label: "October" },
            { value: 1609459200000, label: "2021" },
            { value: 1617235200000, label: "April" },
            { value: 1625097600000, label: "July" },
            { value: 1633046400000, label: "October" },
            { value: 1640995200000, label: "2022" },
            { value: 1648771200000, label: "April" },
            { value: 1656633600000, label: "July" },
            { value: 1664582400000, label: "October" },
            { value: 1672531200000, label: "2023" },
            { value: 1680307200000, label: "April" }
          ]
        }
      },
      title: { text: "Date", fontSize: 11, fontWeight: 700, offset: 28 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        values: [0, 100000, 200000, 300000, 400000, 500000],
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: { text: "Downloads", fontSize: 11, fontWeight: 700, offset: 58 }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({
      title: "Major Release",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    })
    .createTitle({
      text: "Monthly downloads by Major Release",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      offset: -13
    })
    .editTitle({
      align: "center"
    })
  .applyTextMetrics({
  profile: {
    schemaVersion: 1,
    id: "measured-numeric-axis-labels",
    measurements: [
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 5.5615234375 },
      { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.1474609375 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.1474609375 },
      { text: "300,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.1474609375 },
      { text: "400,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.1474609375 },
      { text: "500,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.1474609375 }
    ]
  }
})
.editYAxis({ title: { offset: 51.5693359375 } });
}