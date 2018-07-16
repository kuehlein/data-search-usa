// import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer
// } from "recharts";

// // import { formatTable, getAxisYDomain } from "./utils";

// const data = [
//   {
//     university: "MAS",
//     year: 2015,
//     academic_rank: 1,
//     months_covered_instructional_staff: 358.5
//   },
//   {
//     university: "MAS",
//     year: 2015,
//     academic_rank: 2,
//     months_covered_instructional_staff: 410
//   },
//   {
//     university: "MAS",
//     year: 2015,
//     academic_rank: 3,
//     months_covered_instructional_staff: 457.5
//   },
//   {
//     university: "MAS",
//     year: 2015,
//     academic_rank: 4,
//     months_covered_instructional_staff: 90
//   },
//   {
//     university: "MAS",
//     year: 2015,
//     academic_rank: 5,
//     months_covered_instructional_staff: 197
//   },
//   {
//     university: "MAS",
//     year: 2015,
//     academic_rank: 6,
//     months_covered_instructional_staff: 63
//   },
//   {
//     university: "SFI",
//     year: 2015,
//     academic_rank: 1,
//     months_covered_instructional_staff: 72
//   },
//   {
//     university: "SFI",
//     year: 2015,
//     academic_rank: 2,
//     months_covered_instructional_staff: 60
//   },
//   {
//     university: "SFI",
//     year: 2015,
//     academic_rank: 3,
//     months_covered_instructional_staff: 70
//   },
//   {
//     university: "SFI",
//     year: 2015,
//     academic_rank: 4,
//     months_covered_instructional_staff: 84
//   },
//   {
//     university: "SFI",
//     year: 2015,
//     academic_rank: 5,
//     months_covered_instructional_staff: 24
//   },
//   {
//     university: "SFI",
//     year: 2015,
//     academic_rank: 6,
//     months_covered_instructional_staff: 96
//   },
//   {
//     university: "TRI",
//     year: 2015,
//     academic_rank: 1,
//     months_covered_instructional_staff: 27
//   },
//   {
//     university: "TRI",
//     year: 2015,
//     academic_rank: 2,
//     months_covered_instructional_staff: 70
//   },
//   {
//     university: "TRI",
//     year: 2015,
//     academic_rank: 3,
//     months_covered_instructional_staff: 147
//   },
//   {
//     university: "TRI",
//     year: 2015,
//     academic_rank: 4,
//     months_covered_instructional_staff: 200
//   },
//   {
//     university: "TRI",
//     year: 2015,
//     academic_rank: 5,
//     months_covered_instructional_staff: 72
//   },
//   {
//     university: "TRI",
//     year: 2015,
//     academic_rank: 6,
//     months_covered_instructional_staff: 135
//   }
// ];

// class LineChartRe extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       quote: ""
//     };
//   }

//   componentDidMount() {
//     let data = [];
//     data = mapTable(filterTable(initialReformat(HIVKnowledgeData)));
//     checkQuoteLength();
//   }

//   render() {
//     let data = [],
//       finalData = [],
//       i = 0;
//     if (this.state.data.length > 0) {
//       //format data so that data can be utilised by year... [title: {year: [obj_with_data, ...], ...}, ...]
//       data = filterAll(dataFunction(this.state.data));
//       //what exact countries do I want to show data for?
//       data = data["Knowlege about sexual transmission of AIDS"];
//       //set each country as a 'dataKey' with value what is shown on the chart.
//       for (var year in data) {
//         finalData.push({ year });
//         data[year].forEach(obj => {
//           //do this in case there is a male and female to average the data between gender
//           if (parseFloat(finalData[i][obj.country]) > 0) {
//             finalData[i][obj.country] =
//               (finalData[i][obj.country] + +obj.value) / 2;
//           }
//           //otherwise set to value if only male or female, or first instance of either
//           else finalData[i][obj.country] = +obj.value;
//         });
//         i++;
//       }
//     }

//     return (
//       <div>
//         <ResponsiveContainer width="100%" height={300}>
//           <LineChart cx="50%" cy="50%" outerRadius="80%" data={finalData}>
//             <XAxis dataKey="year" />
//             <YAxis />
//             <CartesianGrid strokeDasharray="3 3" />
//             <Tooltip />
//             <Line
//               connectNulls={true}
//               type="monotone"
//               dataKey="Zambia"
//               stroke="black"
//             />
//             <Line
//               connectNulls={true}
//               type="monotone"
//               dataKey="Bangladesh"
//               stroke="green"
//             />
//             <Line
//               connectNulls={true}
//               type="monotone"
//               dataKey="Bolivia (Plurinational State of)"
//               stroke="purple"
//             />
//             <Line
//               connectNulls={true}
//               type="monotone"
//               dataKey="Cameroon"
//               stroke="orange"
//             />
//             <Line
//               connectNulls={true}
//               type="monotone"
//               dataKey="Ghana"
//               stroke="brown"
//             />
//             <Line
//               connectNulls={true}
//               type="monotone"
//               dataKey="Malawi"
//               stroke="#C90016"
//             />
//             <Line
//               connectNulls={true}
//               type="monotone"
//               dataKey="Nepal"
//               stroke="red"
//             />
//             <Line
//               connectNulls={true}
//               type="monotone"
//               dataKey="Zimbabwe"
//               stroke="maroon"
//             />
//             <Line
//               connectNulls={true}
//               type="monotone"
//               dataKey="United Republic of Tanzania"
//               stroke="grey"
//             />
//             <Line
//               connectNulls={true}
//               type="monotone"
//               dataKey="Peru"
//               stroke="#6082B6"
//             />
//           </LineChart>
//         </ResponsiveContainer>
//       </div>
//     );
//   }
// }
// LineChartRe.defaultProps = {
//   table: {}
// };

