import React, {Component}from "react";
import API from "../utils/API";

class Table extends Component{
    state={
        usersArray=[]
    }
componentDidMount=()=>{
this.setState({usersArray:API.topUsers()})
}
render(){

}


}