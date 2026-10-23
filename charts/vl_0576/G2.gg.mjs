// DOCS: doc-b9261a4b2909a353 createLinePlot facade owns x,y,guides for the line chart
// DOCS: doc-4caf8f5e4552a6b2 facet + editFacetGuides outer axes pattern
// DOCS: doc-b2d0eb8c5f214d93 facet-shared-top-lane via editCompositionLayout
// G1 Stage1: canvas, data, derived transforms
// G1 Stage2: fold + source filter year>2004
// G1 Stage3: complete line plot with full guides
// G1 Stage4: mark paint + facet + layout
// G1 Stage5: title with subtitle
import {chart} from "ggaction";
import data from "./data.json";

export function buildChart(){
  return chart()
    .createCanvas({plot:{width:250,height:400},margin:{left:29,right:10,top:68,bottom:23},plotBorder:{color:"#ddd",lineWidth:1,underlay:true}})
    .createData({values:data})
    .createComputedData({id:"nyIndex",as:"New York index",expression:{op:"divide",left:{op:"toNumber",operand:{field:"New York"}},right:{constant:567.14}}})
    .createComputedData({id:"lvIndex",as:"Las Vegas index",expression:{op:"divide",left:{op:"toNumber",operand:{field:"Las Vegas"}},right:{constant:219.34}}})
    .createComputedData({id:"timestamp",as:"sourceDate",expression:{op:"parseTime",operand:{field:"Date"}}})
    .createComputedData({id:"calendar",as:"year",expression:{op:"datePart",part:"year",operand:{field:"sourceDate"},timeZone:"UTC"}})
    .createFoldData({id:"folded",fields:["New York index","Las Vegas index"],as:{key:"city",value:"housePrice"}})
    .filterData({id:"after2004",field:"year",predicate:{op:"gt",value:2004}})
    .createLinePlot({x:{field:"sourceDate",fieldType:"temporal",scale:{domain:[1104537600000,1656633600000]}},y:{field:"housePrice",scale:{zero:true,nice:{count:10}}},guides:false})
    .createGuides({axes:{x:{line:{color:"#888"},ticksAndLabels:{values:[1136073600000,1199145600000,1262304000000,1325376000000,1388534400000,1451606400000,1514764800000,1577836800000,1640995200000],ticks:{length:5,color:"#888",alongOffset:0.5},labels:{fontSize:10,color:"black",format:"%Y",flush:false,offset:6.5,alongOffset:0.5}},title:false},y:{offset:3,line:{color:"#888"},ticksAndLabels:{count:10,rounding:"nearest",ticks:{length:5,color:"#888",alongOffset:0.5},labels:{fontSize:10,color:"black",format:"ticks",offset:6.5,alongOffset:0.890625}},title:false}},grid:{horizontal:{color:"#ddd"},vertical:false},legend:false})
    .editLineMark({stroke:"rgb(128, 0, 0)"})
    .facet({field:"city",data:"folded",values:["Las Vegas index","New York index"]})
    .editFacetHeaders({fontSize:10,fontWeight:400,color:"black"})
    .editFacetHeaders({offset:9.609375})
    .editFacetGuides({axes:"outer",legend:false})
    .editCompositionLayout({columns:2,gap:26,spacing:"plot"})
    .editCompositionLayout({topLane:"shared"})
    .createTitle({text:"House Prices: New York and Las Vegas",titleStyle:{fontSize:13,fontWeight:700,color:"black"},alongOffset:-23.9013671875})
    .editTitle({offset:-2.953125})
    .editTitle({subtitle:"All transactions house price index. Rebased to 2005. Source: FRED.",subtitleStyle:{fontSize:10,fontWeight:400,fontStyle:"italic",color:"black"},gap:3.34375});
}