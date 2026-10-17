// DOCS: doc-b11b4627b143730d, doc-76573a465e2b6a33, doc-071c93dff3a5ea2e
import { chart } from "ggaction";
import data from "./data.json";

const xs = ["1","10","100","11","12","13","14","15","16","17","18","19","2","20","21","22","23","24","25","26","27","28","29","3","30","31","32","33","34","35","36","37","38","39","4","40","41","42","43","44","45","46","47","48","49","5","50","51","52","53","54","55","56","57","58","59","6","60","61","62","63","64","65","66","67","68","69","7","70","71","72","73","74","75","76","77","78","79","8","80","81","82","83","84","85","86","87","88","89","9","90","91","92","93","94","95","96","97","98","99"];
const LM = [{ value: "1", label: "number1" }, { value: "10", label: "number10" }, { value: "100", label: "number100" }, { value: "11", label: "number11" }, { value: "12", label: "number12" }, { value: "13", label: "number13" }, { value: "14", label: "number14" }, { value: "15", label: "number15" }, { value: "16", label: "number16" }, { value: "17", label: "number17" }, { value: "18", label: "number18" }, { value: "19", label: "number19" }, { value: "2", label: "number2" }, { value: "20", label: "number20" }, { value: "21", label: "number21" }, { value: "22", label: "number22" }, { value: "23", label: "number23" }, { value: "24", label: "number24" }, { value: "25", label: "number25" }, { value: "26", label: "number26" }, { value: "27", label: "number27" }, { value: "28", label: "number28" }, { value: "29", label: "number29" }, { value: "3", label: "number3" }, { value: "30", label: "number30" }, { value: "31", label: "number31" }, { value: "32", label: "number32" }, { value: "33", label: "number33" }, { value: "34", label: "number34" }, { value: "35", label: "number35" }, { value: "36", label: "number36" }, { value: "37", label: "number37" }, { value: "38", label: "number38" }, { value: "39", label: "number39" }, { value: "4", label: "number4" }, { value: "40", label: "number40" }, { value: "41", label: "number41" }, { value: "42", label: "number42" }, { value: "43", label: "number43" }, { value: "44", label: "number44" }, { value: "45", label: "number45" }, { value: "46", label: "number46" }, { value: "47", label: "number47" }, { value: "48", label: "number48" }, { value: "49", label: "number49" }, { value: "5", label: "number5" }, { value: "50", label: "number50" }, { value: "51", label: "number51" }, { value: "52", label: "number52" }, { value: "53", label: "number53" }, { value: "54", label: "number54" }, { value: "55", label: "number55" }, { value: "56", label: "number56" }, { value: "57", label: "number57" }, { value: "58", label: "number58" }, { value: "59", label: "number59" }, { value: "6", label: "number6" }, { value: "60", label: "number60" }, { value: "61", label: "number61" }, { value: "62", label: "number62" }, { value: "63", label: "number63" }, { value: "64", label: "number64" }, { value: "65", label: "number65" }, { value: "66", label: "number66" }, { value: "67", label: "number67" }, { value: "68", label: "number68" }, { value: "69", label: "number69" }, { value: "7", label: "number7" }, { value: "70", label: "number70" }, { value: "71", label: "number71" }, { value: "72", label: "number72" }, { value: "73", label: "number73" }, { value: "74", label: "number74" }, { value: "75", label: "number75" }, { value: "76", label: "number76" }, { value: "77", label: "number77" }, { value: "78", label: "number78" }, { value: "79", label: "number79" }, { value: "8", label: "number8" }, { value: "80", label: "number80" }, { value: "81", label: "number81" }, { value: "82", label: "number82" }, { value: "83", label: "number83" }, { value: "84", label: "number84" }, { value: "85", label: "number85" }, { value: "86", label: "number86" }, { value: "87", label: "number87" }, { value: "88", label: "number88" }, { value: "89", label: "number89" }, { value: "9", label: "number9" }, { value: "90", label: "number90" }, { value: "91", label: "number91" }, { value: "92", label: "number92" }, { value: "93", label: "number93" }, { value: "94", label: "number94" }, { value: "95", label: "number95" }, { value: "96", label: "number96" }, { value: "97", label: "number97" }, { value: "98", label: "number98" }, { value: "99", label: "number99" }];

export function buildChart() {
  return chart()
    .createCanvas({ width: 2049, height: 287, margin: { left: 44, top: 9, right: 5, bottom: 78 } })
    .createData({ values: data })
    .createLinePlot({
      x: { field: "catX", fieldType: "ordinal" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "linePlot", type: "point", domain: xs })
    .editYScale({ target: "linePlot", domain: [0, 100] })
    .editLineMark({ stroke: "gray", strokeWidth: 2 })
    .createScatterPlot({
      x: { field: "catX", fieldType: "ordinal" },
      y: { field: "y", fieldType: "quantitative" },
      guides: false
    })
    .editXScale({ target: "scatterPlot", type: "point", domain: xs })
    .editYScale({ target: "scatterPlot", domain: [0, 100] })
    .editPointMark({ fill: "yellow", stroke: "rgba(0,0,0,0.4)", strokeWidth: 1 })
    .editPointMark({ opacity: 1 })
    .encodePointRadius({ value: 2.7386127875258306, target: "scatterPlot" })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        labels: {
          offset: 7,
          fontSize: 10,
          rotation: { value: -90, unit: "degrees" },
          labelMap: LM
        }
      },
      title: { text: "catX", fontSize: 11, fontWeight: 700, offset: 67 }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        count: 5,
        ticks: { alongOffset: 10 },
        labels: { fontFamily: "Comic Sans MS", fontSize: 10, offset: 6.5 }
      },
      title: { text: "y", fontSize: 11, fontWeight: 700, offset: 32 }
    })
    .editYAxis({ line: { color: "orange" } })
    .createGrid({ horizontal: { count: 5 }, vertical: false })
    .editGrid({ horizontal: { color: "seagreen" } });
}