// LineChartRe.propTypes = {
//   table: PropTypes.objectOf(PropTypes.any)
// };

// const mapStateToProps = state => ({
//   table: state.table
// });

// export default connect(mapStateToProps)(LineChartRe);

// import {
//   Label,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ReferenceArea
// } from "recharts";

// const data = [
//   { name: 1, cost: 4.11, impression: 100 },
//   { name: 2, cost: 2.39, impression: 120 },
//   { name: 3, cost: 1.37, impression: 150 },
//   { name: 4, cost: 1.16, impression: 180 },
//   { name: 5, cost: 2.29, impression: 200 },
//   { name: 6, cost: 3, impression: 499 },
//   { name: 7, cost: 0.53, impression: 50 },
//   { name: 8, cost: 2.52, impression: 100 },
//   { name: 9, cost: 1.79, impression: 200 },
//   { name: 10, cost: 2.94, impression: 222 },
//   { name: 11, cost: 4.3, impression: 210 },
//   { name: 12, cost: 4.41, impression: 300 },
//   { name: 13, cost: 2.1, impression: 50 },
//   { name: 14, cost: 8, impression: 190 },
//   { name: 15, cost: 0, impression: 300 },
//   { name: 16, cost: 9, impression: 400 },
//   { name: 17, cost: 3, impression: 200 },
//   { name: 18, cost: 2, impression: 50 },
//   { name: 19, cost: 3, impression: 100 },
//   { name: 20, cost: 7, impression: 100 }
// ];

// const getAxisYDomain = (from, to, ref, offset) => {
//   const refData = data.slice(from - 1, to);
//   let [bottom, top] = [refData[0][ref], refData[0][ref]];
//   refData.forEach(d => {
//     if (d[ref] > top) top = d[ref];
//     if (d[ref] < bottom) bottom = d[ref];
//   });

//   return [(bottom | 0) - offset, (top | 0) + offset];
// };

// const initialState = {
//   data,
//   left: "dataMin",
//   right: "dataMax",
//   refAreaLeft: "",
//   refAreaRight: "",
//   top: "dataMax+1",
//   bottom: "dataMin-1",
//   top2: "dataMax+20",
//   bottom2: "dataMin-20",
//   animation: true
// };

// class DataVis extends Component {
//   constructor(props) {
//     super(props);
//     this.state = initialState;
//   }

//   zoom() {
//     let { refAreaLeft, refAreaRight, data } = this.state;

//     if (refAreaLeft === refAreaRight || refAreaRight === "") {
//       this.setState(() => ({
//         refAreaLeft: "",
//         refAreaRight: ""
//       }));
//       return;
//     }

//     // xAxis domain
//     if (refAreaLeft > refAreaRight)
//       [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

//     // yAxis domain
//     const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, "cost", 1);
//     const [bottom2, top2] = getAxisYDomain(
//       refAreaLeft,
//       refAreaRight,
//       "impression",
//       50
//     );

//     this.setState(() => ({
//       refAreaLeft: "",
//       refAreaRight: "",
//       data: data.slice(),
//       left: refAreaLeft,
//       right: refAreaRight,
//       bottom,
//       top,
//       bottom2,
//       top2
//     }));
//   }

//   zoomOut() {
//     const { data } = this.state;
//     this.setState(() => ({
//       data: data.slice(),
//       refAreaLeft: "",
//       refAreaRight: "",
//       left: "dataMin",
//       right: "dataMax",
//       top: "dataMax+1",
//       bottom: "dataMin",
//       top2: "dataMax+50",
//       bottom: "dataMin+50"
//     }));
//   }

//   render() {
//     const {
//       data,
//       barIndex,
//       left,
//       right,
//       refAreaLeft,
//       refAreaRight,
//       top,
//       bottom,
//       top2,
//       bottom2
//     } = this.state;

//     return (
//       <div className="highlight-bar-charts">
//         <a
//           href="javascript: void(0);"
//           className="btn update"
//           onClick={this.zoomOut.bind(this)}
//         >
//           Zoom Out
//         </a>

//         <p>Highlight / Zoom - able Line Chart</p>
//         <LineChart
//           width={800}
//           height={400}
//           data={data}
//           onMouseDown={e => this.setState({ refAreaLeft: e.activeLabel })}
//           onMouseMove={e =>
//             this.state.refAreaLeft &&
//             this.setState({ refAreaRight: e.activeLabel })
//           }
//           onMouseUp={this.zoom.bind(this)}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis
//             allowDataOverflow={true}
//             dataKey="name"
//             domain={[left, right]}
//             type="number"
//           />
//           <YAxis
//             allowDataOverflow={true}
//             domain={[bottom, top]}
//             type="number"
//             yAxisId="1"
//           />
//           <YAxis
//             orientation="right"
//             allowDataOverflow={true}
//             domain={[bottom2, top2]}
//             type="number"
//             yAxisId="2"
//           />
//           <Tooltip />
//           <Line
//             yAxisId="1"
//             type="natural"
//             dataKey="cost"
//             stroke="#8884d8"
//             animationDuration={300}
//           />
//           <Line
//             yAxisId="2"
//             type="natural"
//             dataKey="impression"
//             stroke="#82ca9d"
//             animationDuration={300}
//           />

//           {refAreaLeft && refAreaRight ? (
//             <ReferenceArea
//               yAxisId="1"
//               x1={refAreaLeft}
//               x2={refAreaRight}
//               strokeOpacity={0.3}
//             />
//           ) : null}
//         </LineChart>
//       </div>
//     );
//   }
// }
