import React, { Component } from 'react'
import {
  greatSwords, longSwords, swordAndShields,
  dualBlades, hammers, huntingHorns, lances,
  gunlances, switchAxes, chargeBlades, insectGlaives,
  lightBowguns, heavyBowguns, bows
} from '../data/weapons'
import WeaponListItem from './WeaponListItem'
import uuid from 'uuid';

class WeaponList extends Component {
  state = { equiped: {} };
  equipWeapon = (choosen) => {
    this.props.equipWeapon(choosen)
  }
  render() {
    const { weaponType } = this.props
    switch (weaponType) {
      case 'greatsword':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {greatSwords.map(greatsword => (
              <WeaponListItem weaponType={weaponType} weapon={greatsword} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'longsword':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {longSwords.map(longsword => (
              <WeaponListItem weaponType={weaponType} weapon={longsword} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'swordandshield':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {swordAndShields.map(sns => (
              <WeaponListItem weaponType={weaponType} weapon={sns} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'dualblades':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {dualBlades.map(dualblade => (
              <WeaponListItem weaponType={weaponType} weapon={dualblade} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'hammer':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {hammers.map(hammer => (
              <WeaponListItem weaponType={weaponType} weapon={hammer} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'huntinghorn':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {huntingHorns.map(hh => (
              <WeaponListItem weaponType={weaponType} weapon={hh} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'lance':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {lances.map(lance => (
              <WeaponListItem weaponType={weaponType} weapon={lance} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'gunlance':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {gunlances.map(gl => (
              <WeaponListItem weaponType={weaponType} weapon={gl} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'switchaxe':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {switchAxes.map(switchaxe => (
              <WeaponListItem weaponType={weaponType} weapon={switchaxe} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'chargeblade':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {chargeBlades.map(cb => (
              <WeaponListItem weaponType={weaponType} weapon={cb} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'insectglaive':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {insectGlaives.map(ig => (
              <WeaponListItem weaponType={weaponType} weapon={ig} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'lightbowgun':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {lightBowguns.map(lbg => (
              <WeaponListItem weaponType={weaponType} weapon={lbg} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'heavybowgun':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {heavyBowguns.map(hbg => (
              <WeaponListItem weaponType={weaponType} weapon={hbg} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )
      case 'bow':
        return (
          <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
            {bows.map(bow => (
              <WeaponListItem weaponType={weaponType} weapon={bow} key={uuid()} equipWeapon={this.equipWeapon} />
            ))
            }
          </ul>
        )

      default:
        return null;
    }
  }
}

export default WeaponList;
