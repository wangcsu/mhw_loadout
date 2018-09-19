import React, { Component } from 'react'

class WeaponModal extends Component {
  render() {
    return (
      <div className="modal fade" id="weaponModal" tabindex="-1" role="dialog" aria-labelledby="weaponModalLabel" aria-hidden="true">
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
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="greatsword" autoComplete="off" /> Great Sword
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="longsword" autoComplete="off" /> Long Sword
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="swordandshield" autoComplete="off" /> Sword and Shield
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="dualblades" autoComplete="off" /> Dual Blades
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="hammer" autoComplete="off" /> Hammer
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="huntinghorn" autoComplete="off" /> Hunting Horn
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="lance" autoComplete="off" /> Lance
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="gunlance" autoComplete="off" /> Gunlance
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="switchaxe" autoComplete="off" /> Switch Axe
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="chargeblade" autoComplete="off" /> Charge Blade
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="insectglaive" autoComplete="off" /> Insect Glaive
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="lightbowgun" autoComplete="off" /> Light Bowgun
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="heavybowgun" autoComplete="off" /> Heavy Bowgun
                    </label>
                    <label className="btn btn-secondary mb-1">
                      <input type="radio" name="bow" autoComplete="off" /> Bow
                    </label>
                  </div>
                </div>
                <div className="col-sm-8">
                  <ul className="list-group">
                    <li className="list-group-item card">

                      <div className="card-body">
                        <h5 className="card-title">Chrome Blade II</h5>
                        <a href="#" className="btn btn-primary float-right">Equip</a>
                      </div>
                    </li>
                    <li className="list-group-item card">

                      <div className="card-body">
                        <h5 className="card-title">Catastrophe's Light</h5>
                        <a href="#" className="btn btn-primary float-right">Equip</a>
                      </div>
                    </li>
                  </ul>
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