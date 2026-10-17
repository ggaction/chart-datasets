import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-3b660fabf78cdd08, doc-eb6e59db232dc6c0, doc-3558b809b504c100
export function buildChart() {
  return chart()
    .createCanvas({
      width: 668,
      height: 196,
      margin: { left: 79, top: 5, right: 109, bottom: 111 }
    })
    .createData({ values: data })
    .filterData({ id: "rightFoot", field: "Foot", oneOf: ["Right"] })
    .createComputedData({
      id: "salaryNum",
      as: "SalaryNum",
      expression: { op: "toNumber", operand: { field: "Salary" } }
    })
    .createHeatmap({
      x: {
        field: "Country",
        fieldType: "nominal"
      },
      y: {
        field: "Position",
        fieldType: "nominal"
      },
      guides: false
    })
    .editXScale({
      domain: ["Albania","Austria","Belgium","Croatia","Czech Republic","England","France","Germany","Hungary","Iceland","Italy","Northern Ireland","Poland","Portugal","Republic of Ireland","Romania","Russia","Slovakia","Spain","Sweden","Switzerland","Turkey","Ukraine","Wales"],
      paddingInner: 0,
      paddingOuter: 0
    })
    .editYScale({
      domain: ["Defender","Forward","Goalkeeper","Midfielder"],
      paddingInner: 0,
      paddingOuter: 0
    })
    .encodeColor({ field: "SalaryNum", fieldType: "quantitative" })
    .editColorScale({
      domain: [100000, 75000000],
      palette: "yellowgreenblue",
      interpolate: "hcl"
    })
    .editRectMark({ stroke: "none", strokeWidth: 0 })
    .createXAxis({
      ticksAndLabels: {
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: {
        text: "Country",
        fontSize: 11,
        offset: 94
      }
    })
    .editXAxis({
      ticksAndLabels: { labels: { fontFamily: "sans-serif" } },
      title: { fontWeight: "bold" }
    })
    .createYAxis({
      ticksAndLabels: {
        labels: { fontSize: 10, offset: 7 }
      },
      title: {
        text: "Position",
        fontSize: 11,
        offset: 65
      }
    })
    .editYAxis({
      ticksAndLabels: { labels: { fontFamily: "sans-serif" } },
      title: { fontWeight: "bold" }
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        title: "Salary",
        titleStyle: { fontSize: 11, fontWeight: "bold", fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif", format: ",.0f" },
        gradient: { length: 80 },
        position: "right"
      }
    });
}