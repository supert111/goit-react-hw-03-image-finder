//import React from "react";
import { Component } from "react";

//class MySecondComponent extends React.Component {
class MySecondComponent extends Component {
    render () {
        return (
            <div className="second-component">
                <h3>This React trening</h3>
                <p>jkhlkdfhui fdhlkjhlk :))</p>
        <p>user name: {this.props.user.name} </p>
            </div>
        );
    }
}

export default MySecondComponent;