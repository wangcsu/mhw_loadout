import React, { Component } from 'react'
import waistIcon from '../img/waistIcon.png'

class Waist extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <button className="btn btn-link">
            <img src={waistIcon} style={{ width: '32px', height: '32px' }} />
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

export default Waist;