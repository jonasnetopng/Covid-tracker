import React from "react";
import Axios from "axios"
import "./style.css"
export default class App extends React.Component{
  state = {
    confirmed: 0,
    recovered: 0,
    deaths: 0,
  }

  componentDidMount(){
    this.getData();
  }

  async getData(){
    const res = await Axios.get("https://covid19.mathdro.id/api");
    this.setState({
      confirmed: res.data.confirmed.value,
      recovered: res.data.recovered.value,
      deaths: res.data.deaths.value
    })
  }

  //this.state.deaths
  render(){
    return(
      <div>
        <div className="header">
          <h1>COVID-19</h1>
      </div>
    <div className="center">
    <div className="info-container">
                <h3>Confirmados</h3>
                <h2>{this.state.confirmed}</h2>
              </div>
              <div className="info-container">
                <h3>Recuperados</h3>
                <h2>{this.state.recovered}</h2>          </div>
              <div className="info-container">
                <h3>Mortos</h3>
                <h2>{this.state.deaths}</h2>          </div>
          </div>
    </div>
    )
  }
}