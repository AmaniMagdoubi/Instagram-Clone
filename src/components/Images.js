// importing Hooks  
import { useState, useEffect } from "react";

// images outter function 
const Images = () => {
    // return the current state and a function that updates the state
    const [myPics, setMyPics] = useState([]);
    const [displayImages, setDisplay] = useState(false);

    // fetching image from API and awaiting it
    const fetchPics = async() => {
        const response = await fetch("https://picsum.photos/v2/list"); 
        const data = await response.json(); 
        setMyPics(data); 
        console.log(data);   
    }

    // side effects in your components: fetching data, directly updating the DOM
    useEffect(()=> {
        fetchPics();
        console.log(myPics)
      },[])

    // displays the image 
    return (
        <div>
             <button onClick={(event) => setDisplay(!displayImages)}>Click Me On</button>
            {displayImages && myPics.map((item, index) => {return (
                <div> 
                    <img src={item.download_url}/>
                </div>
                )
            })}
        </div>
    )
}; 

export default Images;

