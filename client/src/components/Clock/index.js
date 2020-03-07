import React from "react";
import 'materialize-css/dist/css/materialize.min.css';
import './style.css';


var time = new Date();
var minutes = time.getMinutes();
var seconds = time.getSeconds();
var hours = time.getHours();
var _this = this;
var timer;
var amPm = time.getHours() > 12 ? "pm" : "am";
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;
hours = hours < 10 ? "0" + hours : hours;
hours = hours > 12 ? hours - 12 : hours;


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            amPm: amPm,
        }
    }
    componentDidMount() {
        _this = this;

        timer = setInterval(function () {
            time = new Date();
            minutes = time.getMinutes();
            seconds = time.getSeconds();
            hours = time.getHours();
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            hours = hours < 10 ? "0" + hours : hours;
            hours = hours > 12 ? hours - 12 : hours;
            hours = hours == 0 ? 12 : hours;
            _this.setState({
                minutes: minutes,
                seconds: seconds,
                hours: hours,
                amPm: amPm
            })
            console.log(_this.state.minutes);
            timer;
        }, 1000);
    }




    render() {
        return ( 
            <div>
                <h1 className = "display-4 text-center" > Time </h1>
                <h2 className="display-2 time bg-success">{this.state.hours}:{this.state.minutes}:{this.state.seconds} 
                <p>{this.state.amPm}</p></h2>
                
            </div >
        )
    }
}

export default Clock