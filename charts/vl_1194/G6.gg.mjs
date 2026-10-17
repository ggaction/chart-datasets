// DOCS: doc-6c2c08869091f6a0, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 424,
      height: 390,
      margin: { left: 44, top: 40, right: 80, bottom: 50 }
    })
    .createData({ id: "access", values: data })
    .createSortedData({
      id: "countryOrder",
      sortBy: [{ field: "Country", order: "descending" }]
    })
    .createStackData({
      category: "Year",
      group: "Country",
      value: "Access to electricity (% of population)"
    })
    .createTitle({
      text: "Access to Electricity in East Africa",
      align: "left",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }
    })
    .editTitle({
      subtitle: "Access to Electricity (% of population) from 2000-2020, Source: World Bank",
      subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black" },
      offset: -7
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { lower: "Access to electricity (% of population)_start", upper: "Access to electricity (% of population)_end" },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({
      domain: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 350] })
    .encodeColor({ field: "Country" })
    .editColorScale({
      domain: ["Burundi", "Ethiopia", "Kenya", "Rwanda", "Somalia", "Tanzania", "Uganda"],
      palette: "tableau10"
    })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -Math.PI / 2, unit: "radians" }
        }
      },
      title: { text: "Year", fontSize: 11, offset: 39 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250, 300, 350],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Access to electricity (% of population)",
        fontSize: 11,
        offset: 35
      }
    })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editXAxisTitle({ fontWeight: 700, color: "black" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" } })
    .editYAxisTitle({ fontWeight: 700, color: "black" })
    .createGrid({
      horizontal: { scale: "y", color: "#ddd" }
    })
    .createLegend({
      title: "Country",
      labels: { fontSize: 10 },
      titleStyle: { fontSize: 11, fontWeight: 700 }
    });
}