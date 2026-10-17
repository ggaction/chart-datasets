// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-dfae58344d5a524e, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 988,
      height: 680,
      margin: { left: 382, top: 5, right: 6, bottom: 75 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "count", fieldType: "quantitative" },
      y: { field: "field", fieldType: "nominal" },
      guides: false
    })
    .editBarMark({ stroke: false }).encodeBarWidth({ band: 1 })
    .editXScale({ domain: [0, 130000] })
    .editYScale({
      domain: [
        "id",
        "Flight Distance",
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
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20000, 40000, 60000, 80000, 100000, 120000],
        ticks: { length: 5 },
        labels: {
          fontSize: 24,
          fontFamily: "sans-serif",
          offset: 4,
          overlap: "allow",
          labelMap: [
            { value: 0, label: "0" },
            { value: 20000, label: "20,000" },
            { value: 40000, label: "40,000" },
            { value: 60000, label: "60,000" },
            { value: 80000, label: "80,000" },
            { value: 100000, label: "100,000" },
            { value: 120000, label: "120,000" }
          ]
        }
      },
      title: {
        text: "count",
        fontSize: 36,
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 56
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 24,
          fontFamily: "sans-serif",
          offset: 29,
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
        fontWeight: 700,
        fontFamily: "sans-serif",
        offset: 296
      }
    })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createGrid({ horizontal: false, vertical: { color: '#ddd', lineWidth: 1 } });
}