import React, { Component } from 'react'
import uuid from 'uuid'
import gemOne from '../img/gem_level_1.png'
import gemTwo from '../img/gem_level_2.png'
import gemThree from '../img/gem_level_3.png'

class EquippedSlots extends Component {
  /* state = {
    decoList: []
  } */
  createDecoList = (one, two, three) => {
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
  render() {
    if (this.props.slots !== undefined) {
      const { one, two, three } = this.props.slots
      let decoList = this.createDecoList(one, two, three)
      return (
        <div className="btn-group-vertical">
          {decoList.map(deco => {
            if (deco === 'three') {
              return (
                <button type="button" className="btn btn-dark btn-sm" key={uuid()}>
                  <img src={gemThree} style={{ width: '15px', height: '15px' }} alt="level-3" />
                  <span className="mx-3">Empty slot</span>
                </button>)
            } else {
              if (deco === 'two') {
                return (
                  <button type="button" className="btn btn-dark btn-sm" key={uuid()}>
                    <img src={gemTwo} style={{ width: '15px', height: '15px' }} alt="level-2" />
                    <span className="mx-3">Empty slot</span>
                  </button>)
              } else {
                if (deco === 'one') {
                  return (
                    <button type="button" className="btn btn-dark btn-sm" key={uuid()}>
                      <img src={gemOne} style={{ width: '15px', height: '15px' }} alt="level-1" />
                      <span className="mx-3">Empty slot</span>
                    </button>)
                } else {
                  return null
                }
              }
            }
          }
          )}
        </div>
      )
    } else {
      return null;
    }
  }
}

export default EquippedSlots