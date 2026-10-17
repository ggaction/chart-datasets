// DOCS: doc-cc4024999766e88b, doc-9a0f2eeed4bc9b31, doc-9e1fe774c8def920
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 916, height: 529, margin: { left: 5, top: 23, right: 186, bottom: 6 } })
    .editCanvas({ background: "whitesmoke" })
    .createData({ values: data })
    .createComputedData({
      id: "deathsPerMNum",
      as: "TotalDeathsPer1MPop_num",
      expression: { op: "toNumber", operand: { field: "TotalDeathsPer1MPop" } }
    })
    .createWindowData({
      id: "totalDeaths",
      operations: [{ op: "movingSum", field: "TotalDeathsPer1MPop_num", as: "Total_Deaths", frame: { preceding: 225, following: 225 } }]
    })
    .createComputedData({
      id: "percentOfTotal",
      as: "PercentOfTotal",
      expression: { op: "multiply", left: { op: "divide", left: { field: "TotalDeathsPer1MPop_num" }, right: { field: "Total_Deaths" } }, right: { constant: 100 } }
    })
    .createSummaryData({
      id: "continentDeaths",
      groupBy: "Continent",
      aggregates: [{ op: "sum", field: "PercentOfTotal", as: "sum_PercentOfTotal" }]
    })
    .createTitle({
      text: "How Much Each Continent Contributes To The Death Percentage?",
      offset: -8,
      titleStyle: { fontSize: 13, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .createPiePlot({
      category: "Continent",
      value: "sum_PercentOfTotal",
      guides: false
    })
    .editThetaScale({ domain: ["Africa", "Asia", "Europe", "Latin America and the Caribbean", "Northern America", "Oceania"] })
    .encodeColor({
      field: "Continent",
      scale: {
        domain: ["Africa", "Asia", "Europe", "Latin America and the Caribbean", "Northern America", "Oceania"],
        palette: "tableau10"
      }
    })
    .editCoordinate({ target: "polar", polarFrame: { radius: { unit: "px", value: 250 } } })
    .editTitle({ align: "center" })
    .editArcMark({ innerRadius: { unit: "px", value: 120 }, stroke: "black", opacity: 1 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "piePlot",
        position: "right",
        title: "Continent",
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black" },
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, stroke: "black", strokeWidth: 1.5 }] }
      }
    });
}