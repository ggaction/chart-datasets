// DOCS: doc-6c2c08869091f6a0 (createBarPlot), doc-b257fb08998617a5, doc-bedf05337affd6f4, doc-333a87e52954985d, doc-7a5eff3c73a7e7f9
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 599,
      height: 648,
      margin: { left: 39, top: 10, right: 60, bottom: 138 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "category",
        fieldType: "nominal"
      },
      y: {
        field: "value",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({
      domain: [
        "GDP (PPP)",
        "GDP per capita",
        "Government expenditure",
        "Population",
        "Voice and Accountability"
      ],
      paddingInner: 0.2,
      paddingOuter: 0.2
    })
    .editYScale({ domain: [0, 70] })
    .encodeColor({
      field: "group",
      layout: "group"
    })
    .editColorScale({
      domain: ["Low", "Mid", "High"],
      range: ["#4c78a8", "#f58518", "#e45756"]
    })
    .encodeXOffset({
      field: "group",
      fieldType: "nominal",
      scale: {
        domain: ["High", "Low", "Mid"],
        paddingInner: 0,
        paddingOuter: 0
      }
    })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: 1.5 * Math.PI, unit: "radians" }
        }
      },
      title: {
        text: "category",
        fontSize: 11,
        offset: 128
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Total points in World Cup finals",
        fontSize: 11,
        offset: 28
      }
    })
    .editXAxisLabels({
      fontFamily: "sans-serif"
    })
    .editXAxisTitle({
      fontWeight: "bold",
      fontFamily: "sans-serif"
    })
    .editYAxisLabels({
      fontFamily: "sans-serif"
    })
    .editYAxisTitle({
      fontWeight: "bold",
      fontFamily: "sans-serif"
    })
    .createLegend({
      title: "Level"
    });
}