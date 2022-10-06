import { useEffect, useState } from 'react';

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
            <p>Some text</p>
            <ul>
                {photos && photos.map(({id,author,url, download_url}) => (
                    <li key={id}>
                        <p>{author}</p>
                        <img src={download_url} width='300' alt={author}/>
                    </li>
                ))}
            </ul>
        </div>
    );
};
