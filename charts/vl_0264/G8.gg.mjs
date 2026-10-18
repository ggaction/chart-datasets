import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-1b461e89762eb091 doc-7182bd642b5c2e5e doc-82e309a0b6ac0052

export function buildChart() {
  return chart()
    .createCanvas({
      width: 511,
      height: 510,
      margin: { left: 104, top: 34, right: 32, bottom: 57 }
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_0264-original-source-font-widths",
        measurements: [
          { text: "Conservative Party", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 84.484375 },
          { text: "Green Party", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 53.921875 },
          { text: "Labour Party", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 57.265625 },
          { text: "Liberal Democrats", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 81.15625 },
          { text: "Political control of Trafford's Wards 2021", fontFamily: "sans-serif", fontSize: 18, fontWeight: 400, fontStyle: "normal", width: 321.625 },
          { text: "Source: trafford.gov.uk | @traffordDataLab", fontFamily: "sans-serif", fontSize: 11, fontWeight: 300, fontStyle: "normal", width: 206.078125 },
          { text: "Altrincham", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 47.25 },
          { text: "Ashton upon Mersey", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 91.71875 },
          { text: "Bowdon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.140625 },
          { text: "Broadheath", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 51.71875 },
          { text: "Brooklands", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 50.03125 },
          { text: "Bucklow-St Martins", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 85.578125 },
          { text: "Clifford", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.5 },
          { text: "Davyhulme East", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 72.8125 },
          { text: "Davyhulme West", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 75.40625 },
          { text: "Flixton", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 29.453125 },
          { text: "Gorse Hill", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.90625 },
          { text: "Hale Barns", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 49.46875 },
          { text: "Hale Central", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 55.59375 },
          { text: "Longford", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 39.484375 },
          { text: "Priory", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 26.125 },
          { text: "Sale Moor", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 45.578125 },
          { text: "St Mary's", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.359375 },
          { text: "Stretford", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.359375 },
          { text: "Timperley", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.53125 },
          { text: "Urmston", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 37.796875 },
          { text: "Village", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 29.84375 }
        ]
      }
    })
    .createData({ values: data })
    .createHeatmap({
      x: { field: "elected_ordinal", fieldType: "ordinal" },
      y: { field: "ward" },
      guides: false
    })
    .editXScale({ domain: ["1", "2", "3"] })
    .editYScale({ domain: ["Altrincham", "Ashton upon Mersey", "Bowdon", "Broadheath", "Brooklands", "Bucklow-St Martins", "Clifford", "Davyhulme East", "Davyhulme West", "Flixton", "Gorse Hill", "Hale Barns", "Hale Central", "Longford", "Priory", "Sale Moor", "St Mary's", "Stretford", "Timperley", "Urmston", "Village"] })
    .encodeColor({
      field: "councillor_party",
      fieldType: "ordinal"
    })
    .editColorScale({
      domain: ["Conservative Party", "Green Party", "Labour Party", "Liberal Democrats"],
      range: ["#0087dc", "#6ab023", "#dc241f", "#fdbb30"]
    })
    .editRectMark({ stroke: "#fff", strokeWidth: 1 })
    .createXAxis({
      line: false,
      ticksAndLabels: false,
      title: {
        text: "Source: trafford.gov.uk | @traffordDataLab",
        fontSize: 11,
        fontFamily: "sans-serif",
        fontWeight: 300,
        offset: 16.65625,
        alongOffset: 85
      }
    })
    .editXAxisTitle({ color: "#707070" })
    .createYAxis({
      line: false,
      title: false,
      ticksAndLabels: {
        values: ["Altrincham", "Ashton upon Mersey", "Bowdon", "Broadheath", "Brooklands", "Bucklow-St Martins", "Clifford", "Davyhulme East", "Davyhulme West", "Flixton", "Gorse Hill", "Hale Barns", "Hale Central", "Longford", "Priory", "Sale Moor", "St Mary's", "Stretford", "Timperley", "Urmston", "Village"],
        labels: { fontSize: 10, fontFamily: "sans-serif", offset: 6.5, alongOffset: 0.390625 }
      }
    })
    .editYAxis({ ticks: false })
    .editYAxisLabels({ color: "#212121" })
    .createTitle({
      text: "Political control of Trafford's Wards 2021",
      titleStyle: { fontSize: 18, fontFamily: "sans-serif" },
      offset: -10.703125
    })
    .editTitle({ align: "center", titleStyle: { fontWeight: 400, color: "#707070" } })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        channels: ["color"],
        position: "bottom",
        direction: "horizontal",
        title: false,
        labels: { fontSize: 10, fontFamily: "sans-serif" }
      }
    })
    .editLegend({ labels: { color: "#212121" } });
}