import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-fc11e9fb291905d1, doc-6c2c08869091f6a0, doc-bedf05337affd6f4

export function buildChart() {
  return chart()
    .createCanvas({ width: 376, height: 649, margin: { left: 53, top: 60, right: 143, bottom: 289 } })
    .createData({ values: data })
    .createComputedData({ id: "expNum", as: "expNum", expression: { op: "toNumber", operand: { field: "Expenditure" } } })
    .createBarPlot({
      x: { field: "Year", fieldType: "nominal" },
      y: { field: "expNum", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: ["2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022"], paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 2400] })
    .encodeColor({ field: "Team", layout: "stack" })
    .editColorScale({
      target: "barPlot",
      domain: ["Arsenal", "Aston Villa", "Bournemouth", "Brentford FC", "Brighton & Hove Albion", "Burnley", "Cardiff City", "Chelsea FC", "Crystal Palace", "Everton FC", "Fulham FC", "Huddersfield Town", "Hull City", "Leeds United", "Leicester City", "Liverpool FC", "Manchester City", "Manchester United", "Middlesbrough", "Newcastle United", "Norwich City", "Nottingham Forest", "Queens Park Rangers", "Sheffield United", "Southampton FC", "Stoke City", "Sunderland", "Swansea City", "Tottenham Hotspur", "Watford", "West Bromwich Albion", "West Ham United", "Wolverhampton Wanderers"],
      palette: { name: "plasma", count: 33, extent: [1/34, 33/34] }
    })
    .encodeBarWidth({ band: 1 })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "pl-team-expenditure-source-metrics",
        measurements: [
          { text: "2014", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2016", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2017", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2018", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2019", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2021", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "2022", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
          { text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875 },
          { text: "1,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "1,200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "1,400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "1,600", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "1,800", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "2,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "2,200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "2,400", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.03125 },
          { text: "PL Team Expenditure, 2014-2022", fontFamily: "sans-serif", fontSize: 18, fontWeight: 700, fontStyle: "normal", width: 278.484375 },
          { text: "Figure 2: hover over bars for team names.", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", width: 224.109375 },
          { text: "Source: Transfermarkt", fontFamily: "sans-serif", fontSize: 12, fontWeight: 400, fontStyle: "italic", width: 119.765625 }
        ]
      }
    })
    .createXAxis({
      line: {},
      ticksAndLabels: { ticks: {}, labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7, overlap: "allow" } },
      title: { text: "Year", fontSize: 11, fontFamily: "sans-serif", offset: 27 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400],
        ticks: {},
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 7 }
      },
      title: { text: "Expenditure (£ millions)", fontSize: 11, fontFamily: "sans-serif", offset: 41, rotation: { value: -90, unit: "degrees" } }
    })
    .editXAxisTitle({ fontWeight: 700 })
    .editYAxisTitle({ fontWeight: 700 })
    .editYAxisLabels({ format: ",.0f" })
    // DOCS: doc-9f1e9ae3b82a4178
    .createLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif" },
      labels: { fontSize: 10, fontFamily: "sans-serif" },
      overflow: { maxItems: 29, summary: "ellipsis-count" }
    })
    .createTitle({
      text: "PL Team Expenditure, 2014-2022",
      titleStyle: { fontSize: 18, fontWeight: 700, fontFamily: "sans-serif", color: "black" },
      subtitleStyle: { fontSize: 12, fontStyle: "italic", fontFamily: "sans-serif", color: "black" }
    })
    .editTitle({
      subtitle: "Figure 2: hover over bars for team names.\nSource: Transfermarkt",
      offset: -11
    });
}