import React, { useState, useEffect } from "react";
import Axios from "axios"
import "./style.css"
export default function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    async function getData() {
      const res = await Axios.get("https://covid19.mathdro.id/api");
      setData({
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value
      })
    }
    getData()
  }, [])
  const formatNum = (x) => {
    const num = x.toString()
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }
  return (
    <div>
      <div className="header">
        <h1>COVID-19</h1>
      </div>
      <div className="center">
        <div className="info-container">
          <h3>Confirmados</h3>
          <h2>{formatNum(data.confirmed)}</h2>
        </div>
        <div className="info-container">
          <h3>Mortos</h3>
          <h2>{formatNum(data.deaths)}</h2>
        </div>
      </div>
    </div>
  )
}
