import React from 'react'
import useGifs from '../useGifs';
import Card from './Card';
import Loader from './Loader'
const defaultImage = "https://www.antevenio.com/wp-content/uploads/2018/08/giphy.jpg"
export default function Grid({flag}) {
    const { gifs,loading, error } = useGifs(flag)
    if(loading){
        return <Loader/>
      }
    
      if(error){
        return <p>Oops! something went wrong</p>
      }
    
        
    
      return (
       
        
          <div className="container">
            {gifs.map((gif,i)=> <Card   
                                    imageUrl={gif.fixed_height_downsampled_url} 
                                    userName={gif.user? gif.user.username: 'Anonymous'} 
                                    avatarUrl={gif.user? gif.user.avatar_url: defaultImage} 
                                    profileUrl={gif.user? gif.user.profile_url: '/'} 
                                    title={gif.title} key={i}/>)}
            
          </div>
       
      );
}
