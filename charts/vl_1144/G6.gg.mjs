// DOCS: doc-b11b4627b143730d, doc-2bd5de4bd99e314a, doc-d609b428b7232390
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 505,
      height: 400,
      margin: { left: 44, top: 10, right: 121, bottom: 50 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "Year", fieldType: "ordinal" },
      y: { field: "seats", fieldType: "quantitative" },
      guides: false
    })
    .editLineMark({ strokeWidth: 2 })
    .encodeColor({
      field: "Party",
      fieldType: "nominal"
    })
    .editColorScale({
      domain: ["Conservative", "Labour", "Liberal Democrats"],
      range: ["#115DA8", "red", "#FAA61A"]
    })
    .editXScale({
      domain: [1918, 1922, 1923, 1924, 1929, 1931, 1935, 1945, 1950, 1951,
        1955, 1959, 1964, 1966, 1970, 1974, 1979, 1983, 1987, 1992,
        1997, 2001, 2005, 2010, 2015, 2017, 2019]
    })
    .editYScale({ domain: [0, 550] })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd" })
    .createXAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7, rotation: -Math.PI / 2, overlap: "allow" }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 40 }
    })
    .createYAxis({
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 },
        values: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550]
      },
      title: { text: "Number of Seats", fontSize: 11, fontWeight: 700, offset: 33 }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .createGuides({ axes: false, grid: false, legend: { title: "Weather type", labels: { fontSize: 10 }, titleStyle: { fontSize: 11, fontWeight: 700 }, symbol: { length: 15, lineWidth: 2 } } })
    ;
}