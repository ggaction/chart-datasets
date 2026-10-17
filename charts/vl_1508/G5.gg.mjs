// DOCS: doc-fc11e9fb291905d1, doc-bedf05337affd6f4, doc-333a87e52954985d
import { chart } from "ggaction";
import data from "./data.json";

const xDomain = ["13ppd[e]","2ddglcn[e]","2obut[e]","4abut[e]","HC02194[e]","acmana[e]","cit[e]","ddca[e]","fru[e]","glc_D[e]","gln_L[e]","glutar[e]","h2[e]","h[e]","isoval[e]","malt[e]","man[e]","mnl[e]","pydx[e]","pydxn[e]","so3[e]","tmao[e]","tsul[e]","ttdca[e]","uchol[e]"];

export function buildChart() {
  return chart()
    .createCanvas({ width: 332, height: 178, margin: { left: 39, top: 47, right: 93, bottom: 81 } })
    .createData({ values: data })
    .createBarPlot({
      x: { field: "metabolite", fieldType: "nominal" },
      y: { field: "coef", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ domain: xDomain, paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [-1.6, 0.8], zero: false })
    .encodeBarWidth({ band: 1 })
    .encodeColor({ field: "coef", fieldType: "quantitative" }).editColorScale({ domain: [-1.403220164, 0.7845626081], palette: "magma" })
    .createXAxis({
      ticksAndLabels: { ticks: { length: 5 }, labels: { rotation: -Math.PI / 2, fontSize: 10, offset: 7, overlap: "allow" } },
      title: { text: "metabolite", fontSize: 11, offset: 70 }
    })
    .editXAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } },
      title: { color: "#000", fontWeight: "bold" }
    }).createYAxis({
      ticksAndLabels: { count: 2, ticks: { length: 5 }, labels: { fontSize: 10, offset: 7 } },
      title: { text: "coefficient [standardized]", fontSize: 11, offset: 32 }
    })
    .editYAxis({
      line: { color: "#888" },
      ticksAndLabels: { ticks: { color: "#888" }, labels: { color: "#000" } },
      title: { color: "#000", fontWeight: "bold" }
    })
    .createGrid({ horizontal: { color: "#ddd" }, vertical: false })
    .createLegend({ channels: ["color"], title: "coef", gradient: { length: 64 } });
}
