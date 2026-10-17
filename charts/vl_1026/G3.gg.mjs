// DOCS: doc-b11b4627b143730d, doc-7f2c254224fc4908, doc-d9e3b1b7add0d2c6
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 726, height: 490, margin: { left: 39, top: 40, right: 87, bottom: 50 } })
    .editCanvas({ background: "#fefef8" })
    .createData({ values: data })
    .createComputedData({ id: "dutyNum", as: "StampDutyN", expression: { op: "toNumber", operand: { field: "StampDuty" } } })
    .createTitle({
      text: "Stamp Duty",
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({ subtitle: "Source: Stampdutyrates.co.uk", align: "center", offset: -12 })
    .createLinePlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "StampDutyN" },
      guides: false
    })
    .editXScale({ target: "linePlot", domain: ["1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"] })
    .editYScale({ target: "linePlot", domain: [0, 12] })
    .editLineMark({ strokeWidth: 2 })
    .encodeColor({ field: "Bracket", fieldType: "nominal" })
    .editColorScale({ target: "linePlot", domain: ["100k", "1m", "200k", "2m", "300k", "500k"], palette: "tableau10" })
    .createScatterPlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "StampDutyN" },
      guides: false
    })
    
    
    .encodePointRadius({ value: Math.sqrt(30) / 2, target: "scatterPlot" })
    .encodeColor({ field: "Bracket", target: "scatterPlot" })
    
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          ticks: {},
          labels: { fontSize: 10, offset: 7, rotation: { value: -90, unit: "degrees" } }
        },
        title: { text: "Year", fontSize: 11, fontWeight: 700, offset: 43 }
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          ticks: {},
          labels: { fontSize: 10, offset: 7 }
        },
        title: { text: "Stamp Duty", fontSize: 11, fontWeight: 700, offset: 26 }
      }
    })
    .createGuides({
      axes: false,
      grid: { horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false },
      legend: {
        title: "House Price",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5 }] },
        position: "right"
      }
    });
}