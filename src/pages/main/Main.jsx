import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './Main.scss'
import { ReactComponent as LogoHeart } from '../../img/heart.svg';

export const Main = () => {
    const [photos, setPhotos] = useState(null);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const [maxPages, setMaxPages] = useState(1000/ limit);
    const [doubleLeftArrow, setDoubleLeftArrow] = useState(true);
    const [leftArrow, setLeftArrow] = useState(true);
    const [doubleRightArrow, setDoubleRightArrow] = useState(false);
    const [rightArrow, setRightArrow] = useState(false);

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
            const data = await response.json();
            setPhotos(data);
        }
        fetchData()
    }, [limit, page])

    const onChangeSelect = (e) => {
        setMaxPages(1000/e.target.value);
        setLimit(e.target.value);
        setPage(1)
        setDoubleLeftArrow(true);
        setLeftArrow(true);
        setDoubleRightArrow(false);
        setRightArrow(false);
    }

    const onClickHeart = (e, id) => {
        if (e.target.localName === 'path') {
            if(localStorage.getItem('favorite')){
                let prev = localStorage.getItem('favorite');
                localStorage.setItem('favorite', `${prev} ${id},`)
            } else {
                localStorage.setItem('favorite', `${id},` )
            }
        }
    }

    const toLastPage = () => {
        setPage(maxPages);
        setDoubleLeftArrow(false);
        setLeftArrow(false);
        setDoubleRightArrow(true);
        setRightArrow(true);
    }

    const toNextPage = () => {
        if (page +1 === 100) {
            setDoubleRightArrow(true);
            setRightArrow(true);
        }
        setPage(page +1);
        setDoubleLeftArrow(false);
        setLeftArrow(false);
    }

    const toPrevPage = () => {
        if (page -1 === 1) {
            setDoubleLeftArrow(true);
            setLeftArrow(true);
        }
        setPage(page -1);
        setDoubleRightArrow(false);
        setRightArrow(false);
    }

    const toFirstPage = () => {
        setPage(1)
        setDoubleLeftArrow(true);
        setLeftArrow(true);
        setDoubleRightArrow(false);
        setRightArrow(false);
    }

    return (
        <div className='main'>
            <header className='main__header'>
            <div className='main__header-description'>
                <p className='main__header-text'>Show on page</p>
                <select className='main__header-select' onChange={ onChangeSelect }>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                    <option>40</option>
                </select>
            </div>
            </header>
            <section className='gallery'>
                {photos && photos.map(({id,author, download_url}) => (
                    <div key={id} className='gallery__item' onClick={(e)=>{onClickHeart(e,id)}}>
                        <h4 className='gallery__item-title'>Author: {author}</h4>
                        <img src={download_url} height='300' className='gallery__item-img' alt={author}/>
                        <div className='gallery__item-action'>
                            <LogoHeart/>
                            <Link to='/more' className='gallery__item-link' state={{ from: {id} }}>More...</Link>
                        </div>
                    </div>
                ))}
            </section>
            <div className='pagination'>
                    <button className='button double-left-arrow' disabled={doubleLeftArrow} onClick={toFirstPage}/>
                    <button className='button left-arrow' disabled={leftArrow} onClick={toPrevPage}/>
                    <button className='button'>
                       {page}
                    </button>
                    <button className='button right-arrow' disabled={rightArrow} onClick={toNextPage}/>
                    <button className='button double-right-arrow' disabled={doubleRightArrow} onClick={toLastPage}/>
                </div>
        </div>
    );
};
