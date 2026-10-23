// DOCS: doc-e91dcd68bf744fb2, doc-5efc8272c8849334, doc-94c977f2eac2e68c
import {chart} from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({
      plot: {width: 800, height: 400},
      margin: {left: 58, top: 10, right: 162, bottom: 37},
      plotBorder: {color: "#ddd", lineWidth: 1}
    })
    .applyTextMetrics({
      profile: {
        schemaVersion: 1,
        id: "vl_1247-original-source-font-widths",
        measurements: [
          {text: "0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 5.5625},
          {text: "200", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, fontStyle: "normal", width: 16.6875}
        ]
      }
    })
    .createData({values: data})
    .createErrorBand({
      x: {field: "Iteration"},
      y: {field: "Value", method: {type: "bootstrap", seed: 1}},
      groupBy: "Agent"
    })
    .encodeColor({
      field: "Agent",
      scale: {palette: "tableau10", domain: ["C51", "DQN", "DQN (Adam + MSE in JAX)", "IQN", "Quantile (JAX)", "Rainbow"]}
    })
    .editErrorBand({opacity: 0.3})
    .createLinePlot({x: "Iteration", y: "__errorBand_center", guides: false})
    .encodeColor({field: "Agent"})
    .encodeStroke({
      field: "Agent",
      scale: {palette: "tableau10", domain: ["C51", "DQN", "DQN (Adam + MSE in JAX)", "IQN", "Quantile (JAX)", "Rainbow"]}
    })
    .createAxes({
      x: {

        ticksAndLabels: {
          values: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
          ticks: {length: 5, alongOffset: 0.5},
          labels: {fontSize: 10, fontFamily: "sans-serif", offset: 5.5, alongOffset: 0.5, format: ",.0f", flush: true}
        },
        title: {text: "Iteration", fontSize: 11, fontFamily: "sans-serif", offset: 27.578125, alongOffset: 0.5}
      },
      y: false
    })
    .editXAxis({
      line: {color: "#888"},
      ticksAndLabels: {ticks: {color: "#888"}, labels: {color: "black"}},
      title: {color: "black", fontWeight: 700}
    })
    .createAxes({
      x: false,
      y: {

        ticksAndLabels: {
          values: [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000],
          ticks: {length: 5, alongOffset: -0.5},
          labels: {fontSize: 10, fontFamily: "sans-serif", offset: 6.5, alongOffset: 0.890625, format: ",.0f"}
        },
        title: {text: "Return (95% CIs)", fontSize: 11, fontFamily: "sans-serif", offset: 46.0078125, alongOffset: 0.5, rotation: {value: -90, unit: "degrees"}}
      }
    })
    .editYAxis({
      line: {color: "#888"},
      ticksAndLabels: {ticks: {color: "#888"}, labels: {color: "black"}},
      title: {color: "black", fontWeight: 700}
    })
    .createGrid({
      horizontal: {color: "#ddd"},
      vertical: {color: "#ddd"}
    })
    .createLegend({
      titleStyle: {fontSize: 11, fontFamily: "sans-serif", fontWeight: 700, color: "black"},
      labels: {fontSize: 10, fontFamily: "sans-serif", color: "black"},
      symbol: {layers: [{type: "point", strokeWidth: 1.5, opacity: 0.3}]}
    });
}