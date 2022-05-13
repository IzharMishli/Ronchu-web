import React, {useState, useEffect} from "react";
import InstaImg from "./InstaImg";
import "../styles/insta.css"

var styles = {"instagramItems":"_2R-kh","instagramItem":"_wPDyp","instagramImg":"_vzTHL","instagramIcon":"_3xnQP","errorMessage":"_3lhLL"};



export default function(props){

    const [posts, setPosts] = useState({
        isError: false,
        isLoaded: false,
        feeds: []
    })
    var url = "https://graph.instagram.com/me/media?fields=caption,media_count,media_type,permalink,media_url&&access_token=" + props.token;
    
    useEffect(function effectFunc() {
            fetch(url).then( res =>  res.json()).then(res => {
                if(!res.hasOwnProperty("error")) {
                    setPosts({
                        isError: false,
                        isLoaded: true,
                        feeds: res.data
                     });
                }
                else
                {
                    setPosts({
                        isError: true,
                        isLoaded: true
                     });
                    console.log("error...");
                }
               })
            }, []);
               
                
               
            return (
                
                <div className="row insta-part">
                    {posts.feeds.filter(post => String(post.caption).includes("") && post.media_type=="IMAGE").map(post => (
                        <InstaImg imgsrc={post.media_url} link={post.permalink}/>
                    ))}
                </div>
                );

        }
        
    
        
            

              
