// DOCS: doc-b11b4627b143730d (createLinePlot), doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 408,
      height: 335,
      margin: { left: 24, top: 40, right: 84, bottom: 45 }
    })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "Date", fieldType: "temporal" },
      y: { field: "Value", fieldType: "quantitative" },
      guides: false
    })
    .encodeColor({ field: "Price Index" })
    .editColorScale({ palette: "paired" })
    .editLineMark({ strokeWidth: 2 })
    .editXScale({ domain: [599616000000, 1659312000000], nice: false })
    .editYScale({ domain: [-2, 14] })
    .createTitle({
      text: "Comparing two measures of inflation",
      titleStyle: { fontSize: 13, fontWeight: 700 }
    })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({
      subtitle: "CPI and RPI % change over 12 months, 1989-2022",
      subtitleStyle: { fontSize: 10, fontStyle: "italic" }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 0 },
        labels: {
          fontSize: 10,
          offset: 2,
          rotation: { value: 45, unit: "degrees" }
        },
        values: [
          631152000000, 788918400000, 946684800000,
          1104537600000, 1262304000000, 1420070400000,
          1577836800000
        ]
      },
      title: { text: "Year", fontSize: 11, offset: 35 }
    })
    .editXAxis({
      labels: { format: "%Y" },
      title: { fontWeight: 700 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: {},
        labels: { fontSize: 10, offset: 7 },
        values: [-2, 0, 2, 4, 6, 8, 10, 12, 14]
      },
      title: false
    })
    .createLegend({
      title: "Price Index",
      titleStyle: { fontSize: 11, fontWeight: 700 },
      labels: { fontSize: 10 }
    });
}
