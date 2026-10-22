import{chart}from"ggaction";
import data from"./data.json";
import rules from"./rule-data.json";

// DOCS: doc-8a4f6f06e0d37d5e
export function buildChart(){
return chart()
.createCanvas({width:400,height:400,margin:{left:43,right:6,top:40,bottom:37}})
.editCanvas({plotBorder:{underlay:true}})
.applyTextMetrics({profile:{schemaVersion:1,id:"source0142-exact-flush-endpoint-widths",measurements:[{text:"1,970",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:25.03125},{text:"2,020",fontFamily:"sans-serif",fontSize:10,fontWeight:400,width:25.03125}]}})
.createTitle({text:"CO₂ Emissions per capita by region",titleStyle:{fontSize:13,fontWeight:700,color:"black"},offset:-10.953125})
.editTitle({subtitle:"Million tonnes. Source: Authors' calculations",subtitleStyle:{fontSize:10,fontWeight:400,fontStyle:"italic",color:"black"},gap:3.34375})
.editTitle({alongOffset:-37.5859375})
.createData({values:data})
.createComputedData({id:"numericYear",as:"sourceYear",expression:{op:"toNumber",operand:{field:"Year"}}})
.createComputedData({id:"numericValues",as:"sourceValue",expression:{op:"toNumber",operand:{field:"Value1"}}})
.createLinePlot({x:{field:"sourceYear"},y:{field:"sourceValue"},guides:false})
  .editXScale({domain:[1970,2020]})
  .editYScale({domain:[0,16000]})
.editLineMark({strokeWidth:2})
.encodeColor({field:"Region",scale:{domain:["Sub Saharan Africa","Latin America and Caribbean","North America","East Asia and Pacific","Europe and Central Asia","South Asia","Middle East and North Africa"],range:["rgb(212, 238, 180)","rgb(169, 221, 183)","rgb(116, 201, 189)","rgb(69, 180, 194)","rgb(41, 151, 190)","rgb(33, 115, 177)","rgb(35, 78, 160)"]}})
.createAxes({
  x: {
    scale: "x",
    ticksAndLabels: {
      values: [1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020],
      ticks: { length: 5, color: "#888", alongOffset: 0.5 },
      labels: {
        fontSize: 10,
        color: "#000",
        format: ",.0f",
        offset: 5.5,
        alongOffset: 0.5,
        flush: true,
        labelMap: [
          { value: 1975, label: "" },
          { value: 1985, label: "" },
          { value: 1995, label: "" },
          { value: 2005, label: "" },
          { value: 2015, label: "" }
        ]
      }
    },
    title: { text: "Year", fontSize: 11, fontWeight: 700, color: "#000", offset: 27.578125, alongOffset: 0.5 },
    underlay: true
  },
  y: {
    scale: "y",
    title: false,
    ticksAndLabels: {
      values: [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000],
      ticks: { length: 5, color: "#888", alongOffset: 0.5 },
      labels: { fontSize: 10, color: "#000", format: ",.0f", offset: 6.5, alongOffset: 0.890625 }
    },
    underlay: true
  }
})
.editXAxis({ line: { color: "#888" } })
.editYAxis({ line: { color: "#888" } })
.createLegend({
  position: "top-left",
  title: false,
  labels: { fontSize: 10, color: "#000" }
})
.editLegend({
  symbol: { length: 10, lineWidth: 1.5 }
})
.createData({id:"rules",values:rules})
.createRuleMark({stroke:"#e54753",strokeWidth:2})
.encodeX({field:"x",fieldType:"quantitative",scale:{id:"x"}});
}