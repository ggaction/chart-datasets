import { chart } from "ggaction";
import data from "./data.json";

// DOCS: doc-dfae58344d5a524e, doc-9afe7f555707120e, doc-2a31551f1566fc6b
export function buildChart() {
  return chart()
    .createCanvas({
      width: 533,
      height: 324,
      margin: { left: 43, top: 52, right: 90, bottom: 22 }
    })
    .createData({ values: data })
    .createFoldData({
      id: "folded",
      fields: ["Brazil", "Panama", "Chile", "Costa Rica"],
      as: { key: "var", value: "val" }
    })
    .createComputedData({
      id: "foldNum",
      as: "valNum",
      expression: { op: "toNumber", operand: { field: "val" } }
    })
    .createLinePlot({
      x: {
        field: "Country",
        fieldType: "temporal",
        temporalUnit: "year"
      },
      y: {
        field: "valNum",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ domain: [315532800000, 1830297600000] })
    .editYScale({ domain: [0, 40000] })
    .encodeColor({
      field: "var",
      fieldType: "nominal",
      scale: {
        domain: ["Brazil", "Chile", "Costa Rica", "Panama"],
        palette: "set1"
      }
    })
    .editLineMark({ strokeWidth: 2 })
    .createTitle({
      text: "Brazil - falling behind",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      alongOffset: -37.6
    })
    .editTitle({
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" },
      gap: 1,
      offset: -13
    })
    .editTitle({
      subtitle: "GDP per capita, constant prices. PPP. Source: IMF WEO 2023.\n"
    })
    .createAxes({
      x: {
        line: {},
        ticksAndLabels: {
          values: [
            315532800000, 473385600000, 631152000000, 788918400000,
            946684800000, 1104537600000, 1262304000000, 1420070400000,
            1577836800000, 1735689600000
          ],
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            format: "%Y"
          }
        },
        title: false
      },
      y: {
        line: {},
        ticksAndLabels: {
          values: [0, 5000, 10000, 15000, 20000, 25000, 30000, 35000, 40000],
          ticks: { length: 5 },
          labels: {
            fontSize: 10,
            fontFamily: "sans-serif",
            offset: 7,
            format: ","
          }
        },
        title: false
      }
    })
    .createGrid({ horizontal: { color: "#ddd", lineWidth: 1 }, vertical: false })
    .createLegend({
      position: "right",
      title: false,
      symbol: { length: 10, lineWidth: 1.5 }
    })
    .editLegendLabels({
      fontSize: 10,
      fontFamily: "sans-serif",
      color: "rgb(0, 0, 0)"
    });
}
