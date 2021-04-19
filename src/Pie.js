import React from 'react';
import {Pie, Doughnut} from 'react-chartjs-2';

const s = {
  labels: ['Valorant', 'CS-Global Offensive', 'Rainbow-6',
           'Paladins', 'Fortnite'],
  datasets: [
    {
      label: 'Gamers',
      backgroundColor: [
        '#CC8500',
        '#009A38',
        '#E10038',
        '#50002F',
        '#350010'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default function Piec () {
  
    return (
      <div>
        <Pie
          data={s}
          options={{
            title:{
              display:true,
              text:'Game Players',
              fontSize:20
            },
            
          }}
        />

        <Doughnut
          data={s}
          options={{
            title:{
              display:true,
              text:'Game Players',
              fontSize:20
            },
          }}
        />
      </div>
    );
  }
