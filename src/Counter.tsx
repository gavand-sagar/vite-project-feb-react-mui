import React, { Component } from 'react'

type Props = {
    value: number
}

type State = {
    value: number
}

export default class Counter extends Component<Props, State> {
    state = {
        value: 0
    }

    // increment = () => {
    //     this.setState({
    //         ...this.state,
    //         value: this.state.value + 1
    //     })
    // }

    increment() {
        this.setState({
            ...this.state,
            value: this.state.value + 1
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>Inc</button>
                <div>Counter : {this.state.value}</div>
            </div>
        )
    }
}