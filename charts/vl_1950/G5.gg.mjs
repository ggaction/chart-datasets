// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-09938dc1d1987f31, doc-df1150b6f8af6f80
import { chart } from "ggaction";
import data from "./data.json";

const YEARS = ["1970","1971","1972","1973","1974","1975","1976","1977","1978","1979","1980","1981","1982","1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"];
const Y_TICKS = [0,500,1000,1500,2000,2500,3000,3500,4000,4500,5000,5500,6000];

export function buildChart() {
  return chart()
    .createCanvas({ width: 839, height: 777, margin: { left: 53, top: 27, right: 86, bottom: 50 } })
    .editCanvas({ background: "#FAFAFA" })
    .createData({ values: data })
    .filterData({ id: "selected", field: "Country", oneOf: ["DR Congo", "Thailand", "Myanmar"] })
    .createComputedData({ id: "gdpNum", as: "GDP_num", expression: { op: "toNumber", operand: { field: "GDP" } } })
    .createTitle({ text: "DR CONGO - The worst economic decline of the 20th century in perspective", titleStyle: { fontSize: 13, fontWeight: 700, color: "navy" }, offset: -13 })
    .editTitle({ alongOffset: -47 })
    .createLinePlot({
      x: { field: "Year", fieldType: "ordinal" },
      y: { field: "GDP_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: YEARS })
    .editYScale({ target: "linePlot", domain: [0, 6000] })
    .encodeColor({ field: "Country" })
    .editColorScale({ target: "linePlot", domain: ["DR Congo", "Myanmar", "Thailand"], palette: "tableau10" })
    .encodeGroup({ field: "Country" })
    .editLineMark({ strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "Year", fieldType: "ordinal" },
      y: { field: "GDP_num", fieldType: "quantitative" },
      guides: false
    })
    .encodePointRadius({ target: "scatterPlot", value: Math.sqrt(30) / 2 })
    .editPointMark({ target: "scatterPlot", opacity: 1 })
    .encodeColor({ target: "scatterPlot", field: "Country" })
    .editColorScale({ target: "scatterPlot", domain: ["DR Congo", "Myanmar", "Thailand"], palette: "tableau10" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: YEARS,
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" } }
      },
      title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 42 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: Y_TICKS,
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "GDP per capita, 2010 dollars", fontSize: 11, fontWeight: 700, offset: 41.0244140625 }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createLegend({
      title: "Country",
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    });
}