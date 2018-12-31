import React, { Component } from 'react';
import Tone from "tone"
import {Button} from "semantic-ui-react"

class App extends Component {

  btnStyle = {
    marginTop:"5%",
    marginLeft:"5%",
    marginReft:"auto"
  }

  handleClick = () => {
    var synth = new Tone.MonoSynth();
    synth.toMaster();
    var pattern = new Tone.Pattern((time, note) => {
	                 synth.triggerAttackRelease(note, 0.25);
                    }, ["C4", "D4", "E4", "G4", "A4"]);
    //pattern.pattern = "down"
  pattern.start(0);
  Tone.Transport.start();

  }

  render() {
    return (
      <div>
        <Button onClick={this.handleClick} style={this.btnStyle}>
          hey
        </Button>

      </div>
    );
  }
}

export default App;
