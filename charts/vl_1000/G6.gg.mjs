// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1
import { chart } from "ggaction";
import data from "./data.json";

const CITY_DOMAIN = ["San Francisco Calif.","Los Angeles Calif.","Oxnard Calif.","San Diego Calif.","Honolulu Hi.","Seattle Wash.","Bridgeport Conn.","New York N.Y.-N.J.","Sacramento Calif.","Boston Mass.","Denver Colo.","Washington D.C.-No. Va.","Portland Ore.","Stockton Calif.","Riverside-San Bernardino Calif.","Provo Utah","Colorado Springs Colo.","Modesto Calif.","Austin Texas","Phoenix Ariz.","Las Vegas Nev.","Miami Fla.","Fresno Calif.","Nashville Tenn.","Raleigh N.C.","Boise City Idaho","Portland Me.","Providence R.I.","Ogden Utah","Baltimore Md.","Minneapolis-St. Paul Minn.","Madison Wis.","North Port-Sarasota Fla.","Charleston S.C.","Durham N.C.","Orlando Fla.","Worcester Mass.","Richmond Va.","Charlotte N.C.","Chicago Ill.","Atlanta Ga.","Virginia Beach Va.","Jacksonville Fla.","Bakersfield Calif.","Philadelphia Pa.","Hartford Conn.","New Haven Conn.","Tampa Fla.","Tucson Ariz.","McAllen Texas"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 699, height: 508, margin: { left: 72, top: 40, right: 127, bottom: 168 } })
    .createData({ values: data })
    .createComputedData({ id: "priceNum", as: "Median Price_num", expression: { op: "toNumber", operand: { field: "Median Price" } } })
    .createComputedData({ id: "affordNum", as: "Affordability_num", expression: { op: "toNumber", operand: { field: "Affordability Index" } } })
    .createTitle({
      text: "Metro Areas - Median Price and Affordability Index",
      titleStyle: { fontSize: 13, fontFamily: "sans-serif" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", fontFamily: "sans-serif" }
    })
    .editTitle({ subtitle: "Cities represent metropolitan statistical areas as defined by the U.S. Census. Affordability Index 0-20, 1 most affordable. Source: Kiplinger", offset: -4, gap: 1 })
    .editTitle({ alongOffset: -66.5, titleStyle: { fontWeight: 700 } })
    .createBarPlot({
      x: { field: "Metro Area", fieldType: "nominal" },
      y: { field: "Median Price_num", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: CITY_DOMAIN, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 1000000] })
    .encodeColor({ field: "Affordability_num", fieldType: "quantitative", aggregate: "mean" })
    .editColorScale({ domain: [3.3, 17.6], palette: "yellowgreenblue" })
    .encodeBarWidth({ band: 1, target: "barPlot" })
    .createScatterPlot({
      x: { field: "Metro Area", fieldType: "nominal" },
      y: { field: "Affordability_num", fieldType: "quantitative" },
      guides: false
    })
    .encodeStroke({ target: "scatterPlot", value: "#4c78a8" })
    .encodeOpacity({ target: "scatterPlot", value: 0.7 })
    .editPointMark({ fill: "transparent" })
    .editPointMark({ target: "scatterPlot", strokeWidth: 2 })
    .encodePointRadius({ value: 2.7386127875258306 })
    .createXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: CITY_DOMAIN,
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, rotation: { value: -90, unit: "degrees" }, overlap: "allow" }
      },
      title: { text: "City", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 150 }
    })
    .createYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        values: [0, 100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000, 900000, 1000000],
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, format: ",.0f" }
      },
      title: { text: "Median Price $ Dollars", fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", offset: 60, rotation: { value: -90, unit: "degrees" } }
    })
    .createGrid({ horizontal: true, vertical: false })
    .editHorizontalGrid({ color: "#ddd", lineWidth: 1 })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "barPlot",
        representation: "gradient",
        position: "right",
        title: "Affordability Index",
        titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
        labels: { fontSize: 10, fontFamily: "sans-serif" },
        gradient: { length: 200 }
      }
    });
}