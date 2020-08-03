import React, { Component } from 'react';
import './AreaChartText.css';

class AreaChartText extends Component {
   
    changeColor = (e) => {
        //remove background color of the previously clicked button
        const clickedButton = document.querySelector(".clickedButton");
        if (clickedButton !== null) {
            clickedButton.classList.remove("clickedButton");
        } 
        //change background color of the clicked button
        const newButton = e.currentTarget;
        newButton.classList.add("clickedButton");
    }

    render() {
        return (
            <div className="areaText">
                <h3>{this.props.chosenObject} Trend</h3>
                <ul>
                <li>
                    <button onClick={this.changeColor}>Day</button>
                </li>
                <li>
                    <button onClick={this.changeColor}>Week</button>
                </li>
                <li>
                    <button onClick={this.changeColor}>Month</button>
                </li>
                <li>
                    <button onClick={this.changeColor}>Quarter</button>
                </li>
                <li>
                    <button onClick={this.changeColor}>Half</button>
                </li>
                <li>
                    <button onClick={this.changeColor}>Year</button>
                </li>
                </ul>
            </div>
        )
    }
}
export default AreaChartText;