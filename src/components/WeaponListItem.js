import React from 'react'
import gemOne from '../img/gem_level_1.png'
import gemTwo from '../img/gem_level_2.png'
import gemThree from '../img/gem_level_3.png'
import uuid from 'uuid';

const createDecoList = (one, two, three) => {
  let decoList = []
  for (var i = 0; i < three; i++) {
    decoList.push('three');
  }
  for (i = 0; i < two; i++) {
    decoList.push('two');
  }
  for (i = 0; i < one; i++) {
    decoList.push('one');
  }
  return decoList;
}

const WeaponListItem = (props) => {
  const { weaponType, weapon } = props
  const borderStyle = {
    paddingRight: '20px',
    borderRight: '1px solid #ccc'
  }
  const handleEquip = () => {
    props.equipWeapon(weapon);
  }
  return (
    <li className="list-group-item" key={weapon.name}>
      <div className="row">
        <h5 className="card-title">{weapon.name}</h5>
      </div>
      <div className="row border-top border-bottom">
        <span className="col-sm-6" style={borderStyle}>Attack <span className="float-right">{weapon.attack}</span></span>
        <span className="col-sm-6">Affinity <span className="float-right">{weapon.affinity}</span></span>
      </div>
      <div className="row border-top border-bottom">
        <span className="col-sm-6">Element </span>
        {weapon.hidden ? (
          <span className="col-sm-6">({weapon.element} {weapon.elevalue})</span>
        ) : (
            <span className="col-sm-6">{weapon.element} {weapon.elevalue}</span>
          )}
      </div>
      <div className="row border-top border-bottom mb-2">
        <span className="col-sm-6">Slots</span>
        <span className="col-sm-6">
          {
            createDecoList(weapon.slots.one, weapon.slots.two, weapon.slots.three).map(deco => (
              deco === 'three' ? (<img src={gemThree} style={{ width: '20px', height: '20px' }} alt="level-3" key={uuid()} />) : (
                deco === 'two' ? (<img src={gemTwo} style={{ width: '20px', height: '20px' }} alt="level-2" key={uuid()} />) : (
                  deco === 'one' ? (<img src={gemOne} style={{ width: '20px', height: '20px' }} alt="level-1" key={uuid()} />) : null
                )
              )
            ))
          }
        </span>
      </div>
      <div className="row float-right">
        <button className="btn btn-primary btn-sm my-auto" data-dismiss="modal" onClick={handleEquip}>Equip</button>
      </div>
    </li>
  )
}
export default WeaponListItem