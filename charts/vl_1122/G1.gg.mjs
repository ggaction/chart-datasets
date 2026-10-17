// DOCS: doc-6c2c08869091f6a0
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  const years = ["1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021","2022"];
  return chart()
    .createCanvas({ width: 1280, height: 342, margin: { left: 29, top: 47, right: 5, bottom: 35 } })
    .createData({ values: data })
    .createComputedData({
      id: "billionsData",
      as: "billions",
      expression: { op: "divide", left: { op: "toNumber", operand: { field: "Totals" } }, right: { constant: 1000000000 } }
    })
    .createBarPlot({
      x: { field: "Year", fieldType: "nominal", scale: { domain: years, paddingInner: 0.1, paddingOuter: 0.05 } },
      y: { field: "billions", fieldType: "quantitative", scale: { domain: [0, 110] } },
      guides: false
    })
    .editBarMark({ fill: "#000f71" })
    .encodeBarWidth({ band: 1 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: ["1984", "1990", "1995", "2000", "2005", "2010", "2015", "2020"],
        ticks: { color: "grey", lineWidth: 1.3, length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7, rotation: Math.PI / 4 }
      },
      title: false
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 20, 40, 60, 80, 100],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
      },
      title: false
    })
    .createTitle({
      text: "IMF lending outstanding",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ offset: -9, alongOffset: -23.68, gap: 1 })
    .editTitle({ subtitle: "Credit outstanding to all members, SDRs (billions)\nSource: IMF" });
}
