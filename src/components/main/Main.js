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
      }
    },
    series: [{
        data: [],
      }]

  }
}

// componentDidMount() {
//    const newAreaData = {...this.state.areaData};
//       const newScoreArray = [];
//       const newDateArray = [];
//       newAreaData['Knowledge'].map((value) => {
//          newScoreArray.push(value.score);
//          newDateArray.push(value.date);
//       });
//       this.setState({
//          scoreArray: newScoreArray,
//          dateArray: newDateArray,
//       })
// }

updateChart = (chosenObj) => {
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
               updateChart={this.updateChart}/>
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
