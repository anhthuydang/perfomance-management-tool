import React, { Component } from 'react';
import Chart from 'react-apexcharts';
import './CircleChart.css';

class CircleChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      optionsRadial: {
        series: [this.props.score],
        labels: ["N/A"],
        title: {
          text: this.props.name,
          align: "center",
          style: {
            color: "#2d71bf",
            fontSize: "18px"
          },
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              showOn: "always",
              name: {
                offsetY: 20, //move labels under dataLabels
                show: true,
                color: "#716765",
                fontSize: "13px"
              },
              value: {
                formatter: function(val) {
                  return `${val}%`;
                },
                offsetY: -10, //move dataLabels on top of labels
                color: "#4e9ff3",
                fontSize: "20px",
                show: true
              }
            }
          }
        },
        chart: {
          offsetX: -60, //move chart to the right
        }
      },
    }
  }

  render() {
    const {name, sample, updateChart} = this.props;
    return (
      <div className="circle" id={name} onClick={this.handleClick}>
        
        <Chart 
        options={this.state.optionsRadial} 
        series={this.state.optionsRadial.series} 
        type="radialBar" 
        width="200%"
        // width="240"
        onClick={() => {updateChart(name)}}
        />
        
        <p>Sample: {sample}</p>
      </div>
    );
  }
}

export default CircleChart;


