import React, { Component } from 'react'
import WeaponList from './WeaponList'
import { weaponTypes } from '../data/weapontypes'


class WeaponModal extends Component {
  constructor() {
    super();
    this.state = {
      weaponType: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    let wtype = e.target.children[0].value;
    this.setState({
      weaponType: wtype
    })
  }
  equipWeapon = (choosen) => {
    this.props.equipWeapon(choosen)
  }
  render() {
    const { weaponType } = this.state;
    return (
      <div className="modal fade" id="weaponModal" tabIndex="-1" role="dialog" aria-labelledby="weaponModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="weaponModalLabel">Choose Weapon</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-4">
                  <div className="btn-group-vertical btn-group-toggle" data-toggle="buttons">
                    {
                      weaponTypes.map(type => (
                        <label className="btn btn-secondary mb-1" key={type.id} onClick={this.handleChange}>
                          <input type="radio" value={type.value} /> {type.label}
                        </label>
                      ))
                    }
                  </div>
                </div>
                <div className="col-sm-8">
                  {weaponType ? (<WeaponList weaponType={weaponType} equipWeapon={this.equipWeapon} />) : null}
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WeaponModal;