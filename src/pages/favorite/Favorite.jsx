import { useEffect, useState } from 'react';

import './Favorite.scss'

export const Favorite = () => {
    const [state, setState] = useState(null);
    
    useEffect(() => {
        if(localStorage.getItem('favorite')) {
            const arrayOfPhoto = localStorage.getItem('favorite').split(';');
            arrayOfPhoto.pop();
            setState(arrayOfPhoto);
        }
    }, []);
    return (
        <div className='favorite'>
            <section className='favorite__list'>
                {state && state.map((el,i) => (
                    <div key={i} className='favorite__item'>
                        <img src={el} height='300' className='favorite__item-img' alt="favorite-photo"/>
                    </div>
                ))}
                {!state && 
                <div>
                    <h2>Favorite</h2>
                    You don`t add anything to favorite
                </div>}
            </section>
        </div>
    );
};
