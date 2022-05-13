import React, {useState} from "react";

var styles = {"instagramItems":"_2R-kh","instagramItem":"_wPDyp","instagramImg":"_vzTHL","instagramIcon":"_3xnQP","errorMessage":"_3lhLL"};

export default function(props){
    console.log("----test----");
    const [data, setRes] = useState({
        feeds: [],
        isError: '',
        isLoaded: false
    });

    var url = "https://graph.instagram.com/me/media?fields=caption,media_count,media_type,permalink,media_url&&access_token=" + props.token;
    fetch(url).then( res =>  res.json()).then(res => {
        if(res.hasOwnProperty("error")){
            setRes({
                isError: true,
                isLoaded: true
        })
        }else{
            setRes({
                isError: false,
                isLoaded: true,
                feeds: res.data
            })
        }
    })["catch"](function (error) {
        console.error('Error:', error);
        setRes({
          isLoaded: true,
          isError: true,
          error: error
        });
      });
      const posts = data.feeds;


    
}