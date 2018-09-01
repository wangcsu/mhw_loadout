import React, { Component } from 'react'

class ActiveSkills extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title text-center">Skills</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center">Earplugs
            <span className="badge badge-warning badge-pill">5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Wide Range
            <span className="badge badge-warning badge-pill">5</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Stun Resistance
            <span className="badge badge-warning badge-pill">3</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Health Boost
            <span className="badge badge-warning badge-pill">3</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Speed Eating
            <span className="badge badge-warning badge-pill">3</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Iron Skin
            <span className="badge badge-success badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Recovery Up
            <span className="badge badge-success badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Recovery Speed
            <span className="badge badge-success badge-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Dragon Attack
            <span className="badge badge-success badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Free Elem/Ammo Up
            <span className="badge badge-success badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Critical Boost
            <span className="badge badge-success badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Quick Sheath
            <span className="badge badge-success badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Free Meal
            <span className="badge badge-warning badge-pill">1</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">Razor Sharp/Spare Shot
            <span className="badge badge-warning badge-pill">1</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default ActiveSkills