import React, { Component } from 'react'
import weaponIcon from '../img/weaponIcon.png'
import WeaponModal from './WeaponModal'

class Weapon extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <button className="btn btn-link" data-toggle="modal" data-target="#weaponModal">
            <img src={weaponIcon} style={{ width: '32px', height: '32px' }} alt="Weapon" />
          </button>
        </div>
        <div className="col-sm-6">

        </div>
        <div className="col-sm-4">

        </div>
        <WeaponModal />
      </div>
    )
  }
}

export default Weapon;