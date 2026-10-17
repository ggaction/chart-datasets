// DOCS: doc-2e6240c00cb297cc, doc-80198e379a34e5ab — createScatterPlot facade, encodeStroke/editPointMark, complete axes, grid and symbol legend
import { chart } from "ggaction";
import data from "./data.json";

const xDomain = [
  "USA", "United Kingdom", "Germany", "Denmark", "Switzerland", "France",
  "Slovakia", "Australia", "Brazil", "Mexico", "Bahrain", "Kenya", "Iceland",
  "New Zealand", "Japan", "South Africa", "Thailand", "Hong Kong", "India",
  "Vietnam", "Estonia", "Bangladesh", "Netherlands", "Liechtenstein", "Poland",
  "Spain", "Saudi Arabia", "Pakistan", "Egypt", "Seychelles", "Italy", "Lebanon",
  "Chile", "Djibouti", "Mongolia", "Peru", "Jamaica", "Malaysia", "Nigeria",
  "China", "Laos", "Dominican Republic", "Austria", "Ghana", "Paraguay",
  "Malawi", "Gabon", "Serbia", "Israel", "Iraq", "Argentina", "Uganda",
  "Taiwan", "Romania", "Myanmar", "Palestine", "Greece", "Zimbabwe", "Canada",
  "Philippines", "Turkey", "Sweden", "Colombia", "Tunisia", "Russia",
  "Sierra Leone", "Uzbekistan", "Armenia", "Libya", "South Korea", "Finland",
  "Mali", "Uruguay", "Portugal", "Czech Republic", "Jordan", "Venezuela",
  "Belgium", "Ethiopia", "Georgia", "Morocco", "Nepal", "Ireland",
  "Union of the Comoros", "Iran", "Timor-Leste", "Benin", "Malta", "Palau",
  "Togo", "Guatemala", "Somalia", "Indonesia", "Singapore", "Ecuador",
  "Gambia", "Kazakhstan", "Sri Lanka", "Lesotho", "Norway", "Belize", "Kosovo",
  "Guinea", "Cambodia", "Cuba", "Belarus", "Cameroon", "Hungary", "Suriname",
  "Zambia", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
  "Antigua and Barbuda", "Aruba", "Azerbaijan", "Bahamas", "Barbados",
  "Bermuda", "Bolivia", "Bonaire", "Bosnia and Herzegovina", "Botswana",
  "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Côte d'Ivoire",
  "Cabo Verde", "Central African Republic", "Chad", "Costa Rica", "Croatia",
  "Curacao", "Cyprus", "Democratic Republic of the Congo", "Dominica",
  "El Salvador", "Equatorial Guinea", "Eswatini", "Fiji", "French Guiana",
  "French Polynesia", "Grenada", "Guadeloupe", "Guinea-Bissau", "Guyana",
  "Haiti", "Honduras", "Kiribati", "Kuwait", "Kyrgyzstan", "Latvia",
  "Liberia", "Lithuania", "Luxembourg", "Madagascar", "Maldives",
  "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Micronesia",
  "Moldova", "Monaco", "Montenegro", "Mozambique", "Namibia", "Nicaragua",
  "Niger", "North Macedonia", "Oman", "Panama", "Papua New Guinea", "Qatar",
  "Republic of the Congo", "Reunion", "Rwanda", "Saint Barthélemy",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Martin",
  "Saint Vincent and the Grenadines", "Sao Tome and Principe", "Senegal",
  "Sint Eustatius", "Sint Maarten", "Slovenia", "Solomon Islands",
  "South Sudan", "Sudan", "Syria", "Tanzania", "Trinidad and Tobago",
  "Ukraine", "United Arab Emirates", "Vanuatu"
];

export function buildChart() {
  return chart()
    .createCanvas({
      width: 4177,
      height: 489,
      margin: { left: 72, top: 9, right: 125, bottom: 180 }
    })
    .createData({ values: data })
    .createScatterPlot({
      x: {
        field: "country",
        fieldType: "nominal"
      },
      y: {
        field: "num_sequences",
        fieldType: "quantitative"
      },
      guides: false
    })
    .editXScale({ type: "point", domain: xDomain })
    .editYScale({ type: "symlog", domain: [0, 4000000] })
    .encodeStroke({ field: "db_name", fieldType: "nominal" })
    .editStrokeScale({
      target: "scatterPlot",
      domain: ["GISAID sequences", "Open sequences"],
      range: ["#4c78a8", "#f58518"]
    })
    .encodePointRadius({ value: 2.7386 })
    .editPointMark({ fill: "transparent", opacity: 0.7, strokeWidth: 2 })
    .createXAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          rotation: { value: -90, unit: "degrees" }
        }
      },
      title: {
        text: "country",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 170
      }
    })
    .createYAxis({
      line: {},
      ticksAndLabels: {
        ticks: { length: 5 },
        values: [0, 500000, 1000000, 1500000, 2000000, 2500000, 3000000, 3500000, 4000000],
        labels: {
          fontSize: 10,
          fontFamily: "sans-serif",
          offset: 7,
          labelMap: [
            { value: 1500000, label: "" },
            { value: 2500000, label: "" },
            { value: 3000000, label: "" },
            { value: 4000000, label: "" }
          ]
        }
      },
      title: {
        text: "num_sequences",
        fontSize: 11,
        fontFamily: "sans-serif",
        offset: 60
      }
    })
    .editXAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: { ticks: { color: "#888" } },
      title: { fontWeight: 700 }
    })
    .editYAxis({
      line: { color: "#888", lineWidth: 1 },
      ticksAndLabels: {
        ticks: { color: "#888" },
        labels: { format: ",.0f" }
      },
      title: { fontWeight: 700 }
    })
    .createGrid({
      horizontal: { color: "#ddd", lineWidth: 1 }
    })
    .createLegend({
      channels: ["stroke"],
      symbol: {
        layers: [
          { type: "point", shape: "circle", size: 5, fill: "transparent", strokeWidth: 1.5 }
        ]
      },
      labels: { fontSize: 10, fontFamily: "sans-serif" }
    })
    .editLegend({
      titleStyle: { fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "black" }
    })
    .editLegendBlock({
      target: "scatterPlot",
      channel: "stroke",
      symbol: { opacity: 0.7 }
    });
}