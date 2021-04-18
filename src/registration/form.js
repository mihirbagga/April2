import React,{useState} from 'react'
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import {postDataAndImage } from '../Fetchservices'
const useStyles = makeStyles(theme => ({
    heading:{
    height:'auto',
    padding:10,
    backgroundColor:'#fff',
    margin:2,
    borderTopLeftRadius:5,
    borderTopRightRadius:5,
    marginBottom:15,
    alignItems:'center',
    },    
    maincontainer:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      padding:108,
      height:'10%'
    },    
    mainpaper: {
        width:window.innerWidth*0.5, 
        height:'100%', 
        marginTop:20,
        backgroundColor:'#fff'
         
        },
        large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
          },
          input: {
            display: 'none',
          },  
          btn:
          {
              backgroundColor:'#1E1726'
          }
      }));
function Form()
{
    const classes = useStyles();
    const [getName,setName]=useState('')
    const [getIcon,setIcon]=useState({icon:'',file:''})
    
    
   
const handleSubmit=()=>
{
    var formData=new FormData()
    formData.append('playername',getName) 
    formData.append('icon',getIcon.file) 
    var config={headers:{'content-type':'multipart/form-data'}}
     postDataAndImage('add',formData,config)
  
    
   }     
    return(
        <div className={classes.maincontainer}>
<Paper className={classes.mainpaper}>   
<Paper className={classes.heading}>
<div style={{fontSize:18,fontWeight:'bold'}}>Player Registration </div>
<div style={{fontSize:12,fontWeight:'bold'}}>(Add Player)</div>
   
</Paper> 
<Grid container spacing={3} style={{padding:20}}>    
<Grid item xs={12}>
<TextField fullWidth id="playername"
 label="Player Name" variant="outlined" 
 onChange={(event)=>setName(event.target.value)} />
</Grid>
<Grid item xs={12} sm={6} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<Avatar alt="Remy Sharp" src={getIcon.icon} className={classes.large} />
  
</Grid>
<Grid item xs={12} sm={6} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
        onChange={(event)=>setIcon({icon:URL.createObjectURL(event.target.files[0]),file:event.target.files[0]})}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" className={classes.btn} component="span">
        <h3 style={{color:"white"}}> Upload</h3>
        </Button>
      </label></Grid>
<Grid item xs={12} sm={6} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<Button variant="contained" className={classes.btn} onClick={handleSubmit()} >
<h3 style={{color:"white"}}> Submit</h3>
      </Button>
</Grid>
<Grid item xs={12} sm={6} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<Button variant="contained" className={classes.btn} >
       <h3 style={{color:"white"}}> Reset</h3>
      </Button>
</Grid>

<Grid item xs={12}  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>

</Grid>

</Grid>     
</Paper>
</div>
    )
    
}
export default Form