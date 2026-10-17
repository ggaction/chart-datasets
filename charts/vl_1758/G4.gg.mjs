// DOCS: actual delivered doc-* IDs.
// doc-e790db38fc2a278a createScatterPlot
// doc-2e6240c00cb297cc createScatterPlot
// doc-847cb1497a53c317 temporal unit + position domain/ticks example
// doc-2fcdfbdfb290e440 scale/axis edit workflow example

import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 850,
      height: 254,
      margin: { left: 33, top: 17, right: 17, bottom: 37 }
    })
    .createData({ id: "source", values: data })
    .createScatterPlot({
      x: {
        field: "date",
        fieldType: "temporal"
      },
      y: {
        field: "value",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editPointMark({
      fill: "#4c78a8",
      opacity: 0.7,
      stroke: false
    })
    .encodePointRadius({ value: 11.180339887498949 })
    .editXScale({ domain: [1509228000000, 1509249600000] })
    .editYScale({ domain: [0, 7], zero: false })
    .createHorizontalGrid({ color: "#ddd" })
    .createVerticalGrid({ color: "#ddd" })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        values: [
          1509231600000,
          1509235200000,
          1509238800000,
          1509242400000,
          1509246000000
        ],
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          format: "%d %b %H:%M"
        }
      },
      title: {
        text: "date (year-month-date-hours)",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        offset: 28
      }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        values: [0, 1, 2, 3, 4, 5, 6, 7],
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7
        }
      },
      title: {
        text: "value",
        fontSize: 11,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        offset: 26
      }
    });
}