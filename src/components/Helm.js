import React, { Component } from 'react'
import helmIcon from '../img/helmIcon.png'

class Helm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <button className="btn btn-link">
            <img src={helmIcon} style={{ width: '32px', height: '32px' }} alt="Helm" />
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

export default Helm;