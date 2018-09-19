import React, { Component } from 'react'
import charmIcon from '../img/charmIcon.png'

class Charm extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-2">
          <button className="btn btn-link">
            <img src={charmIcon} style={{ width: '32px', height: '32px' }} alt="Charm" />
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

export default Charm;