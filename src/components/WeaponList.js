import React from 'react'
import {
  greatSwords, longSwords, swordAndShields,
  dualBlades, hammers, huntingHorns, lances,
  gunlances, switchAxes, chargeBlades, insectGlaives,
  lightBowguns, heavyBowguns, bows
} from '../data/weapons'
import WeaponListItem from './WeaponListItem'

const WeaponList = (props) => {
  const { weaponType } = props
  switch (weaponType) {
    case 'greatsword':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {greatSwords.map(greatsword => (
            <WeaponListItem weaponType={weaponType} weapon={greatsword} />
          ))
          }
        </ul>
      )
    case 'longsword':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {longSwords.map(longsword => (
            <WeaponListItem weaponType={weaponType} weapon={longsword} />
          ))
          }
        </ul>
      )
    case 'swordandshield':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {swordAndShields.map(sns => (
            <WeaponListItem weaponType={weaponType} weapon={sns} />
          ))
          }
        </ul>
      )
    case 'dualblades':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {dualBlades.map(dualblade => (
            <WeaponListItem weaponType={weaponType} weapon={dualblade} />
          ))
          }
        </ul>
      )
    case 'hammer':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {hammers.map(hammer => (
            <WeaponListItem weaponType={weaponType} weapon={hammer} />
          ))
          }
        </ul>
      )
    case 'huntinghorn':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {huntingHorns.map(hh => (
            <WeaponListItem weaponType={weaponType} weapon={hh} />
          ))
          }
        </ul>
      )
    case 'lance':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {lances.map(lance => (
            <WeaponListItem weaponType={weaponType} weapon={lance} />
          ))
          }
        </ul>
      )
    case 'gunlance':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {gunlances.map(gl => (
            <WeaponListItem weaponType={weaponType} weapon={gl} />
          ))
          }
        </ul>
      )
    case 'switchaxe':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {switchAxes.map(switchaxe => (
            <WeaponListItem weaponType={weaponType} weapon={switchaxe} />
          ))
          }
        </ul>
      )
    case 'chargeblade':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {chargeBlades.map(cb => (
            <WeaponListItem weaponType={weaponType} weapon={cb} />
          ))
          }
        </ul>
      )
    case 'insectglaive':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {insectGlaives.map(ig => (
            <WeaponListItem weaponType={weaponType} weapon={ig} />
          ))
          }
        </ul>
      )
    case 'lightbowgun':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {lightBowguns.map(lbg => (
            <WeaponListItem weaponType={weaponType} weapon={lbg} />
          ))
          }
        </ul>
      )
    case 'heavybowgun':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {heavyBowguns.map(hbg => (
            <WeaponListItem weaponType={weaponType} weapon={hbg} />
          ))
          }
        </ul>
      )
    case 'bow':
      return (
        <ul className="list-group" style={{ maxHeight: '580px', overflow: 'scroll' }}>
          {bows.map(bow => (
            <WeaponListItem weaponType={weaponType} weapon={bow} />
          ))
          }
        </ul>
      )

    default:
      return null;
  }
}

export default WeaponList;
