import React, { Component } from 'react'
import weaponIcon from '../img/weaponIcon.png'
import WeaponModal from './WeaponModal'
import EquippedSlots from './EquippedSlots'

class Weapon extends Component {
  state = {
    equiped: {}
  }
  equipWeapon = (weapon) => {
    //console.log(weapon)
    this.setState({
      equiped: weapon
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <button className="btn btn-link" data-toggle="modal" data-target="#weaponModal">
            <img src={weaponIcon} style={{ width: '32px', height: '32px' }} alt="Weapon" />
          </button>
        </div>
        <div className="col-sm-6 text-center">
          {this.state.equiped ? (
            <h4 className="mt-2">{this.state.equiped.name}</h4>
          ) : null}
        </div>
        <div className="col-sm-4">
          {this.state.equiped === {} ? null : (
            <EquippedSlots slots={this.state.equiped.slots} />
          )}
        </div>
        <WeaponModal equipWeapon={this.equipWeapon} />
      </div>
    )
  }
}

export default Weapon;