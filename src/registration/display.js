import React,{useEffect} from 'react';
import MaterialTable from 'material-table';
import {getData,BaseURL} from '../Fetchservices'
export default function Display() {
  const [getColumn, setColumn] = React.useState( [
      { title: 'Player Id', field: 'id' },
      { title: 'Player Name', field: 'name' },
      { title: 'Picture',   render: rowData => <img alt="avatar"src={`${BaseURL}/images/${rowData.icon}`} style={{width: 50, borderRadius: '50%'}}/>},
      
    ])
    
    const [getList, setList] = React.useState([])

    const fetchData=async()=>{
        var list= await getData('display')
         console.log(list)
         setList(list)
    }
    setColumn(getColumn)
  useEffect(function(){
fetchData()

  },[])
  return (
    <MaterialTable
      title="Player List "
      columns={getColumn}
      data={getList}
      size="small"
    />
  );
}