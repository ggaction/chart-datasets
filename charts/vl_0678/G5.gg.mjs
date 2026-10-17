// DOCS: doc-e790db38fc2a278a, doc-2e6240c00cb297cc, doc-7f2c254224fc4908, doc-48c72317a1a99e17
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 5324,
      height: 3152,
      margin: { left: 310, top: 2715, right: 4514, bottom: 37 }
    })
    .createData({ values: data })
    .filterData({
      id: "validRawOda",
      field: "Net official development assistance and official aid received (current US$)",
      noneOf: [".."]
    })
    .filterData({ id: "validRawGdp", field: "GDP per capita (current US$)", noneOf: [".."] })
    .createComputedData({
      id: "odaNum",
      as: "odaNum",
      expression: {
        op: "toNumber",
        operand: { field: "Net official development assistance and official aid received (current US$)" }
      }
    })
    .createComputedData({
      id: "gdpNum",
      as: "gdpNum",
      expression: { op: "toNumber", operand: { field: "GDP per capita (current US$)" } }
    })
    .createComputedData({
      id: "popNum",
      as: "popNum",
      expression: { op: "toNumber", operand: { field: "Population, total" } }
    })
    .createScatterPlot({
      x: { field: "odaNum", fieldType: "quantitative" },
      y: { field: "gdpNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 1000000000], nice: false })
    .editYScale({ domain: [300, 2200], nice: false })
    .encodeSize({ field: "popNum", fieldType: "quantitative" })
    .editSizeScale({ target: "scatterPlot", domain: [0, 1411100000], range: [25 * Math.PI, 300 * Math.PI] })
    .editPointMark({ fill: "orange", opacity: 0.7 })
    .createTitle({
      text: "2021 ODA inflows plotted against GDP per capita, with population given by circle size",
      titleStyle: { fontSize: 13, fontWeight: 700 },
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .editTitle({
      subtitle: "ODA (current US$) (x), GDP per capita (y)\nSize of points based on popluation\n",
      offset: -12,
      gap: 1
    })
    .editTitle({ alongOffset: -304 })
    .applyTextMetrics({profile:{schemaVersion:1,id:"source-glyphs",measurements:[{"text":"0","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":5.5625},{"text":"100,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":55.625},{"text":"200,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":55.625},{"text":"300,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":55.625},{"text":"400,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":55.625},{"text":"500,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":55.625},{"text":"600,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":55.625},{"text":"700,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":55.625},{"text":"800,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":55.625},{"text":"900,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":55.625},{"text":"1,000,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":63.953125},{"text":"400","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":16.6875},{"text":"600","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":16.6875},{"text":"800","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":16.6875},{"text":"1,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":25.03125},{"text":"1,200","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":25.03125},{"text":"1,400","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":25.03125},{"text":"1,600","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":25.03125},{"text":"1,800","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":25.03125},{"text":"2,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":25.03125},{"text":"2,200","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":25.03125},{"text":"1,200,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":63.953125},{"text":"1,400,000,000","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"normal","width":63.953125},{"text":"Prison Rate","fontFamily":"sans-serif","fontSize":11,"fontWeight":700,"fontStyle":"normal","width":61.140625},{"text":"2021 ODA inflows plotted against GDP per capita, with population given by circle size","fontFamily":"sans-serif","fontSize":13,"fontWeight":700,"fontStyle":"normal","width":527.359375},{"text":"ODA (current US$) (x), GDP per capita (y)","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"italic","width":186.5576171875},{"text":"Size of points based on popluation","fontFamily":"sans-serif","fontSize":10,"fontWeight":400,"fontStyle":"italic","width":153.115234375}]}})
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 100000000, 200000000, 300000000, 400000000, 500000000, 600000000, 700000000, 800000000, 900000000, 1000000000],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, flush: true, labelMap: [{ value: 100000000, label: "" }, { value: 300000000, label: "" }, { value: 500000000, label: "" }, { value: 700000000, label: "" }, { value: 900000000, label: "" }] }
      },
      title: {
        text: "Net official development assistance and official aid received (current US$)",
        fontSize: 11,
        offset: 30
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: {
        text: "GDP per capita (current US$)",
        fontSize: 11,
        offset: 40
      }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { format: ",.0f" }
      },
      title: { fontWeight: 700 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { format: ",.0f" }
      },
      title: { fontWeight: 700 }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "scatterPlot",
        channels: ["size"],
        title: "Prison Rate",
        values: [0, 200000000, 400000000, 600000000, 800000000, 1000000000, 1200000000, 1400000000],
        labels: { fontSize: 10, format: ",.0f" },
        titleStyle: { fontSize: 11, fontWeight: 700 }
      }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "size",
      symbol: { fill: "orange", opacity: 0.7, stroke: "transparent", strokeWidth: 0 }
    });
}