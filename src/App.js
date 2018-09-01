import React, { Component } from 'react';
import Equipments from './components/Equipments';
import ActiveSkills from './components/ActiveSkills';
import Stats from './components/Stats';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Monster Hunter: World Loadout</h1>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 mx-auto">
              <Equipments />
            </div>
            <div className="col-sm-3 mx-auto">
              <ActiveSkills />
            </div>
            <div className="col-sm-3 mx-auto">
              <Stats />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
