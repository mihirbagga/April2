import axios from 'axios'
var BaseURL="http://localhost:3001"

const getData=async(Url)=>{
    try{
       var url=`${BaseURL}/${Url}`  
    var response=await fetch(url,{
       method:'get',
       mode:'cors',
       headers:{'content-type':"application/json;charset=utf-8"}
    }) 
   
     return response.json()
    }catch(e)
    {
     console.log(e)
   
    }
   }

   const postDataAndImage=async(Url,body,config)=>{
      try{
         var url=`${BaseURL}/${Url}`  
      var response=await axios.post(url,body,config)
     console.log(response.data)
     var data=await response.data 
  return data
}catch(e)
{
 console.log(e)

}
}


export {BaseURL,getData,postDataAndImage}