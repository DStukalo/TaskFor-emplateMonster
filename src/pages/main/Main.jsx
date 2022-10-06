import { useEffect, useState } from 'react';

import './Main.scss'

export const Main = () => {
    const [photos, setPhotos] = useState(null);

    useEffect(()=> {
    const fetchData = async () => {
        const response = await fetch('https://picsum.photos/v2/list?page=1&limit=10')
        const data = await response.json()
        console.log(data)
        setPhotos(data)
    }
    fetchData()
    },[])

    return (
        <div>
            <h1>Main page</h1>
            <section className='gallery'>
                {photos && photos.map(({id,author,url, download_url}) => (
                    <div key={id} className='gallery__item'>
                        <p>{author}</p>
                        <p>{url}</p>
                        <img src={download_url} width='300' className='gallery__item-img' alt={author}/>
                    </div>
                ))}
            </section>
        </div>
    );
};
