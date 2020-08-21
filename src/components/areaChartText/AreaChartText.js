import React, { Component } from 'react';
import './AreaChartText.css';

class AreaChartText extends Component {
    constructor() {
    super();
        this.state = {
            buttons : ["Day", "Week", "Month", "Quarter", "Half", "Year"],
            clickedButton: 2, //2 is index of month, make month the default clicked button
        }
    }

    changeColor = (i) => {
        this.setState({
            clickedButton: i,
        })
    }

    render() {
        return (
            <div className="areaText">
                <h3>{this.props.chosenObject} Trend</h3>
                <ul>
                    {this.state.buttons.map((button, i) => {
                        return(
                            <li>
                                <button 
                                className={i === this.state.clickedButton ? "clickedButton" : null}
                                onClick={() => this.changeColor(i)} >
                                    {button}
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}
export default AreaChartText;