// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-9bb354f4e2d46693, doc-8a4f6f06e0d37d5e
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 533,
      height: 227,
      margin: { top: 10, right: 94, bottom: 37, left: 39 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: {
        field: "timestamp",
        fieldType: "temporal",
        scale: { domain: [1578015960000, 1578059580000], nice: false }
      },
      y: {
        field: "value",
        fieldType: "quantitative",
        scale: { domain: [0, 80], nice: false }
      },
      guides: false
    })
    .encodeColor({
      field: "variable",
      scale: {
        domain: ["arctic_circle", "latitude"],
        range: ["#4c78a8", "#f58518"]
      }
    })
    .editLineMark({ strokeWidth: 2, curve: "monotone" })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source-guide-glyphs",
        measurements: [
          { text: "02 AM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 },
          { text: "03 AM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 },
          { text: "04 AM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 },
          { text: "05 AM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 },
          { text: "06 AM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 },
          { text: "07 AM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 },
          { text: "08 AM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 },
          { text: "09 AM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 },
          { text: "10 AM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.359375 },
          { text: "11 AM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 27.625 },
          { text: "12 PM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.90625 },
          { text: "01 PM", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 28.90625 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "20", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "40", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "60", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "80", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.125 },
          { text: "arctic_circle", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 52.796875 },
          { text: "latitude", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 32.25 },
          { text: "angle", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 28.734375 }
        ]
      }
    })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888" },
          ticksAndLabels: {
            values: [
              1578016800000, 1578020400000, 1578024000000, 1578027600000,
              1578031200000, 1578034800000, 1578038400000, 1578042000000,
              1578045600000, 1578049200000, 1578052800000, 1578056400000
            ],
            ticks: { color: "#888" },
            labels: {
              fontSize: 10,
              fontFamily: "sans-serif",
              offset: 7,
              labelMap: [
                { value: 1578016800000, label: "02 AM" },
                { value: 1578020400000, label: "03 AM" },
                { value: 1578024000000, label: "04 AM" },
                { value: 1578027600000, label: "05 AM" },
                { value: 1578031200000, label: "06 AM" },
                { value: 1578034800000, label: "07 AM" },
                { value: 1578038400000, label: "08 AM" },
                { value: 1578042000000, label: "09 AM" },
                { value: 1578045600000, label: "10 AM" },
                { value: 1578049200000, label: "11 AM" },
                { value: 1578052800000, label: "12 PM" },
                { value: 1578056400000, label: "01 PM" }
              ]
            }
          },
          title: { text: "timestamp", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 30 }
        },
        y: {
          line: { color: "#888" },
          ticksAndLabels: {
            count: 5,
            ticks: { color: "#888" },
            labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
          },
          title: { text: "value", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 32 }
        }
      },
      grid: {
        horizontal: { count: 5, color: "#ddd" },
        vertical: {
          values: [
            1578016800000, 1578020400000, 1578024000000, 1578027600000,
            1578031200000, 1578034800000, 1578038400000, 1578042000000,
            1578045600000, 1578049200000, 1578052800000, 1578056400000
          ],
          color: "#ddd"
        }
      },
      legend: {
        position: "right",
        title: "angle",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        symbol: { length: 10, lineWidth: 1.5 }
      }
    });
}