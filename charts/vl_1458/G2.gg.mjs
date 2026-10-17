// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 514,
      height: 347,
      margin: { top: 10, right: 75, bottom: 37, left: 39 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "longitude", fieldType: "quantitative" },
      y: { field: "latitude", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "country" })
    .editXScale({ domain: [-140, -50] })
    .editYScale({ domain: [25, 60] })
    .editColorScale({ domain: ["Canada", "USA"], range: ["red", "blue"] })
    .encodePointRadius({ value: 2.23606797749979 })
    .editPointMark({ opacity: 0.6 })
    .createGuides({
      axes: {
        x: {
          line: {},
          ticksAndLabels: {
            count: 10,
            ticks: {},
            labels: { fontSize: 10, offset: 7, flush: true }
          },
          title: { text: "longitude", fontSize: 11, fontWeight: 700, offset: 28 }
        },
        y: {
          line: {},
          ticksAndLabels: {
            count: 8,
            ticks: {},
            labels: { fontSize: 10, offset: 7 }
          },
          title: { text: "latitude", fontSize: 11, fontWeight: 700, offset: 32 }
        }
      },
      grid: { horizontal: { color: "#ddd" }, vertical: { color: "#ddd" } },
      legend: {
        position: "right",
        title: "country",
        titleStyle: { fontSize: 11, fontWeight: 700 },
        labels: { fontSize: 10 }
      }
    });
}