import React, { Component } from "react";

export default class CounterClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            data: new Date().toLocaleDateString(),
            mount: false,
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1,
        });
    };

    decrement = () => {
        if (this.state.count > 0) {
            this.setState({
                count: this.state.count - 1,
            });
        }
    };

    toggle = () => {
        this.setState({
            mount: !this.state.mount
        });
    }

    render() {
        return (
            <div className="container">
                {this.state.mount && (
                    <div className="counter">
                        <h2>{this.state.count}</h2>
                        <button onClick={this.increment}>Add + </button>
                        <button onClick={this.decrement}>Subtract - </button>
                    </div>
                )}
                <button onClick={this.toggle}>Toggle Mount</button>
            </div>
        );
    }
}
