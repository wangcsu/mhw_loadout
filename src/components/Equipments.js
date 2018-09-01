import React, { Component } from 'react'
/* import Select from 'react-select'
import { weaponTypes } from '../data/weapontypes'
import {
  greatSwords, longSwords, swordAndShields,
  dualBlades, hammers, huntingHorns, lances,
  gunlances, switchAxes, chargeBlades,
  insectGlaives, lightBowguns, heavyBowguns, bows
} from '../data/weapons' */
import Weapon from './Weapon';
import Helm from './Helm';
import Chest from './Chest';
import Arms from './Arms';
import Waist from './Waist';
import Legs from './Legs';
import Charm from './Charm';

class Equipments extends Component {

  /* weaponTypeChange = (weapontypes) => {
    weapontypes.map(weapontype => {
      console.log(weapontype.value);
    })
  } */

  render() {
    return (
      <div className="card">
        {/* <label htmlFor="weapontype" className="col-sm-2 col-form-label">Weapon</label>
        <div className="col-sm-5">
          <Select options={weaponTypes} id="weapontype" isMulti onChange={this.weaponTypeChange} />
        </div>
        <div className="col-sm-5">
          <Select isDisabled />
        </div> */}
        <div className="card-body">
          <h3 className="card-title text-center">Equipments</h3>
          <hr />
          <Weapon />
          <hr />
          <Helm />
          <hr />
          <Chest />
          <hr />
          <Arms />
          <hr />
          <Waist />
          <hr />
          <Legs />
          <hr />
          <Charm />
        </div>
      </div>
    )
  }
}

export default Equipments;