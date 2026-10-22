import {chart} from 'ggaction';
import data from './data.json';

// Combined ordinal size/shape legend via combine:'size-shape' — see doc-8d4a6d5bcdd6ce8f.
export function buildChart() {
  return chart()
    .createCanvas({plot: {width: 200, height: 200}, margin: {left: 39, top: 5, right: 74, bottom: 37}, plotBorder: {}})
    .createData({values: data})
    .filterData({id: 'cars1970', field: 'Year', oneOf: ['1970-01-01']})
    .filterData({id: 'definedHP', field: 'Horsepower', noneOf: [null]})
    .filterData({id: 'definedMPG', field: 'Miles_per_Gallon', noneOf: [null]})
    .createScatterPlot({x: {field: 'Horsepower', scale: {domain: [0, 240]}}, y: {field: 'Miles_per_Gallon', scale: {domain: [0, 28]}}, guides: false})
    .editPointMark({stroke: false, opacity: 0.6})
    .encodeShape({field: 'Cylinders', scale: {domain: [4, 6, 8], range: ['circle', 'square', 'triangle-up']}})
    .encodeSize({field: 'Cylinders', fieldType: 'ordinal', scale: {domain: [4, 6, 8], range: [3.141592653589793, 182.5, 156.31758538309117]}})
    .encodeColor({field: 'Origin', scale: {domain: ['Europe', 'Japan', 'USA']}})
    .createGuides({axes: {x: {line: {color: '#888'}, ticksAndLabels: {values: [0, 50, 100, 150, 200], ticks: {length: 5, color: '#888'}, labels: {fontSize: 10, color: 'black', offset: 5.5, alongOffset: 0.5, flush: true}}, title: {text: 'Horsepower', fontSize: 11, fontWeight: 700, color: 'black', offset: 27.578125, alongOffset: 0.5}}, y: {line: {color: '#888'}, ticksAndLabels: {values: [0, 5, 10, 15, 20, 25], ticks: {length: 5, color: '#888'}, labels: {fontSize: 10, color: 'black', offset: 6.5, alongOffset: 0.890625}}, title: {text: 'Miles_per_Gallon', fontSize: 11, fontWeight: 700, color: 'black', offset: 26.544921875, alongOffset: 0.5}}}, grid: {horizontal: {color: '#ddd'}, vertical: {color: '#ddd'}}, legend: {channels: ['color'], labels: {fontSize: 10, color: 'black'}, titleStyle: {fontSize: 11, fontWeight: 700, color: 'black'}, symbol: {layers: [{type: 'point', size: 5, opacity: 0.6}]}, titlePadding: 3}})
    .createGuides({axes: false, grid: false, legend: {channels: ['shape', 'size'], combine: 'size-shape', labels: {fontSize: 10, color: 'black'}, titleStyle: {fontSize: 11, fontWeight: 700, color: 'black'}, symbol: {layers: [{type: 'point', fill: 'black', stroke: 'transparent', strokeWidth: 0, opacity: 0.36}]}, titlePadding: 3}});
}