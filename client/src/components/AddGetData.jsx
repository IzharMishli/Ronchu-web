import axios from 'axios';

    const url = 'http://ronchu-website.herokuapp.com/createinvite';

     const getData = async ()=>{
      return await axios.get("/managepanel").
      then(res => {
          return res.data;
       })
    }

   const addData = async(data)=>{
   return await axios.post("/createinvite",data).
   then(res => {
       console.log(res); 
       console.log(res.data);
    })
    }

    export {getData, addData};