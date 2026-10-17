// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 988,
      height: 680,
      margin: { top: 5, right: 6, bottom: 75, left: 382 }
    })
    .createData({ id: "fields", values: data })
    .filterData({
      id: "filtered",
      field: "count",
      predicate: { op: "lt", value: 1000 }
    })
    .createSortedData({
      id: "bars",
      source: "filtered",
      sortBy: [{ field: "count", order: "descending" }]
    })
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "field", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 500], zero: true })
    .editYScale({
      domain: [
        "Arrival Delay in Minutes",
        "Departure Delay in Minutes",
        "Age",
        "Seat comfort",
        "Departure/Arrival time convenient",
        "Food and drink",
        "Gate location",
        "Inflight wifi service",
        "Inflight entertainment",
        "Online support",
        "Ease of Online booking",
        "On-board service",
        "Leg room service",
        "Checkin service",
        "Cleanliness",
        "Online boarding",
        "Baggage handling",
        "Class",
        "satisfaction_v2",
        "Gender",
        "Customer Type",
        "Type of Travel"
      ],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editBarMark({ fill: "#4c78a8" })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      ticksAndLabels: {
        values: [0, 100, 200, 300, 400, 500],
        ticks: { length: 5 },
        labels: { fontSize: 24, offset: 5, flush: true }
      },
      title: { text: "count", fontSize: 36, offset: 57 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editXAxisTitle({ fontWeight: 700 })
    .createYAxis({
      ticksAndLabels: {
        values: [
          "Arrival Delay in Minutes",
          "Departure Delay in Minutes",
          "Age",
          "Seat comfort",
          "Departure/Arrival time convenient",
          "Food and drink",
          "Gate location",
          "Inflight wifi service",
          "Inflight entertainment",
          "Online support",
          "Ease of Online booking",
          "On-board service",
          "Leg room service",
          "Checkin service",
          "Cleanliness",
          "Online boarding",
          "Baggage handling",
          "Class",
          "satisfaction_v2",
          "Gender",
          "Customer Type",
          "Type of Travel"
        ],
        ticks: { length: 5 },
        labels: {
          fontSize: 24,
          offset: 25,
          maxWidth: 350,
          labelMap: [
            {
              value: "Departure/Arrival time convenient",
              label: "Departure/Arrival time conveni\u2026"
            }
          ]
        }
      },
      title: {
        text: "field",
        fontSize: 36,
        offset: 310,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({
      horizontal: false,
      vertical: {
        values: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500],
        color: "#ddd"
      }
    });
}