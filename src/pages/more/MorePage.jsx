import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';

import './MorePage.scss'

export const More = () => {
  const location = useLocation();
  const { from } = location.state;
  const [photo, setPhoto] = useState(null); 

  useEffect(()=> {
    const fetchData = async () => {
        const response = await fetch(`https://picsum.photos/id/${from.id}/info`);
        const data = await response.json();
        setPhoto(data);
    }
    fetchData();
    }, [from])

    console.log(photo)
  return (
      <div className='more-wrapper'>
        {photo 
          ? <section className='more'>
              <h4 className='more__title'>Author: {photo.author}</h4>
              <div className='more__img'>
                <img src={photo.download_url} alt={photo.author}/>
              </div>
              <p> Photo on Unsplash : {photo.url}</p>
              <p> Width real photo : {photo.width}</p>
              <p> Height real photo : {photo.height}</p>
            </section>
          : <div>Some problems</div>
        }
         
      </div>
  );
};
