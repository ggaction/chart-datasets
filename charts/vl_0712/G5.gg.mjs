// DOCS: doc-6c2c08869091f6a0 doc-fc11e9fb291905d1 doc-76573a465e2b6a33
import { chart } from "ggaction";
import data from "./data.json";

export function buildChart() {
  return chart()
    .createCanvas({ width: 496, height: 2172, margin: { left: 191, top: 35, right: 105, bottom: 37 } })
    .createData({ values: data })
    .createComputedData({ id: "giniNumeric", as: "2021n", expression: { op: "toNumber", operand: { field: "2021" } } })
    .createSortedData({ id: "sorted", sortBy: [{ field: "2021n", order: "ascending" }] })
    .createBarPlot({
      x: { field: "2021n" },
      y: { field: "Country", fieldType: "nominal" },
      guides: false
    })
    .editXScale({ domain: [0, 1] })
    .editYScale({ domain: ["Czechia", "Iceland", "Slovakia", "Norway", "Netherlands", "Slovenia", "Switzerland", "France", "Sweden", "Belarus", "Hungary", "Macao", "North Macedonia", "Singapore", "Ukraine", "Austria", "Greece", "Korea, Republic of", "Spain", "Belgium", "Denmark", "Finland", "Cyprus", "New Zealand", "Croatia", "Ireland", "Latvia", "Malta", "Portugal", "United Kingdom of Great Britain and Northern Ireland", "Albania", "Azerbaijan", "Bosnia and Herzegovina", "Brunei Darussalam", "Kosovo", "Luxembourg", "Australia", "Germany", "Guinea", "Moldova", "Poland", "Algeria", "Armenia", "Korea (Democratic People's Republic of)", "Italy", "Maldives", "Montenegro", "Sao Tome and Principe", "Serbia", "Afghanistan", "Canada", "Estonia", "Malaysia", "Mauritania", "Bangladesh", "Bulgaria", "Kazakhstan", "Nepal", "Pakistan", "Timor-Leste", "Tunisia", "Japan", "Kyrgyzstan", "Libya", "Myanmar", "Romania", "Bhutan", "Eritrea", "Ethiopia", "Guinea-Bissau", "Liberia", "Mongolia", "Nigeria", "Sudan", "Tajikistan", "Uruguay", "Gabon", "Gambia", "Mali", "Somalia", "Viet Nam", "China", "Egypt", "Mauritius", "Philippines", "Sierra Leone", "Uzbekistan", "Benin", "Cambodia", "Chad", "Russian Federation", "Senegal", "United States of America", "Argentina", "Burundi", "Cuba", "Georgia", "Hong Kong", "Israel", "Jordan", "Malawi", "Niger", "Papua New Guinea", "Sri Lanka", "Thailand", "United Arab Emirates", "C\u00f4te d'Ivoire", "Congo, Democratic Republic of the", "Djibouti", "El Salvador", "Indonesia", "Kenya", "Lao People's Democratic Republic", "Morocco", "T\u00fcrkiye", "Cabo Verde", "Ghana", "Iran (Islamic Republic of)", "Iraq", "Madagascar", "Palestine, State of", "Taiwan, Province of China", "Tanzania, United Republic of", "Togo", "Turkmenistan", "Comoros", "Lesotho", "South Sudan", "Ecuador", "Equatorial Guinea", "India", "Lithuania", "Seychelles", "Uganda", "Cameroon", "Dominican Republic", "Kuwait", "Rwanda", "Burkina Faso", "Lebanon", "Saudi Arabia", "Syrian Arab Republic", "Bahamas", "Bahrain", "Belize", "Bolivia (Plurinational State of)", "Congo", "Guatemala", "Guyana", "Haiti", "Honduras", "Jamaica", "Nicaragua", "Panama", "Paraguay", "Qatar", "Suriname", "Trinidad and Tobago", "Venezuela (Bolivarian Republic of)", "Oman", "Yemen", "Angola", "Brazil", "Colombia", "Zimbabwe", "Botswana", "Costa Rica", "Eswatini", "Chile", "Mozambique", "Zambia", "Central African Republic", "Peru", "Namibia", "Mexico", "South Africa"], paddingInner: 0.1, paddingOuter: 0.05 })
    .encodeColor({ field: "Continent", layout: "overlay" })
    .editColorScale({
      target: "barPlot",
      domain: ["Africa", "Asia", "Europe", "North America", "North America ", "Oceania", "South America"],
      range: ["rgb(33, 12, 74)", "rgb(87, 16, 109)", "rgb(137, 34, 106)", "rgb(187, 55, 85)", "rgb(228, 89, 51)", "rgb(250, 141, 11)", "rgb(249, 202, 51)"]
    })
    .encodeBarWidth({ band: 1 })
    .createPointMark({ id: "points", fill: "transparent", stroke: "transparent" })
    .editPointMark({ target: "points", opacity: 1, strokeWidth: 2 })
    .encodePointRadius({ value: Math.sqrt(50) / 2, target: "points" })
    .encodeX({ target: "points", field: "2021n" })
    .encodeY({ target: "points", field: "Country", fieldType: "nominal" })
    .applyTextMetrics({
    profile: {
      schemaVersion: 1,
      id: "source-0712-axis-widths",
      measurements: [
        { text: "0.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 13.90625 },
        { text: "0.2", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 13.90625 },
        { text: "0.4", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 13.90625 },
        { text: "0.6", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 13.90625 },
        { text: "0.8", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 13.90625 },
        { text: "1.0", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 13.90625 },
        { text: "Czechia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.140625 },
        { text: "Iceland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 32.25 },
        { text: "Slovakia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.8125 },
        { text: "Norway", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 33.90625 },
        { text: "Netherlands", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 53.921875 },
        { text: "Slovenia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.359375 },
        { text: "Switzerland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.703125 },
        { text: "France", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.125 },
        { text: "Sweden", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.140625 },
        { text: "Belarus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 33.90625 },
        { text: "Hungary", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.8125 },
        { text: "Macao", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.015625 },
        { text: "North Macedonia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 76.15625 },
        { text: "Singapore", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 45.59375 },
        { text: "Ukraine", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 34.46875 },
        { text: "Austria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.125 },
        { text: "Greece", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 32.796875 },
        { text: "Korea, Republic of", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 82.28125 },
        { text: "Spain", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.578125 },
        { text: "Belgium", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.140625 },
        { text: "Denmark", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 40.578125 },
        { text: "Finland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 32.8125 },
        { text: "Cyprus", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.6875 },
        { text: "New Zealand", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 58.921875 },
        { text: "Croatia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 32.25 },
        { text: "Ireland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.578125 },
        { text: "Latvia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 26.6875 },
        { text: "Malta", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 24.453125 },
        { text: "Portugal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.25 },
        { text: "United Kingdom of Great Britain and \u2026", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 173.4375 },
        { text: "Albania", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 33.359375 },
        { text: "Azerbaijan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 47.265625 },
        { text: "Bosnia and Herzegovina", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 108.96875 },
        { text: "Brunei Darussalam", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 85.046875 },
        { text: "Kosovo", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 33.359375 },
        { text: "Luxembourg", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 55.59375 },
        { text: "Australia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.90625 },
        { text: "Germany", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 41.125 },
        { text: "Guinea", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 32.25 },
        { text: "Moldova", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.8125 },
        { text: "Poland", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.140625 },
        { text: "Algeria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.140625 },
        { text: "Armenia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.25 },
        { text: "Korea (Democratic People's Republic \u2026", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 178.65625 },
        { text: "Italy", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.34375 },
        { text: "Maldives", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 39.46875 },
        { text: "Montenegro", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 53.375 },
        { text: "Sao Tome and Principe", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 103.21875 },
        { text: "Serbia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 28.90625 },
        { text: "Afghanistan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 52.828125 },
        { text: "Canada", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 35.03125 },
        { text: "Estonia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 33.359375 },
        { text: "Malaysia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 39.46875 },
        { text: "Mauritania", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 46.703125 },
        { text: "Bangladesh", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 52.828125 },
        { text: "Bulgaria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.703125 },
        { text: "Kazakhstan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 52.265625 },
        { text: "Nepal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 26.140625 },
        { text: "Pakistan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.359375 },
        { text: "Timor-Leste", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 52.984375 },
        { text: "Tunisia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.875 },
        { text: "Japan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 27.25 },
        { text: "Kyrgyzstan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 49.46875 },
        { text: "Libya", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 23.90625 },
        { text: "Myanmar", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 41.6875 },
        { text: "Romania", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 40.03125 },
        { text: "Bhutan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.703125 },
        { text: "Eritrea", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 29.453125 },
        { text: "Ethiopia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.140625 },
        { text: "Guinea-Bissau", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 65.59375 },
        { text: "Liberia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.03125 },
        { text: "Mongolia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 40.59375 },
        { text: "Nigeria", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.6875 },
        { text: "Sudan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 28.921875 },
        { text: "Tajikistan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 41.140625 },
        { text: "Uruguay", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.8125 },
        { text: "Gabon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.03125 },
        { text: "Gambia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 35.015625 },
        { text: "Mali", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 18.34375 },
        { text: "Somalia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.140625 },
        { text: "Viet Nam", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 40.953125 },
        { text: "China", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 26.140625 },
        { text: "Egypt", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.578125 },
        { text: "Mauritius", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 40.578125 },
        { text: "Philippines", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 48.375 },
        { text: "Sierra Leone", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 57.265625 },
        { text: "Uzbekistan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 49.46875 },
        { text: "Benin", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.578125 },
        { text: "Cambodia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 45.59375 },
        { text: "Chad", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 23.90625 },
        { text: "Russian Federation", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 86.71875 },
        { text: "Senegal", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.703125 },
        { text: "United States of America", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 110.0625 },
        { text: "Argentina", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 42.8125 },
        { text: "Burundi", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 34.46875 },
        { text: "Cuba", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 23.90625 },
        { text: "Georgia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 35.578125 },
        { text: "Hong Kong", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 50.046875 },
        { text: "Israel", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 24.453125 },
        { text: "Jordan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.578125 },
        { text: "Malawi", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.125 },
        { text: "Niger", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 23.90625 },
        { text: "Papua New Guinea", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 86.734375 },
        { text: "Sri Lanka", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 42.25 },
        { text: "Thailand", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.359375 },
        { text: "United Arab Emirates", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 94.5 },
        { text: "C\u00f4te d'Ivoire", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 55.828125 },
        { text: "Congo, Democratic Republic of the", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 155.078125 },
        { text: "Djibouti", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 33.359375 },
        { text: "El Salvador", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 51.140625 },
        { text: "Indonesia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 43.375 },
        { text: "Kenya", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 28.359375 },
        { text: "Lao People's Democratic Republic", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 152.546875 },
        { text: "Morocco", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.359375 },
        { text: "T\u00fcrkiye", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 32.796875 },
        { text: "Cabo Verde", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 52.828125 },
        { text: "Ghana", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.03125 },
        { text: "Iran (Islamic Republic of)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 110.59375 },
        { text: "Iraq", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 17.234375 },
        { text: "Madagascar", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 55.03125 },
        { text: "Palestine, State of", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 81.171875 },
        { text: "Taiwan, Province of China", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 115.625 },
        { text: "Tanzania, United Republic of", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 127.3125 },
        { text: "Togo", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 21.6875 },
        { text: "Turkmenistan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 60.21875 },
        { text: "Comoros", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 40.578125 },
        { text: "Lesotho", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 35.59375 },
        { text: "South Sudan", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 57.828125 },
        { text: "Ecuador", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.25 },
        { text: "Equatorial Guinea", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 80.0625 },
        { text: "India", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 21.6875 },
        { text: "Lithuania", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 40.59375 },
        { text: "Seychelles", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 48.359375 },
        { text: "Uganda", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 35.03125 },
        { text: "Cameroon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 46.703125 },
        { text: "Dominican Republic", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 88.9375 },
        { text: "Kuwait", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.015625 },
        { text: "Rwanda", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.703125 },
        { text: "Burkina Faso", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 58.921875 },
        { text: "Lebanon", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 38.9375 },
        { text: "Saudi Arabia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 56.71875 },
        { text: "Syrian Arab Republic", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 93.390625 },
        { text: "Bahamas", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 42.25 },
        { text: "Bahrain", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 34.46875 },
        { text: "Belize", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 27.25 },
        { text: "Bolivia (Plurinational State of)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 131.1875 },
        { text: "Congo", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 29.46875 },
        { text: "Guatemala", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 48.921875 },
        { text: "Guyana", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 35.03125 },
        { text: "Haiti", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 20.015625 },
        { text: "Honduras", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 43.359375 },
        { text: "Jamaica", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.25 },
        { text: "Nicaragua", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 45.59375 },
        { text: "Panama", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.25 },
        { text: "Paraguay", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 42.8125 },
        { text: "Qatar", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.015625 },
        { text: "Suriname", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 42.8125 },
        { text: "Trinidad and Tobago", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 90.640625 },
        { text: "Venezuela (Bolivarian Republic of)", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 152.875 },
        { text: "Oman", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 27.234375 },
        { text: "Yemen", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 30.78125 },
        { text: "Angola", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.140625 },
        { text: "Brazil", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 25.015625 },
        { text: "Colombia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 42.25 },
        { text: "Zimbabwe", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 46.140625 },
        { text: "Botswana", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 43.921875 },
        { text: "Costa Rica", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 48.90625 },
        { text: "Eswatini", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 37.25 },
        { text: "Chile", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 22.796875 },
        { text: "Mozambique", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 57.265625 },
        { text: "Zambia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 33.359375 },
        { text: "Central African Republic", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 107.28125 },
        { text: "Peru", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 21.125 },
        { text: "Namibia", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 36.6875 },
        { text: "Mexico", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 31.6875 },
        { text: "South Africa", fontFamily: "sans-serif", fontSize: 10, fontWeight: 400, width: 53.9375 }
      ]
    }
  })
  .createXAxis({
      line: { color: "#888" },
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        values: [0, 0.2, 0.4, 0.6, 0.8, 1],
        labels: { fontSize: 10, color: "black", offset: 7, flush: true, format: ".1f" }
      },
      title: { text: "Gini Coefficient", fontSize: 11, fontWeight: 700, offset: 30 }
    })
    .createYAxis({
      line: false,
      title: false,
      ticksAndLabels: {
        ticks: { length: 5, color: "#888" },
        labels: { fontSize: 10, color: "black", offset: 7, labelMap: [{ value: "United Kingdom of Great Britain and Northern Ireland", label: "United Kingdom of Great Britain and …" }, { value: "Korea (Democratic People's Republic of)", label: "Korea (Democratic People's Republic …" }] }
      }
    })
    .createGrid({
      vertical: { color: "#ddd", values: [0, 0.2, 0.4, 0.6, 0.8, 1] },
      horizontal: false
    })
    .createGuides({
      axes: false,
      grid: false,
      legend: {
        target: "barPlot",
        channels: ["color"],
        position: "right",
        title: "Continent",
        titleStyle: { fontSize: 11, fontWeight: 700, color: "black" },
        labels: { fontSize: 10, color: "black" },
        symbol: { layers: [{ type: "point", shape: "circle", size: 5, strokeWidth: 1.5 }] }
      }
    })
    .editLegendBlock({ target: "barPlot", channel: "color", labelMap: [{ value: "North America ", label: "North America" }] })
    .createTitle({ text: "Gini Coefficient, 2021", alongOffset: -185.65234375, titleStyle: { fontSize: 13, fontWeight: 700, color: "black" } })
    .editTitle({ offset: -13, gap: 1 })
    .editTitle({ subtitle: "Source: WID", subtitleStyle: { fontStyle: "italic", fontSize: 10, color: "black" } });
}