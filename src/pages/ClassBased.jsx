import React, { Component } from "react";

export class ClassBased extends Component {
  state = {name: "John", count: 2}

  increaseCount = () =>{
    this.setState({
      count: this.state.count + 1,
      name: "Tobi"
    })

    console.log(this.state.count)
  }

  componentDidMount(){
    console.log('Component mounted')
  }

  componentDidUpdate(){
    console.log('component updated')
  }

  componentWillUnmount(){
    console.log('component unmounted')
  }
  render() {
    return (
      <div>
        <h1>{this.props.text} {this.state.name}</h1>
        <h1>{this.state.count}</h1>

        <button onClick={this.increaseCount}>Increase Number</button>
      </div>
    );
  }
}

export default ClassBased;
