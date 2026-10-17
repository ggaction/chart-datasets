// DOCS: doc-e790db38fc2a278a (createScatterPlot), doc-dfae58344d5a524e (createCanvas), doc-2bd5de4bd99e314a (Basic Charts)
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 228,
      height: 231,
      margin: { left: 18, top: 9, right: 10, bottom: 22 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: { field: "x", fieldType: "quantitative" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .createGuides({
      legend: false,
      axes: {
        x: { title: false, ticksAndLabels: { labels: { fontSize: 10, offset: 7 } } },
        y: { title: false, ticksAndLabels: { labels: { fontSize: 10, offset: 6 } } }
      }
    , grid: { horizontal: { color: '#ddd' } }})
    .editXScale({ domain: [0, 14] })
    .editYScale({ domain: [0, 9] })
    .encodePointRadius({ value: 4.47213595499958 })
    .editPointMark({
      fill: "#4c78a8",
      opacity: 0.7
    })
    .createVerticalGrid({color:'#ddd'});
}
