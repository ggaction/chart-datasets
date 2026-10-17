// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 542,
      height: 489,
      margin: { top: 52, right: 128, bottom: 37, left: 64 }
    })
    .createData({ values: data })
    .createComputedData({
      id: "gdpNum",
      as: "GDP_CAP_num",
      expression: { op: "toNumber", operand: { field: "GDP_CAP" } }
    })
    .createComputedData({
      id: "refNum",
      as: "refugees_asylum_num",
      expression: { op: "toNumber", operand: { field: "refugees_asylum" } }
    })
    .createScatterPlot({
      x: { field: "refugees_asylum_num", fieldType: "quantitative" },
      y: { field: "GDP_CAP_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 2000000] })
    .editYScale({ domain: [0, 200000] })
    .encodeColor({
      field: "continent",
      fieldType: "ordinal"
    })
    .editColorScale({
      palette: "set1",
      domain: ["", "Africa", "Asia", "Europe", "North America", "Oceania", "South America"]
    })
    .encodePointRadius({ value: 6.123724356957945 })
    .encodeOpacity({ value: 0.6 })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 9,
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, format: ",", flush: true }
      },
      title: { text: "Refugees and Asylum Seekers", fontSize: 11, fontWeight: 700, offset: 27 }
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 10,
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, format: "," }
      },
      title: {
        text: "GDP per Capita, US$",
        fontSize: 11,
        fontWeight: 700,
        offset: 52,
        rotation: { value: -90, unit: "degrees" }
      }
    })
    .createGrid({ horizontal: true, vertical: true })
    .editHorizontalGrid({ color: "#ddd" })
    .editVerticalGrid({ color: "#ddd" })
    .createLegend({ position: "right", title: false })
    .editLegend({ labels: { fontSize: 10 }, symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", symbol: { opacity: 0.6 } })
    .editLegendBlock({ target: "scatterPlot", channel: "color", labelMap: [{ value: "", label: "" }] })
    .createTitle({
      text: "2020 Number of refugees and asylum seekers hosted, plotted against wealth of nation",
      titleStyle: { fontSize: 13 },
      alongOffset: -58.1474609375
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      titleStyle: { fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "Refugees and Asylum seekers (x), and GDP per capita (US$)\nSource: UNHCR, World Bank API",
      gap: 3,
      offset: -4
    });
}