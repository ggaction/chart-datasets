import { chart, vconcat } from "ggaction";
import data from "./data.json";

export function buildChart() {
  // ---- panel0: Sum of Exajoules ----
  const child0 = chart()
    // Source native canvas: width 542, height 336, margins 6/108/130/54, plot 380x200,
    // view frame #ddd 1px (sourceViewFrame.plotBorder).
    .createCanvas({
      width: 542,
      height: 336,
      margin: { top: 6, right: 108, bottom: 130, left: 54 }
    })
    .editCanvas({ background: "#fff0d8", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0898-actual-fonts",
        measurements: [
          { text: "China", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 26.1279296875 },
          { text: "US", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.8916015625 },
          { text: "India", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 21.6845703125 },
          { text: "Russian Federation", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 86.7138671875 },
          { text: "Japan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 27.24609375 },
          { text: "Canada", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.029296875 },
          { text: "Germany", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.123046875 },
          { text: "South Korea", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 55.595703125 },
          { text: "Brazil", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0048828125 },
          { text: "Iran", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 17.2314453125 },
          { text: "Saudi Arabia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 57.2607421875 },
          { text: "Indonesia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.369140625 },
          { text: "United Kingdom", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 71.15234375 },
          { text: "Turkey", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.1953125 },
          { text: "Mexico", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.6748046875 },
          { text: "Italy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.33984375 },
          { text: "Australia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.90625 },
          { text: "South Africa", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 54.47265625 },
          { text: "Poland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.1376953125 },
          { text: "Country", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 42.1630859375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "Sum of Exajoules", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 91.68994140625 },
          { text: "0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "20%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.0146484375 },
          { text: "40%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.0146484375 },
          { text: "60%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.0146484375 },
          { text: "80%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.0146484375 },
          { text: "100%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.576171875 },
          { text: "Sum of Percentages", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 105.7568359375 },
          { text: "Coal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.56640625 },
          { text: "Oil", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 12.2216796875 },
          { text: "Renewables", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 55.0341796875 },
          { text: "Hydro electric", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 61.1279296875 },
          { text: "Nuclear energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 67.8125 },
          { text: "Natural Gas", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 53.3544921875 },
          { text: "Fuel type", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 48.2861328125 }
        ]
      }
    })
    .createData({ values: data })
    // All 114 raw rows unchanged; fresh typed numeric field.
    .createComputedData({
      id: "typed0",
      as: "value",
      expression: { op: "toNumber", operand: { field: "Exajoules" } }
    })
    // Source summary: group by Country/Fuel type/raw field, sum -> sourceY.
    .createSummaryData({
      id: "summary0",
      groupBy: ["Country", "Fuel type", "Exajoules"],
      aggregates: [{ op: "sum", field: "value", as: "sourceY" }]
    })
    // Source compiled stack series order: Fuel type descending.
    .createSortedData({
      id: "ordered0",
      sortBy: [{ field: "Fuel type", order: "descending" }]
    })
    // Stack reproduces every interval including zero-ink rows; defaults emit
    // sourceY_start / sourceY_end as in the source stack transform.
    .createStackData({ category: "Country", group: "Fuel type", value: "sourceY" })
    .createBarPlot({
      x: { field: "Country", fieldType: "nominal" },
      y: "sourceY",
      guides: false
    })
    .encodeColor({
      field: "Fuel type",
      layout: "overlay",
      scale: {
        domain: ["Coal", "Oil", "Renewables", "Hydro electric", "Nuclear energy", "Natural Gas"],
        range: ["darkred", "Orange", "darkorange", "#7C521F", "#997C2E", "#B5A437", "#A46C4C", "#824d2f"]
      }
    })
    .encodeYRange({ lower: "sourceY_start", upper: "sourceY_end" })
    .editBarMark({ stroke: false })
    .encodeBarWidth({ pixels: 18 })
    // Exact source band domain order (Total descending) and paddings; range left to margins.
    .editXScale({
      domain: ["China", "US", "India", "Russian Federation", "Japan", "Canada", "Germany", "South Korea", "Brazil", "Iran", "Saudi Arabia", "Indonesia", "United Kingdom", "Turkey", "Mexico", "Italy", "Australia", "South Africa", "Poland"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    // Exact source linear domain; automatic plot range resolves [0,200] locally.
    .editYScale({ domain: [0, 160] })
    // DOCS: doc-6c2c08869091f6a0 (createGuides inside facade wraps)
    .createGuides({
      axes: {
        x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: ["China", "US", "India", "Russian Federation", "Japan", "Canada", "Germany", "South Korea", "Brazil", "Iran", "Saudi Arabia", "Indonesia", "United Kingdom", "Turkey", "Mexico", "Italy", "Australia", "South Africa", "Poland"],
            ticks: { color: "#888", lineWidth: 1, length: 5 },
            labels: {
              offset: 7.5,
              color: "black",
              fontSize: 10,
              fontFamily: "sans-serif",
              rotation: -1.5707963267948966,
              alongOffset: 0
            }
          },
          title: {
            text: "Country",
            offset: 104.2919921875,
            color: "black",
            fontSize: 11,
            fontFamily: "sans-serif",
            fontWeight: 700
          }
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [0, 50, 100, 150],
            ticks: { color: "#888", lineWidth: 1, length: 5, alongOffset: 0.5 },
            labels: {
              offset: 6.5,
              color: "black",
              fontSize: 10,
              fontFamily: "sans-serif",
              alongOffset: 0.890625
            }
          },
          title: {
            text: "Sum of Exajoules",
            offset: 32.1064453125,
            rotation: -1.5707963267948966,
            color: "black",
            fontSize: 11,
            fontFamily: "sans-serif",
            fontWeight: 700
          }
        }
      },
      grid: {
        horizontal: { values: [0, 50, 100, 150], color: "#ddd", lineWidth: 1, alongOffset: 0.5 },
        vertical: false
      },
      legend: false
    })
    // Shared root legend owned by topmost child; native right-edge position/spacing kept.
    .createLegend({
      title: "Fuel type",
      titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
      labels: { fontSize: 10, color: "black" }
    })
    // Source 10x10 outline-free swatch samples.
    .editLegendSymbols({ symbol: { width: 10, height: 10, stroke: "none" } });

  // ---- panel1: Sum of Percentages ----
  const child1 = chart()
    // Source native canvas: width 542, height 321, margins 6/108/115/54, plot 380x200.
    .createCanvas({
      width: 542,
      height: 321,
      margin: { top: 6, right: 108, bottom: 115, left: 54 }
    })
    .editCanvas({ background: "#fff0d8", plotBorder: { color: "#ddd", lineWidth: 1 } })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "source0898-actual-fonts",
        measurements: [
          { text: "China", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 26.1279296875 },
          { text: "US", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 13.8916015625 },
          { text: "India", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 21.6845703125 },
          { text: "Russian Federation", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 86.7138671875 },
          { text: "Japan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 27.24609375 },
          { text: "Canada", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 35.029296875 },
          { text: "Germany", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 41.123046875 },
          { text: "South Korea", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 55.595703125 },
          { text: "Brazil", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.0048828125 },
          { text: "Iran", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 17.2314453125 },
          { text: "Saudi Arabia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 57.2607421875 },
          { text: "Indonesia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 43.369140625 },
          { text: "United Kingdom", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 71.15234375 },
          { text: "Turkey", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 30.1953125 },
          { text: "Mexico", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.6748046875 },
          { text: "Italy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 18.33984375 },
          { text: "Australia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 38.90625 },
          { text: "South Africa", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 54.47265625 },
          { text: "Poland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 31.1376953125 },
          { text: "Country", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 42.1630859375 },
          { text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5615234375 },
          { text: "50", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 11.123046875 },
          { text: "100", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "150", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6845703125 },
          { text: "Sum of Exajoules", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 91.68994140625 },
          { text: "0%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 14.453125 },
          { text: "20%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.0146484375 },
          { text: "40%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.0146484375 },
          { text: "60%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.0146484375 },
          { text: "80%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.0146484375 },
          { text: "100%", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 25.576171875 },
          { text: "Sum of Percentages", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 105.7568359375 },
          { text: "Coal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 20.56640625 },
          { text: "Oil", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 12.2216796875 },
          { text: "Renewables", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 55.0341796875 },
          { text: "Hydro electric", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 61.1279296875 },
          { text: "Nuclear energy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 67.8125 },
          { text: "Natural Gas", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 53.3544921875 },
          { text: "Fuel type", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700, fontStyle: "normal", width: 48.2861328125 }
        ]
      }
    })
    .createData({ values: data })
    .createComputedData({
      id: "typed1",
      as: "value",
      expression: { op: "toNumber", operand: { field: "Percentages" } }
    })
    .createSummaryData({
      id: "summary1",
      groupBy: ["Country", "Fuel type", "Percentages"],
      aggregates: [{ op: "sum", field: "value", as: "sourceY" }]
    })
    .createSortedData({
      id: "ordered1",
      sortBy: [{ field: "Fuel type", order: "descending" }]
    })
    .createStackData({ category: "Country", group: "Fuel type", value: "sourceY" })
    .createBarPlot({
      x: { field: "Country", fieldType: "nominal" },
      y: "sourceY",
      guides: false
    })
    .encodeColor({
      field: "Fuel type",
      layout: "overlay",
      scale: {
        domain: ["Coal", "Oil", "Renewables", "Hydro electric", "Nuclear energy", "Natural Gas"],
        range: ["darkred", "Orange", "darkorange", "#7C521F", "#997C2E", "#B5A437", "#A46C4C", "#824d2f"]
      }
    })
    .encodeYRange({ lower: "sourceY_start", upper: "sourceY_end" })
    .editBarMark({ stroke: false })
    .encodeBarWidth({ pixels: 18 })
    .editXScale({
      domain: ["China", "US", "India", "Russian Federation", "Japan", "Canada", "Germany", "South Korea", "Brazil", "Iran", "Saudi Arabia", "Indonesia", "United Kingdom", "Turkey", "Mexico", "Italy", "Australia", "South Africa", "Poland"],
      paddingInner: 0.1,
      paddingOuter: 0.05
    })
    // Source percent stack domain is exactly [0,1].
    .editYScale({ domain: [0, 1] })
    .createGuides({
      axes: {
        x: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: ["China", "US", "India", "Russian Federation", "Japan", "Canada", "Germany", "South Korea", "Brazil", "Iran", "Saudi Arabia", "Indonesia", "United Kingdom", "Turkey", "Mexico", "Italy", "Australia", "South Africa", "Poland"],
            ticks: { color: "#888", lineWidth: 1, length: 5 },
            labels: {
              offset: 7.5,
              color: "black",
              fontSize: 10,
              fontFamily: "sans-serif",
              rotation: -1.5707963267948966,
              alongOffset: 0
            }
          },
          title: {
            text: "Country",
            offset: 104.2919921875,
            color: "black",
            fontSize: 11,
            fontFamily: "sans-serif",
            fontWeight: 700
          }
        },
        y: {
          line: { color: "#888", lineWidth: 1 },
          ticksAndLabels: {
            values: [0, 0.2, 0.4, 0.6, 0.8, 1],
            ticks: { color: "#888", lineWidth: 1, length: 5, alongOffset: 0.5 },
            labels: {
              offset: 6.5,
              color: "black",
              fontSize: 10,
              fontFamily: "sans-serif",
              alongOffset: 0.890625,
              // Bare "%" numeric format is unsupported by the closed formatter; the source
              // percent display strings are preserved exactly through typed labelMap.
              labelMap: [
                { value: 0, label: "0%" },
                { value: 0.2, label: "20%" },
                { value: 0.4, label: "40%" },
                { value: 0.6, label: "60%" },
                { value: 0.8, label: "80%" },
                { value: 1, label: "100%" }
              ]
            }
          },
          title: {
            text: "Sum of Percentages",
            offset: 40.998046875,
            rotation: -1.5707963267948966,
            color: "black",
            fontSize: 11,
            fontFamily: "sans-serif",
            fontWeight: 700
          }
        }
      },
      grid: {
        horizontal: { values: [0, 0.2, 0.4, 0.6, 0.8, 1], color: "#ddd", lineWidth: 1, alongOffset: 0.5 },
        vertical: false
      },
      legend: false
    });

  // Vertical concat, zero gap, start alignment (nativeComposition).
  return vconcat({
    programs: [
      { id: "panel0", program: child0 },
      { id: "panel1", program: child1 }
    ],
    gap: 0,
    align: "start"
  });
}