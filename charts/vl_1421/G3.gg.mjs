// DOCS: doc-6c2c08869091f6a0, doc-fc11e9fb291905d1, doc-b257fb08998617a5
import { chart } from "ggaction";
import data from "./data.json";

const categories = [
  "Albany","Atlanta","BaltimoreWashington","Boise","Boston","BuffaloRochester",
  "California","Charlotte","Chicago","CincinnatiDayton","Columbus","DallasFtWorth",
  "Denver","Detroit","GrandRapids","GreatLakes","HarrisburgScranton","HartfordSpringfield",
  "Houston","Indianapolis","Jacksonville","LasVegas","LosAngeles","Louisville",
  "MiamiFtLauderdale","Midsouth","Nashville","NewOrleansMobile","NewYork","Northeast",
  "NorthernNewEngland","Orlando","Philadelphia","PhoenixTucson","Pittsburgh","Plains",
  "Portland","RaleighGreensboro","RichmondNorfolk","Roanoke","Sacramento","SanDiego",
  "SanFrancisco","Seattle","SouthCarolina","SouthCentral","Southeast","Spokane",
  "StLouis","Syracuse","Tampa","TotalUS","West","WestTexNewMexico"
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 460,
      height: 410,
      margin: { left: 44, top: 10, right: 6, bottom: 123 }
    })
    .createData({ values: data })
    .createBarPlot({
      x: {
        field: "value",
        fieldType: "nominal"
      },
      y: {
        field: "count",
        fieldType: "quantitative"
      },
      guides: false
    })
    .encodeBarWidth({ band: 1 })
    .editXScale({ domain: categories, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 350] })
    .createGrid({ horizontal: { color: '#ddd', lineWidth: 1 }, vertical: false })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          color: "black",
          offset: 7,
          rotation: { value: -90, unit: "degrees" },
          overlap: "allow"
        }
      },
      title: { text: "value", fontSize: 11, fontWeight: 700, offset: 106 }
    })
    .editXAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 }, title: { color: "black" } })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        values: [0, 50, 100, 150, 200, 250, 300, 350],
        ticks: { length: 5 },
        labels: { fontSize: 10, fontFamily: "sans-serif", color: "black", offset: 7 }
      },
      title: { text: "count", fontSize: 11, fontWeight: 700, offset: 33 }
    })
    .editYAxis({ line: { color: "#888", lineWidth: 1 }, ticks: { color: "#888", lineWidth: 1 }, title: { color: "black" } });
}