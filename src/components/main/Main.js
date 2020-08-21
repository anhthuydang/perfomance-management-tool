import React, { Component } from 'react';
import TopBar from '../topBar/TopBar';
import SideBar from '../sideBar/SideBar';
import Headings from '../headings/Headings';
import CircleContainer from '../circle/CircleContainer';
import AreaChartText from '../areaChartText/AreaChartText';
import Chart from 'react-apexcharts';

import './Main.css';

class Main extends Component {
  constructor(props) {
   super(props);

   this.state = {
      //data
      areaData: {
        "Quality Score":[
           {
              "date":"Apr",
              "sample":21,
              "score":75,
              "vsly":0
           },
           {
              "date":"May",
              "sample":110,
              "score":71,
              "vsly":0
           },
           {
              "date":"Jun",
              "sample":2,
              "score":62,
              "vsly":0
           },
           {
              "date":"Jul",
              "sample":0,
              "score":0,
              "vsly":0
           }
        ],
        "Basics":[
           {
              "date":"Apr",
              "sample":29,
              "score":78,
              "vsly":0
           },
           {
              "date":"May",
              "sample":66,
              "score":62,
              "vsly":0
           },
           {
              "date":"Jun",
              "sample":2,
              "score":42,
              "vsly":0
           },
           {
              "date":"Jul",
              "sample":51,
              "score":63,
              "vsly":0
           }
        ],
        "Interaction":[
           {
              "date":"Apr",
              "sample":54,
              "score":92,
              "vsly":0
           },
           {
              "date":"May",
              "sample":110,
              "score":43,
              "vsly":0
           },
           {
              "date":"Jun",
              "sample":2,
              "score":34,
              "vsly":0
           },
           {
              "date":"Jul",
              "sample":0,
              "score":0,
              "vsly":0
           }
        ],
        "Expertise":[
           {
              "date":"Apr",
              "sample":29,
              "score":88,
              "vsly":0
           },
           {
              "date":"May",
              "sample":55,
              "score":61,
              "vsly":0
           },
           {
              "date":"Jun",
              "sample":26,
              "score":35,
              "vsly":0
           },
           {
              "date":"Jul",
              "sample":121,
              "score":46,
              "vsly":0
           }
        ],
        "Process":[
           {
              "date":"Apr",
              "sample":31,
              "score":85,
              "vsly":0
           },
           {
              "date":"May",
              "sample":66,
              "score":77,
              "vsly":0
           },
           {
              "date":"Jun",
              "sample":23,
              "score":57,
              "vsly":0
           },
           {
              "date":"Jul",
              "sample":0,
              "score":0,
              "vsly":0
           }
        ],
        "Knowledge":[
           {
              "date":"Apr",
              "sample":31,
              "score":74,
              "vsly":0
           },
           {
              "date":"May",
              "sample":100,
              "score":76,
              "vsly":0
           },
           {
              "date":"Jun",
              "sample":45,
              "score":33,
              "vsly":0
           },
           {
              "date":"Jul",
              "sample":110,
              "score":89,
              "vsly":0
           }
        ]
   },

   // trend name state
   chosenObject:'',
   
   //circle chart background state
   // clickedChart: false,
   circleId: '',

   //Area Chart states
   options : {
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      xaxis: {
        categories: []
      },
      yaxis: {
         show: false,
      },
      dataLabels: {
         formatter: function (val)  {
            return `${val}%`
         },
      },
   },
    series: [{
        data: [],
      }]

  }
}

//set default values for area chart
componentDidMount() {
   const defaultAreaData = {...this.state.areaData};
   const defaultScoreArray = [];
   const defaultDateArray = [];
   const defaultTrend = Object.keys(defaultAreaData)[0];
   const defaultObject = Object.values(defaultAreaData)[0];
   
   defaultObject.map(value => {
      return (
         defaultScoreArray.push(value.score)
      && defaultDateArray.push(value.date)
      )
   })

   //set default states when page loads
   this.setState({
      //set default state for background color of the first circle chart displayed on page load
      circleId: defaultTrend,
      //set default states for areachart
      chosenObject: defaultTrend,
      options: {
         ...this.state.options,
         xaxis: {
            ...this.state.options.xaxis,
            categories: defaultDateArray
         },
      },
      series: [{
         ...this.state.series,
         data: defaultScoreArray
      }]
   })
}

// function to update area chart and change background color of the clicked circle chart
updateChart = (chosenObj) => {

   //set state to change background color of the clicked circle chart
   this.setState({
      circleId: chosenObj,
   })
   
   //get data of the chosen circle chart to display on area chart
   const newAreaData = {...this.state.areaData};
   for (let data in newAreaData) {
      if (data === chosenObj) {
        const newScoreArray = [];
        const newDateArray = [];
         newAreaData[data].map(item => {
            return (
               newScoreArray.push(item.score)
            && newDateArray.push(item.date)
            )
         });
         //set state of the area chart 
         this.setState({
            chosenObject: data,
            options: {
              ...this.state.options,
              xaxis: {
                ...this.state.options.xaxis,
                categories: newDateArray
              },
              
            },
            series: [{
              ...this.state.series,
              data: newScoreArray
            }]
          })
         
      }
   }
}
  render() {
    return (
      <main>
         <TopBar />
         <SideBar />
         <Headings />
         
         <div className="wrapper">
            <div className="chartsContainer">
               <CircleContainer 
               updateChart={this.updateChart}
               circleId={this.state.circleId}
               />
               <div className="areaChart">
                 <AreaChartText chosenObject={this.state.chosenObject}/>
                  <Chart 
                  options={this.state.options} 
                  series={this.state.series}  
                  type="area" 
                  height="250" 
                  width="500"
                  />
               </div>
            </div>
         </div>

      </main>
    );
  }
}

export default Main;
