import React, { Component } from 'react';
import SVGChart from './Chart'
import './App.css';

class App extends Component {
  constructor (props) {
      super(props)
      this.state = {
      toggled: false,
      dataSet0: [
         {letter: "A", frequency: .08167},
         {letter: "B", frequency: .01492},
         {letter: "C", frequency: .02780},
         {letter: "D", frequency: .04253},
         {letter: "E", frequency: .02702},
         {letter: "F", frequency: .02288},
         {letter: "G", frequency: .02022},
         {letter: "H", frequency: .06094},
       ],
       dataSet1: [
          {letter: "A", frequency: .06167},
          {letter: "B", frequency: .04192},
          {letter: "C", frequency: .07780},
          {letter: "D", frequency: .05253},
          {letter: "E", frequency: .12602},
          {letter: "F", frequency: .08288},
          {letter: "G", frequency: .06022},
          {letter: "H", frequency: .09094},
        ],
        dataIndex: 0
      }
      this.newData = this.newData.bind(this)
  }

  newData () {
    this.setState(state => ({
      dataIndex: (state.dataIndex + 1) % 2,
      toggled: !this.state.toggled
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>D3/react chart using react-faux-dom</h1>
        <button onClick={this.newData}>Toggle Data</button>
        <SVGChart
          data={this.state['dataSet' + this.state.dataIndex]}
          chartClass={this.state.toggled ? "d3-chart toggled" : "d3-chart"}
          />
      </div>
    );
  }
}

export default App;
