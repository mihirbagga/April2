import React from 'react';
import {Bar} from 'react-chartjs-2';

const s= {
  labels: ['Valorant', 'CS-Global Offensive', 'Rainbow-6',
           'Paladins', 'Fortnite'],
  datasets: [
    {
      label: 'Gamers',
      backgroundColor: 'rgb(60, 179, 113)',
      borderColor: 'rgba(0,0,0,5)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

export default function Barc ()  {
  
    return (
      <div>
        <Bar
          data={s}
          options={{
            title:{
              display:true,
              text:'Game Players',
              fontSize:20
            }
          }}
        />
      </div>
    );
  }
