import React, {  useState, useEffect } from 'react'
import { GiphyFetch } from '@giphy/js-fetch-api'

const API_KEY = "<YOUR API KEY GOES HERE>";
const gf = new GiphyFetch(API_KEY)
const generateRandonImagesPromises = ()=> {
    const randomGifs = [];
    for(let i=0;i<10;i++){
      randomGifs.push(gf.random({tag: 'cartoons',type: 'gifs' }))
    } 
    return randomGifs;
  
  }
export default function useGifs(flag) {

    const [loading, setLoading] = useState(true)
    const [gifs, setGifs] = useState([])
    const [error, setError] = useState(false)
    //console.log('flag inside the hook', flag);

    useEffect(() => {
    
      
            const getRandomGif = async () => {
                setLoading(true)
                const randomGifs =generateRandonImagesPromises()
                const data  = await Promise.all(randomGifs);
                setGifs(data.map((e)=> e.data))
                setLoading(false)
              }
              try {
               
                getRandomGif()
                
              }catch(e){
                  setError(true)
              }
              
              
      
      
    }, [flag])
    return  { gifs, loading, error }
}
