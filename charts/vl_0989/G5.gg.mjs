// DOCS: doc-4e183c1ba7f7e20b doc-2e8ae49a2e6e5e17 doc-b1afedddb1ebef69
import { chart } from "ggaction";
import data from "./data.json" with { type: "json" };

export function buildChart() {
  return chart()
    .createCanvas({ width: 369, height: 302, margin: { left: 64, top: 35, right: 5, bottom: 17 } })
    .createData({ values: data })
    .createComputedData({ id: "oilNum", as: "oilNum", expression: { op: "toNumber", operand: { field: "Oil Consumption - TWh (zero filled)" } } })
    .createSummaryData({ id: "summed", groupBy: ["Year", "Entity"], aggregates: [{ field: "oilNum", as: "oilSum", op: "sum" }] })
    .createCompleteData({ id: "completed", key: "Year", groupBy: ["Entity"] })
    .editCompleteData({ target: "completed", fill: { oilSum: 0 } })
    .createSortedData({ id: "sorted", source: "completed", sortBy: [{ field: "Entity", order: "descending" }, { field: "Year", order: "ascending" }] })
    .createAreaPlot({
      x: { field: "Year", fieldType: "temporal", temporalUnit: "year" },
      y: { field: "oilSum" },
      guides: false
    })
    .editXScale({ type: "time", domain: [-157766400000, 1609459200000], nice: false })
    .editYScale({ domain: [-135992.80945026502, 144007.19054973498], nice: false })
    .encodeGroup({ fields: ["Entity"] })
    .encodeColor({
      field: "Entity", fieldType: "nominal"
    })
    .editColorScale({ domain: ["Africa","Africa (BP)","Algeria","Argentina","Asia","Asia Pacific (BP)","Australia","Austria","Azerbaijan","Bangladesh","Belarus","Belgium","Brazil","Bulgaria","CIS (BP)","Canada","Central America (BP)","Chile","China","Colombia","Croatia","Cyprus","Czechia","Denmark","Eastern Africa (BP)","Ecuador","Egypt","Estonia","Europe","Europe (BP)","European Union (27)","Finland","France","Germany","Greece","High-income countries","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Japan","Kazakhstan","Kuwait","Latvia","Lithuania","Low-income countries","Lower-middle-income countries","Luxembourg","Malaysia","Mexico","Middle Africa (BP)","Middle East (BP)","Morocco","Netherlands","New Zealand","Non-OECD (BP)","North America","North America (BP)","North Macedonia","Norway","OECD (BP)","Oceania","Oman","Other Africa (BP)","Other Asia Pacific (BP)","Other CIS (BP)","Other Caribbean (BP)","Other Europe (BP)","Other Middle East (BP)","Other North America (BP)","Other Northern Africa (BP)","Other South America (BP)","Other South and Central America (BP)","Other Southern Africa (BP)","Pakistan","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Saudi Arabia","Singapore","Slovakia","Slovenia","South Africa","South America","South Korea","South and Central America (BP)","Spain","Sri Lanka","Sweden","Switzerland","Taiwan","Thailand","Trinidad and Tobago","Turkey","Turkmenistan","USSR","Ukraine","United Arab Emirates","United Kingdom","United States","Upper-middle-income countries","Uzbekistan","Venezuela","Vietnam","Western Africa (BP)"], range: ["rgb(209, 237, 203)","rgb(208, 237, 202)","rgb(206, 236, 200)","rgb(204, 235, 198)","rgb(203, 235, 197)","rgb(201, 234, 195)","rgb(200, 233, 194)","rgb(198, 232, 192)","rgb(196, 232, 190)","rgb(195, 231, 189)","rgb(193, 230, 187)","rgb(191, 230, 185)","rgb(189, 229, 183)","rgb(188, 228, 182)","rgb(186, 227, 180)","rgb(184, 227, 178)","rgb(182, 226, 176)","rgb(180, 225, 174)","rgb(179, 224, 173)","rgb(177, 223, 171)","rgb(175, 223, 169)","rgb(173, 222, 167)","rgb(171, 221, 165)","rgb(169, 220, 164)","rgb(167, 219, 162)","rgb(165, 219, 160)","rgb(163, 218, 158)","rgb(161, 217, 157)","rgb(160, 216, 155)","rgb(158, 215, 153)","rgb(156, 214, 152)","rgb(154, 213, 150)","rgb(152, 213, 148)","rgb(150, 212, 146)","rgb(148, 211, 145)","rgb(145, 210, 143)","rgb(143, 209, 141)","rgb(141, 208, 139)","rgb(139, 207, 138)","rgb(137, 206, 136)","rgb(135, 205, 134)","rgb(132, 204, 133)","rgb(130, 203, 131)","rgb(128, 201, 129)","rgb(126, 200, 127)","rgb(124, 199, 126)","rgb(122, 198, 124)","rgb(119, 197, 123)","rgb(117, 196, 121)","rgb(115, 195, 120)","rgb(112, 194, 118)","rgb(110, 193, 117)","rgb(108, 192, 115)","rgb(105, 190, 114)","rgb(103, 189, 112)","rgb(101, 188, 111)","rgb(98, 187, 109)","rgb(96, 186, 108)","rgb(94, 185, 107)","rgb(92, 183, 106)","rgb(89, 182, 104)","rgb(87, 181, 103)","rgb(85, 180, 102)","rgb(83, 178, 101)","rgb(80, 177, 100)","rgb(78, 176, 98)","rgb(76, 174, 97)","rgb(74, 173, 96)","rgb(71, 172, 95)","rgb(69, 170, 94)","rgb(68, 169, 92)","rgb(66, 167, 91)","rgb(64, 166, 90)","rgb(62, 165, 89)","rgb(61, 163, 88)","rgb(59, 162, 87)","rgb(57, 160, 86)","rgb(56, 159, 85)","rgb(54, 157, 83)","rgb(52, 156, 82)","rgb(50, 154, 81)","rgb(49, 153, 80)","rgb(47, 151, 79)","rgb(46, 150, 78)","rgb(44, 148, 76)","rgb(43, 147, 75)","rgb(41, 146, 74)","rgb(39, 144, 73)","rgb(38, 143, 72)","rgb(36, 141, 70)","rgb(35, 140, 69)","rgb(33, 138, 68)","rgb(32, 137, 67)","rgb(30, 135, 66)","rgb(29, 134, 64)","rgb(27, 132, 63)","rgb(25, 130, 62)","rgb(24, 129, 61)","rgb(22, 127, 60)","rgb(21, 126, 58)","rgb(19, 124, 57)","rgb(18, 123, 56)","rgb(16, 121, 55)","rgb(15, 120, 53)","rgb(13, 118, 52)","rgb(12, 116, 51)","rgb(12, 115, 50)","rgb(11, 113, 49)","rgb(10, 111, 48)","rgb(9, 110, 47)","rgb(8, 108, 46)","rgb(7, 107, 45)","rgb(6, 105, 44)","rgb(5, 103, 43)","rgb(4, 102, 42)"] })
    .layoutSeries({ mode: "center" })
    .editAreaMark({ opacity: 1 })
    .applyTextMetrics({ profile: { schemaVersion: 1, id: "vl_0989-original-source-font-widths", measurements: [
      { text: "1965", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1970", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1975", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1980", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1985", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1990", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "1995", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2005", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2010", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2015", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "2020", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 22.25 },
      { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625 },
      { text: "50,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.59375 },
      { text: "100,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "150,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "200,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "250,000", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 36.15625 },
      { text: "Sum of Oil Consumption - TWh (zero filled)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 224.265625 },
      { text: "Oil consumption", fontFamily: "sans-serif", fontSize: 13, fontWeight: 700, fontStyle: "normal", width: 102.5625 },
      { text: "Sum of oil consumption for different entities, Source: Our World in Data", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "italic", width: 314.234375 }
    ] } })
    .createXAxis({
      ticksAndLabels: { values: [
          -157766400000,
          0,
          157766400000,
          315532800000,
          473385600000,
          631152000000,
          788918400000,
          946684800000,
          1104537600000,
          1262304000000,
          1420070400000,
          1577836800000
        ], ticks: { length: 0 }, labels: { fontSize: 10, offset: 0.5, alongOffset: 0.5, flush: true, labelMap: [
          { value: -157766400000, label: "1965" },
          { value: 0, label: "" },
          { value: 157766400000, label: "1975" },
          { value: 315532800000, label: "" },
          { value: 473385600000, label: "1985" },
          { value: 631152000000, label: "" },
          { value: 788918400000, label: "1995" },
          { value: 946684800000, label: "" },
          { value: 1104537600000, label: "2005" },
          { value: 1262304000000, label: "" },
          { value: 1420070400000, label: "2015" },
          { value: 1577836800000, label: "" }
        ] } },
      title: false
    })
    .editXAxisLine({ color: "#888", lineWidth: 1 })
    .editXAxisLabels({ color: "black" })
    .createYAxis({
      ticksAndLabels: {
        values: [-135992.80945026502, -85992.80945026502, -35992.80945026502, 14007.19054973498, 64007.19054973498, 114007.19054973498],
        ticks: { length: 5 },
        labels: { fontSize: 10, offset: 6.5, alongOffset: 0.890625, labelMap: [
          { value: -135992.80945026502, label: "0" },
          { value: -85992.80945026502, label: "50,000" },
          { value: -35992.80945026502, label: "100,000" },
          { value: 14007.19054973498, label: "150,000" },
          { value: 64007.19054973498, label: "200,000" },
          { value: 114007.19054973498, label: "250,000" }
        ] }
      },
      title: { text: "Sum of Oil Consumption - TWh (zero filled)", fontSize: 11, rotation: { value: -90, unit: "degrees" }, offset: 51.5693359375, alongOffset: 0.5 }
    })
    .editYAxisLine({ color: "#888", lineWidth: 1 })
    .editYAxisTicksAndLabels({ ticks: { color: "#888" }, labels: { color: "black" } })
    .editYAxisTitle({ color: "black", fontWeight: 700 })
    .editCanvas({ plotBorder: { color: "#ddd", lineWidth: 1 } })
    .createTitle({ text: "Oil consumption", titleStyle: { fontSize: 13, fontWeight: 700, color: "black" }, subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" } })
    .editTitle({ offset: -10.953125, alongOffset: -58.1474609375, gap: 3.34375 })
    .editTitle({ subtitle: "Sum of oil consumption for different entities, Source: Our World in Data" });
}