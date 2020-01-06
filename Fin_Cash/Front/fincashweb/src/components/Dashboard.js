import React, {Component}  from 'react'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Container, Row, Col} from 'reactstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Chart from "react-google-charts";
import { clickChangeLang } from "../actions/TESTEAction";

const data = [
    [
      {
        type: "date",
        id: "Date"
      },
      {
        type: "number",
        id: "Won/Loss"
      }
    ],
    [new Date(2012, 3, 13), 37032],
    [new Date(2012, 3, 14), 38024],
    [new Date(2012, 3, 15), 38024],
    [new Date(2012, 3, 16), 38108],
    [new Date(2012, 3, 17), 38229],
    // Many rows omitted for brevity.
    [new Date(2013, 9, 4), 38177],
    [new Date(2013, 9, 5), 38705],
    [new Date(2013, 9, 12), 38210],
    [new Date(2013, 9, 13), 38029],
    [new Date(2013, 9, 19), 38823],
    [new Date(2013, 9, 23), 38345],
    [new Date(2013, 9, 24), 38436],
    [new Date(2013, 9, 30), 38447]
  ];

const data2 = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"] // CSS-style declaration
  ];
  const data3 = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7] // CSS-style declaration
  ];
  const options3 = {
    title: "My Daily Activities",
    pieHole: 0.4,
    is3D: false
  };

  const data4 = [
    ["Year", "Sales", "Expenses"],
    ["2004", 1000, 400],
    ["2005", 1170, 460],
    ["2006", 660, 1120],
    ["2007", 1030, 540]
  ];
  const options4 = {
    title: "Company Performance",
    curveType: "function",
    legend: { position: "bottom" }
  };
  const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
      {
        color: "#2BB673"
      },
      {
        color: "#d91e48"
      },
      {
        color: "#007fad"
      },
      {
        color: "#e9a227"
      }
    ],
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "233238",
        fontSize: 14
      }
    },
    tooltip: {
      showColorCode: true
    },
    chartArea: {
      left: 0,
      top: 0,
      width: "100%",
      height: "80%"
    },
    fontName: "Roboto"
  };

  const data5 = [
    [
      "Location",
      "Parent",
      "Market trade volume (size)",
      "Market increase/decrease (color)"
    ],
    ["Global", null, 0, 0],
    ["America", "Global", 0, 0],
    ["Europe", "Global", 0, 0],
    ["Asia", "Global", 0, 0],
    ["Australia", "Global", 0, 0],
    ["Africa", "Global", 0, 0],
    ["Brazil", "America", 11, 10],
    ["USA", "America", 52, 31],
    ["Mexico", "America", 24, 12],
    ["Canada", "America", 16, -23],
    ["France", "Europe", 42, -11],
    ["Germany", "Europe", 31, -2],
    ["Sweden", "Europe", 22, -13],
    ["Italy", "Europe", 17, 4],
    ["UK", "Europe", 21, -5],
    ["China", "Asia", 36, 4],
    ["Japan", "Asia", 20, -12],
    ["India", "Asia", 40, 63],
    ["Laos", "Asia", 4, 34],
    ["Mongolia", "Asia", 1, -5],
    ["Israel", "Asia", 12, 24],
    ["Iran", "Asia", 18, 13],
    ["Pakistan", "Asia", 11, -52],
    ["Egypt", "Africa", 21, 0],
    ["S. Africa", "Africa", 30, 43],
    ["Sudan", "Africa", 12, 2],
    ["Congo", "Africa", 10, 12],
    ["Zaire", "Africa", 8, 10]
  ];
  const options5 = {
    minColor: "#f00",
    midColor: "#ddd",
    maxColor: "#0d0",
    headerHeight: 15,
    fontColor: "black",
    showScale: true
  };

class Dashboard extends Component{

    constructor(props){
        super(props);    
    }
    
    render(){

      const { languageResources } = this.props;           

        return(
            <div>      
                <h1>{languageResources.Dashboard}</h1>
                <Chart chartType="Calendar" width="100%" height="400px" data={data} />
                <Chart chartType="ColumnChart" width="100%" height="400px" data={data2}/>
                <Chart chartType="PieChart" width="100%" height="400px" data={data3} options={options3}/>
                <Chart chartType="LineChart" width="100%" height="400px" data={data4} options={options4}/>
                <Chart chartType="PieChart" data={[["Age", "Weight"], ["a", 12], ["b", 5.5]]} options={pieOptions} graph_id="PieChart" width={"100%"} height={"400px"} legend_toggle/>
                <Chart chartType="TreeMap" width="100%" height="400px" data={data5} options={options5}/>
            </div>  
        )
      }        

}
    
function mapDispatchToProps(dispatch){
    return bindActionCreators({clickChangeLang}, dispatch);
}
const mapStateToProps = store => ({  
  languageResources: store.clickState.languageResources
});
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);