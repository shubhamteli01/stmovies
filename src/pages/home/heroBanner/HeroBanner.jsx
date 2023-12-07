import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UseFetch from '../../../hooks/UseFetch';
import LazyLoadImage from '../../../components/lazyLoadImage/LazyLoadImage';
import { useSelector } from 'react-redux';
import './heroBanner.css';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import CircularRating from '../../../components/circularRating/CircularRating';
const HeroBanner = () => {
    const navigate = useNavigate();
    const [backgroundImage, setBackgroundImage] = useState('')
    const [query, setQuery] = useState('')
    const { data } = UseFetch("movie/upcoming");
    const { url } = useSelector((state) => state.home);
    console.log(data)
    useEffect(() => {
        let number = Math.floor(Math.random() * 20);
        console.log(number)
        const bg = url.backdrop + data?.data.results[number]?.backdrop_path;
        setBackgroundImage(bg);
        console.log(bg)
    }, [data])
    const search = () => {
        if (query.length > 0) {
            navigate(`search/${query}`)
        }

    }
    return (
        <div className='heroBanner'>
            <ContentWrapper>

                <div className='background_img'>
                    <LazyLoadImage src={backgroundImage} className="lazyload" />
                    <div className='opacityBottom'></div>
                    <div className='opacityRight'></div>
                    <div className='opacityLeft'></div>
                    <div className='opacityTop'></div>
                </div>
                <div className="heroBannerContent">
                    <div className="title">Welcome.</div>
                    <div className="subTitle">

                        Millions of movies and TV shows, people to discover. Explore now.
                    </div>
                    <div className="searchInput">
                        <input type='text' placeholder='Search for a movie or tv show'
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button onClick={search}>Search</button>
                    </div>
                </div>
            </ContentWrapper>


        </div>
    )
}

export default HeroBanner