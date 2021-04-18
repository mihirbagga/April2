import React from 'react';
import './App.css';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries,VerticalGridLines,HorizontalGridLines,XAxis,YAxis} from 'react-vis';
import Typography from '@material-ui/core/Typography'

export default function Ch(props)  {
  
    const data = [
      {x: 0, y: 8},
      {x: 1, y: 5},
      {x: 2, y: 4},
      {x: 3, y: 9},
      {x: 4, y: 1},
      {x: 5, y: 7},
      {x: 6, y: 6},
      {x: 7, y: 3},
      {x: 8, y: 2},
      {x: 9, y: 0}
    ];
    return (
      <div className="App">
          <center>
          <Typography style={{fontSize:"50px" }}>
 <b><i><u>Line Graph</u></i></b> <br/>
 </Typography>

       <XYPlot height={500} width= {500} stroke="black">
  <VerticalGridLines />
  <HorizontalGridLines />
  <XAxis />
  <YAxis />
  <LineSeries data={data} />
</XYPlot>
<Typography>
  <b>
 This is A Line Graph ,in this <u> React-Vis</u> Library is Used <br/>
 1. Very Easy to use and simple components<br/>
 2. Light Weight<br/>
 3. Every Type Of Chart is Available<br/>
 </b>
 </Typography>

</center>


      </div>
    );
  }



