import React, { Component } from 'react'
import armsIcon from '../img/armsIcon.png'

class Arms extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <button className="btn btn-link">
            <img src={armsIcon} style={{ width: '32px', height: '32px' }} alt="Arm" />
          </button>
        </div>
        <div className="col-sm-6">

        </div>
        <div className="col-sm-4">

        </div>
      </div>
    )
  }
}

export default Arms;