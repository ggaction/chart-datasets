import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-b11b4627b143730d, doc-2bd5de4bd99e314a, doc-76573a465e2b6a33

export function buildChart() {
  return chart()
    .createCanvas({ width: 336, height: 386, margin: { left: 29, top: 64, right: 7, bottom: 22 } })
    .createData({ values: data })
    .createComputedData({ id: "valueNum", as: "ValueNum", expression: { op: "toNumber", operand: { field: "Value" } } })
    .createLinePlot({
      x: { field: "TIME", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "ValueNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: [0, 1577836800000] })
    .editYScale({ domain: [0, 120] })
    .editLineMark({ strokeWidth: 2 })
    .encodeColor({
      field: "LOCATION"
    })
    .editColorScale({
      domain: ["AUS","AUT","BEL","CAN","CHE","CHL","COL","CRI","CZE","DEU","DNK","ESP","EST","FIN","FRA","GBR","GRC","HUN","IRL","ISL","ISR","ITA","JPN","KOR","LTU","LUX","LVA","MEX","NLD","NOR","NZL","POL","PRT","SVK","SVN","SWE","TUR","USA"],
      range: ["lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","black","lightgrey","lightgrey","green","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey","lightgrey"]
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 315532800000, 631152000000, 946684800000, 1262304000000, 1577836800000],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif", flush: true }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100, 120],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, fontFamily: "sans-serif" }
      },
      title: false
    })
    .createTitle({
      text: "Productivity, OECD countries",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({
      subtitle: "GDP per hour worked. US dollars, 1970-2020. Source: OECD\nLegend: UK = black, Ireland = green\n",
      gap: 1,
      offset: -9
    })
    .editTitle({
      titleStyle: { fontWeight: 700, color: "black" },
      subtitleStyle: { color: "black" }
    });
}