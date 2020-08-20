import React, { Component } from 'react';
import CircleChart from './CircleChart';
import Filters from '../filters/Filters';
import './CircleContainer.css'

class CircleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gaugeData:[
        {
           "name":"Quality Score",
           "score":72,
           "vsly":null,
           "sample":133
        },
        {
           "name":"Basics",
           "score":71,
           "vsly":null,
           "sample":133
        },
        {
          "name":"Interaction",
          "score":68,
          "vsly":null,
          "sample":133
       },
       {
          "name":"Expertise",
          "score":70,
          "vsly":null,
          "sample":133
       },
       {
          "name":"Process",
          "score":75,
          "vsly":null,
          "sample":133
       },
       {
          "name":"Knowledge",
          "score":76,
          "vsly":null,
          "sample":133
       }
      ]
      
    }
  }

  render() {
    const {updateChart, circleId} = this.props;
    return (
      <div className="circleChartSection">
        <Filters />
        <div className="circleChartContainer">
          {this.state.gaugeData.map((obj,index) => {
            return (
              <CircleChart 
            key={this.state.gaugeData[index].name}
            score={this.state.gaugeData[index].score}
            name={this.state.gaugeData[index].name}
            sample={this.state.gaugeData[index].sample}
            updateChart={updateChart}
            circleId={circleId}
            />
            )
          })}
        </div>
      </div>
    );
  }
}

export default CircleContainer;
