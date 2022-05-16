import axios from 'axios';

    const url = 'http://localhost:4000/createinvite';

     const getData = async ()=>{
   return await axios.get(url);
    }

   const addData = async(data)=>{
   return await axios.post(url,data).
   then(res => {
       console.log(res); 
       console.log(res.data);
    })
    }

    export {getData, addData};