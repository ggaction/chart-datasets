// DOCS: doc-b11b4627b143730d, doc-2bd5de4bd99e314a
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      width: 468,
      height: 255,
      margin: { left: 83, top: 5, right: 5, bottom: 50 }
    })
    .createData({ values: data })
    
    .createLinePlot({
      x: { field: "year", fieldType: "ordinal" },
      y: { field: "amount", aggregate: "sum" },
      guides: false
    })
    .encodeStroke({ target: "linePlot", value: "#4c78a8" })
  .encodeStrokeWidth({ target: "linePlot", value: 2 })
    .editXScale({
      type: "point",
      domain: [1991, 1992, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010]
    })
    .editYScale({ type: "linear", domain: [0, 160000000] })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        values: [1991, 1992, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: { text: "years", fontSize: 11, offset: 40 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 4,
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "total funds (million)",
        fontSize: 11,
        rotation: { value: -90, unit: "degrees" },
        offset: 68
      }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .createGrid({ horizontal: true })
    .editXAxisLine({ color: "#888" })
    .editXAxisTicks({ color: "#888" })
    .editXAxisLabels({ fontFamily: "sans-serif" })
    .editYAxisLine({ color: "#888" })
    .editYAxisTicks({ color: "#888" })
    .editYAxisLabels({ fontFamily: "sans-serif" })

    .editHorizontalGrid({ count: 5, color: "#ddd" });
}