// DOCS: doc-b11b4627b143730d, doc-071c93dff3a5ea2e, doc-f30bfed200b50a98
// G1 minimal integrated: canvas + data + line facade (x,y,guides:false),
// then constant mark style, source grid family, and complete axes.
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return (
    chart()
      // Outer canvas from contract; margins preserved exactly (plot 200x200).
      .createCanvas({
        width: 251,
        height: 247,
        margin: { left: 44, top: 10, right: 7, bottom: 37 }
      })
      // Raw immutable dataset; no schema invented.
      .createData({ values: data })
      // Facade: exactly x, y, guides:false (3 top-level fields).
      .createLinePlot({
        x: { field: "date", fieldType: "temporal" },
        y: { field: "price", fieldType: "quantitative" },
        guides: false
      })
      // Source line constant style: stroke #4c78a8, strokeWidth 2.
      .editLineMark({ stroke: "#4c78a8", strokeWidth: 2 })
      .editXScale({ domain: [1325458800000, 1325473200000] })
      .editYScale({ domain: [0, 200] })
      // Complete axes first, then grid, preserving guide insertion order;
      // y title offset 35 clears three-digit labels within left 44.
      .createXAxis({
        ticksAndLabels: {
          values: [
            1325458800000,
            1325462400000,
            1325466000000,
            1325469600000,
            1325473200000
          ],
          ticks: {},
          labels: {
            fontSize: 10,
            offset: 7,
            format: "%b %d, %Y %H:%M",
            flush: true,
            labelMap: [
                { value: 1325462400000, label: "" },
                { value: 1325466000000, label: "" },
                { value: 1325469600000, label: "" }
              ]
          }
        },
        title: {
          text: "date (year-month-date-hours-minutes)",
          fontSize: 11,
          offset: 28
        }
      })
      .editXAxis({
        title: {
          fontWeight: "bold"
        }
      })
      .createYAxis({
        ticksAndLabels: {
          values: [0, 50, 100, 150, 200],
          ticks: {},
          labels: { fontSize: 10, offset: 7 }
        },
        title: {
          text: "price",
          fontSize: 11,
          offset: 35
        }
      })
      .editYAxis({
        title: {
          fontWeight: "bold"
        }
      })
      .createGrid({horizontal:true,vertical:true})
      .editHorizontalGrid({ color: "#ddd" })
.editVerticalGrid({ color: "#ddd" })
  );
}
