import React from "react"
import GridCell from "./GridCell"
import {Grid} from "semantic-ui-react"

const columns = 4


const GridWrapper = () => {


  return(
    <Grid>
      <Grid.Row columns ={4}>
        <Grid.Column width={2} >
          <GridCell/>
        </Grid.Column>
        <Grid.Column width={2}>
          <GridCell/>
        </Grid.Column>
        <Grid.Column width={2}>
          <GridCell/>
        </Grid.Column>
        <Grid.Column width={2}>
          <GridCell/>
        </Grid.Column>

      </Grid.Row>

    </Grid>
  )
}

export default GridWrapper
