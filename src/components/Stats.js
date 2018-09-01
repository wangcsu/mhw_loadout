import React, { Component } from 'react'

class Stats extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center">Stats</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">Attack
            <span className="badge">247</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Affinity
            <span className="badge">10%</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Element
            <span className="badge">None</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Elderseal
            <span className="badge">None</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Defense
            <span className="badge">469</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Vs. Fire
            <span className="badge">10</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Vs. Water
            <span className="badge">4</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Vs. Thunder
            <span className="badge">10</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Vs. Ice
            <span className="badge">-9</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Vs. Dragon
            <span className="badge">-9</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Stats;