import React from "react"
import {Button} from "semantic-ui-react"


export default class GridCell extends React.Component{

  state={isSelected: false}

  handleClick = () => {
    this.setState({isSelected:!this.state.isSelected})
  }

  render(){
    return(
      <React.Fragment>
        <Button onClick = {this.handleClick} primary={this.state.isSelected}>
        hey
        </Button>

      </React.Fragment>
    )
  }

}
