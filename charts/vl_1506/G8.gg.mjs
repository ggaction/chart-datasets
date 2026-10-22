// DOCS ID: doc-88d1bce477433d8d
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: { width: 840, height: 300 },
      margin: { left: 40, top: 23, right: 122, bottom: 110 },
      plotBorder: {}
    })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "author" },
      y: { field: "count", stack: "zero" },
      guides: false
    })
    .editXScale({
      domain: ["Bhavay192","BvB93","Firestar-Reimu","FrozenBob","HaoZeke","Mukulikaa","NeilGirdhar","NickleDave","WarrenWeckesser","Yutaro-Sanada","abatomunkuev","adeak","bashtage","bilderbuchi","charris","erip","evanmiller","fangq","grlee77","gwerbin","h-vetinari","hay","henryiii","isuruf","jamiecook","jbrockmendel","jocelynbaduria","ma-sadeghi","matteobe","mattip","melissawm","mjvbz","mlazzarin","ogrisel","r-devulap","rgommers","rkern","rossbar","seberg","serge-sans-paille","stefanv","tlkahn"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    .editYScale({ domain: [0, 26] })
    .encodeBarWidth({ band: 1 })
    .editBarMark({ stroke: false })
    .encodeColor({
      field: "authorAssociation",
      scale: {
        domain: ["MEMBER", "CONTRIBUTOR", "COLLABORATOR", "NONE"],
        range: [
          "rgb(211.82745098039214, 211.82745098039214, 211.82745098039214)",
          "rgb(166.98562091503268, 229.89803921568628, 166.98562091503268)",
          "rgb(96.37647058823529, 192.75294117647059, 96.37647058823529)",
          "rgb(0.0, 100.3921568627451, 0.0)"
        ]
      }
    })
    .createTitle({
      text: "Top 50 commentors for numpy in the last 10 days",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      offset: -12.046875
    })
    .editTitle({ align: "center" })
    .createXAxis({
      ticksAndLabels: {
        values: ["Bhavay192","BvB93","Firestar-Reimu","FrozenBob","HaoZeke","Mukulikaa","NeilGirdhar","NickleDave","WarrenWeckesser","Yutaro-Sanada","abatomunkuev","adeak","bashtage","bilderbuchi","charris","erip","evanmiller","fangq","grlee77","gwerbin","h-vetinari","hay","henryiii","isuruf","jamiecook","jbrockmendel","jocelynbaduria","ma-sadeghi","matteobe","mattip","melissawm","mjvbz","mlazzarin","ogrisel","r-devulap","rgommers","rkern","rossbar","seberg","serge-sans-paille","stefanv","tlkahn"],
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          offset: 7.5,
          alongOffset: 0.390625,
          rotation: { value: -90, unit: "degrees" },
          align: "right"
        }
      },
      title: { fontSize: 11, fontWeight: 700, offset: 99.2724609375, alongOffset: 0.5 }
    })
    .editXAxisLine({
      color: "#888"
    })
    .editXAxisTicks({
      color: "#888"
    })
    .editXAxisLabels({
      color: "black"
    })
    .editXAxisTitle({
      color: "black"
    })
    .createYAxis({
      ticksAndLabels: {
        values: [0, 5, 10, 15, 20, 25],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625 }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, offset: 26.544921875, alongOffset: 0.5 }
    })
    .editYAxisLine({
      color: "#888"
    })
    .editYAxisTicks({
      color: "#888"
    })
    .editYAxisLabels({
      color: "black"
    })
    .editYAxisTitle({
      color: "black"
    })
    .createGrid({
      horizontal: { values: [0, 5, 10, 15, 20, 25] }
    })
    .editHorizontalGrid({
      color: "#ddd"
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        symbol: { layers: [{ type: "swatch", width: 10, height: 10 }] },
        labels: { fontSize: 10, color: "black", offset: 6 },
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        titlePadding: 3
      }
    });
}