// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

const xDomain = [
  "1", "10", "100", "11", "12", "13", "14", "15", "16", "17", "18", "19", "2",
  "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "3", "30", "31",
  "32", "33", "34", "35", "36", "37", "38", "39", "4", "40", "41", "42", "43",
  "44", "45", "46", "47", "48", "49", "5", "50", "51", "52", "53", "54", "55",
  "56", "57", "58", "59", "6", "60", "61", "62", "63", "64", "65", "66", "67",
  "68", "69", "7", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79",
  "8", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "9", "90",
  "91", "92", "93", "94", "95", "96", "97", "98", "99"
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 2049,
      height: 254,
      margin: { left: 44, top: 10, right: 5, bottom: 44 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "catX", fieldType: "ordinal" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .createScatterPlot({
      x: { field: "catX", fieldType: "ordinal" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ type: "point", domain: xDomain })
    .editYScale({ domain: [0, 100], nice: false, zero: false })
    .encodePointRadius({ value: 2.7386127875 })
    .editPointMark({ stroke: false })
    .createXAxis({
      ticksAndLabels: {
        labels: { fontSize: 10, offset: 7, rotation: { value: -Math.PI / 2, unit: "radians" } }
      },
      title: { text: "catX", fontSize: 11, offset: 35 }
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        labels: { fontSize: 10, offset: 7 }
      },
      title: { text: "y", fontSize: 11, offset: 35 }
    })
    .createHorizontalGrid({ color: "#ddd" });
}
