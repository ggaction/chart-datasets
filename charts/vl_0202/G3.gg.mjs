import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-8a4f6f06e0d37d5e, doc-2a31551f1566fc6b

const YEARS = [
  820454400000, 883612800000, 946684800000, 1009843200000,
  1072915200000, 1136073600000, 1199145600000, 1262304000000
];
const GBILLION = [0, 1000000000, 2000000000, 3000000000, 4000000000, 5000000000, 6000000000];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 376,
      height: 253,
      margin: { top: 10, right: 135, bottom: 43, left: 41 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "grossNum",
      as: "grossNum",
      expression: { op: "toNumber", operand: { field: "Worldwide Gross" } }
    })
    .createSummaryData({
      id: "byYearGenre",
      groupBy: ["Release Year", "Genre"],
      aggregates: [{ field: "grossNum", op: "sum", as: "sumGross" }]
    })
    .createLinePlot({
      x: {
        field: "Release Year",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "sumGross",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [820454400000, 1262304000000] })
    .editYScale({ domain: [0, 6000000000] })
    .encodeColor({
      field: "Genre",
      fieldType: "nominal"
    })
    .editColorScale({
      domain: [
        "Action", "Adventure", "Black Comedy", "Comedy", "Concert",
        "Documentary", "Drama", "Horror", "Musical", "Romantic Comedy",
        "Thriller", "Western"
      ],
      range: [
        "#4c78a8", "#f58518", "#e45756", "#72b7b2", "#54a24b",
        "#eeca3b", "#b279a2", "#ff9da6", "#9d755d", "#bab0ac"
      ]
    })
    .createAxes({
      x: {
          line: {},
          ticksAndLabels: {
            values: YEARS,
            ticks: { length: 5 },
            labels: {
              flush: true,
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              labelMap: [
              { value: 820454400000, label: "1996" },
              { value: 883612800000, label: "" },
              { value: 946684800000, label: "2000" },
              { value: 1009843200000, label: "" },
              { value: 1072915200000, label: "2004" },
              { value: 1136073600000, label: "" },
              { value: 1199145600000, label: "2008" },
              { value: 1262304000000, label: "" }
            ]
            }
          },
          title: {
            text: "Release Year",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "sans-serif",
            offset: 30
          }
      },
      y: {
          line: {},
          ticksAndLabels: {
            values: GBILLION,
            ticks: { length: 5 },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              labelMap: [
                { value: 0, label: "0G" },
                { value: 1000000000, label: "1G" },
                { value: 2000000000, label: "2G" },
                { value: 3000000000, label: "3G" },
                { value: 4000000000, label: "4G" },
                { value: 5000000000, label: "5G" },
                { value: 6000000000, label: "6G" }
              ]
            }
          },
          title: {
            text: "Sum of Worldwide Gross",
            fontSize: 11,
            fontWeight: 700,
            fontFamily: "sans-serif",
            offset: 29.33984375
          }
      }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } })
    .createLegend({
        title: "Genre",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" }
      });
}