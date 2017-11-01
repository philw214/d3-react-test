import React, { Component } from 'react';
import SVGChart from './Chart'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
      super(props)
      this.state = {
      dataSet0: [
         {letter: "A", frequency: .08167},
         {letter: "B", frequency: .01492},
         {letter: "C", frequency: .02780},
         {letter: "D", frequency: .04253},
         {letter: "E", frequency: .12702},
         {letter: "F", frequency: .02288},
         {letter: "G", frequency: .02022},
         {letter: "H", frequency: .06094},
         {letter: "I", frequency: .06973},
         {letter: "J", frequency: .00153},
         {letter: "K", frequency: .00747},
         {letter: "L", frequency: .04025},
         {letter: "M", frequency: .02517},
         {letter: "N", frequency: .06749},
         {letter: "O", frequency: .07507},
         {letter: "P", frequency: .01929},
         {letter: "Q", frequency: .00098},
         {letter: "R", frequency: .05987},
         {letter: "S", frequency: .06333},
         {letter: "T", frequency: .09056},
         {letter: "U", frequency: .02758},
         {letter: "V", frequency: .01037},
         {letter: "W", frequency: .02465},
         {letter: "X", frequency: .00150},
         {letter: "Y", frequency: .01971},
         {letter: "Z", frequency: .00074},
       ],
       dataSet1: [
          {letter: "hi", frequency: .08167},
          {letter: "hiB", frequency: .01492},
          {letter: "hiC", frequency: .02780},
          {letter: "hiD", frequency: .04253},
          {letter: "hiE", frequency: .12702},
          {letter: "hiF", frequency: .02288},
          {letter: "hiG", frequency: .02022},
          {letter: "hiH", frequency: .06094},
          {letter: "hiI", frequency: .06973},
          {letter: "hiJ", frequency: .00153},
          {letter: "hiK", frequency: .00747},
          {letter: "hiL", frequency: .04025},
          {letter: "hiM", frequency: .02517},
          {letter: "hiN", frequency: .06749},
          {letter: "hiO", frequency: .07507},
          {letter: "P", frequency: .01929},
          {letter: "Q", frequency: .00098},
          {letter: "R", frequency: .05987},
          {letter: "S", frequency: .06333},
          {letter: "T", frequency: .09056},
          {letter: "U", frequency: .02758},
          {letter: "V", frequency: .01037},
          {letter: "W", frequency: .02465},
          {letter: "X", frequency: .00150},
          {letter: "Y", frequency: .01971},
          {letter: "Z", frequency: .00074},
        ],
        dataIndex: 0
      }
      this.newData = this.newData.bind(this)
  }

  newData () {
    this.setState(state => ({
      dataIndex: (state.dataIndex + 1) % 2
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>D3/react chart using react-faux-dom</h1>
        <button onClick={this.newData}>Toggle Data</button>
        <SVGChart
          data={this.state['dataSet' + this.state.dataIndex]}
          />
      </div>
    );
  }
}

export default App;
