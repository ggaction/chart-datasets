// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1 doc-5f9c35fbf79658cc doc-ba092ec842bafcc1
import { chart } from "ggaction";
import data from "./data.json";

const zeroLabels = [
  { value: "University College London[b]", label: "0" },
  { value: "University of Manchester", label: "0" },
  { value: "Coventry University", label: "0" },
  { value: "University of Leeds", label: "0" },
  { value: "Nottingham Trent University", label: "0" },
  { value: "University of Birmingham", label: "0" },
  { value: "University of Edinburgh", label: "0" },
  { value: "University of Nottingham", label: "0" },
  { value: "Manchester Metropolitan University", label: "0" },
  { value: "Cardiff University", label: "0" },
  { value: "King's College London[b]", label: "0" },
  { value: "University of Glasgow", label: "0" },
  { value: "Sheffield Hallam University", label: "0" },
  { value: "University of the West of England", label: "0" },
  { value: "University of Sheffield", label: "0" },
  { value: "University of Liverpool", label: "0" },
  { value: "De Montfort University", label: "0" },
  { value: "Northumbria University", label: "0" },
  { value: "Newcastle University", label: "0" },
  { value: "Ulster University", label: "0" },
  { value: "University of Bristol", label: "0" },
  { value: "University of Exeter", label: "0" },
  { value: "Birmingham City University", label: "0" },
  { value: "University of Warwick", label: "0" },
  { value: "University of Portsmouth", label: "0" },
  { value: "Anglia Ruskin University", label: "0" },
  { value: "University of Oxford", label: "0" },
  { value: "University of Hertfordshire", label: "0" },
  { value: "Liverpool John Moores University", label: "0" },
  { value: "Queen's University Belfast", label: "0" },
  { value: "University of Central Lancashire", label: "0" },
  { value: "University of Strathclyde", label: "0" },
  { value: "Leeds Beckett University", label: "0" },
  { value: "University of South Wales", label: "0" },
  { value: "University of Southampton", label: "0" },
  { value: "Queen Mary, University of London[b]", label: "0" },
  { value: "University of Salford", label: "0" },
  { value: "University of Cambridge", label: "0" },
  { value: "Swansea University", label: "0" },
  { value: "Middlesex University", label: "0" },
  { value: "City, University of London[b]", label: "0" },
  { value: "University of the Arts London", label: "0" },
  { value: "University of Greenwich", label: "0" },
  { value: "University of York", label: "0" },
  { value: "University of Derby", label: "0" },
  { value: "Durham University", label: "0" },
  { value: "University of Westminster", label: "0" },
  { value: "Imperial College London", label: "0" },
  { value: "University of Sussex", label: "0" },
  { value: "Teesside University", label: "0" },
  { value: "University of Brighton", label: "0" },
  { value: "University of Wolverhampton", label: "0" },
  { value: "University of Reading", label: "0" },
  { value: "University of Kent", label: "0" },
  { value: "University of Bath", label: "0" },
  { value: "University of Plymouth", label: "0" },
  { value: "Loughborough University", label: "0" },
  { value: "Kingston University", label: "0" },
  { value: "University of East Anglia", label: "0" },
  { value: "Glasgow Caledonian University", label: "0" },
  { value: "Bournemouth University", label: "0" },
  { value: "University of Huddersfield", label: "0" },
  { value: "University of Surrey", label: "0" },
  { value: "Oxford Brookes University", label: "0" },
  { value: "London South Bank University", label: "0" },
  { value: "University of Bedfordshire", label: "0" },
  { value: "University of Essex", label: "0" },
  { value: "University of Lincoln", label: "0" },
  { value: "University of Dundee", label: "0" },
  { value: "University of Leicester", label: "0" },
  { value: "University of the West of Scotland", label: "0" },
  { value: "University of Sunderland", label: "0" },
  { value: "Staffordshire University", label: "0" },
  { value: "Lancaster University", label: "0" },
  { value: "Brunel University London", label: "0" },
  { value: "Aston University", label: "0" },
  { value: "University of East London", label: "0" },
  { value: "University of Aberdeen", label: "0" },
  { value: "University of Hull", label: "0" },
  { value: "Buckinghamshire New University", label: "0" },
  { value: "Edinburgh Napier University", label: "0" },
  { value: "Edge Hill University", label: "0" },
  { value: "University of Chester", label: "0" },
  { value: "Canterbury Christ Church University", label: "0" },
  { value: "University of Wales, Trinity Saint David", label: "0" },
  { value: "Robert Gordon University", label: "0" },
  { value: "University of Stirling", label: "0" },
  { value: "Roehampton University", label: "0" },
  { value: "University of Northampton", label: "0" },
  { value: "London School of Economics[b]", label: "0" },
  { value: "University of West London", label: "0" },
  { value: "Royal Holloway, University of London[b]", label: "0" },
  { value: "Birkbeck, University of London[b]", label: "0" },
  { value: "Heriot-Watt University", label: "0" },
  { value: "Cardiff Metropolitan University", label: "0" },
  { value: "Keele University", label: "0" },
  { value: "University of St Andrews", label: "0" },
  { value: "Solent University", label: "0" },
  { value: "London Metropolitan University", label: "0" },
  { value: "University of Worcester", label: "0" },
  { value: "Goldsmiths, University of London[b]", label: "0" }
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 864,
      height: 408,
      margin: { left: 58, top: 40, right: 6, bottom: 18 }
    })
    .createData({ values: data })
    .createTitle({
      text: "Total number of students at the 100 biggest UK univeristies",
      titleStyle: { fontSize: 13, fontWeight: 700, color: "black" },
      subtitleStyle: { fontSize: 10, fontStyle: "italic", color: "black" }
    })
    .editTitle({ subtitle: "Source: Wikipedia", offset: -7, align: "left" })
    .createBarPlot({ x: "Institution", y: "Total", guides: false })
    .editBarMark({ fill: "darkblue", opacity: 1 })
    .encodeBarWidth({ band: 1 })
    .editXScale({ paddingInner: 0.1, paddingOuter: 0.05 })
    .editYScale({ domain: [0, 45000], zero: true })
    .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: {
          fontSize: 10,
          offset: 7,
          rotation: { value: -90, unit: "degrees" },
          overlap: "allow",
          labelMap: zeroLabels
        }
      },
      title: false
    })
    .createYAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        count: 10,
        ticks: { color: "#888" },
        labels: { fontSize: 10, offset: 7, format: ",.0f" }
      },
      title: {
        text: "Total number of students",
        fontSize: 11,
        fontWeight: 700,
        offset: 50
      }
    })
    .createGrid({ horizontal: { color: "#ddd" } });
}