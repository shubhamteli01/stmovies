import React, { useState } from 'react'
import LazyLoadImg from '../lazyLoadImage/LazyLoadImage';
import CircularRating from '../circularRating/CircularRating';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import PosterFallback from "../../assets/no-poster.png";
import { useSelector } from 'react-redux'
import { useParams, Redirect } from "react-router-dom";
import Details from '../../pages/details/Details';

const MovieCard = ({ item, mediaType }) => {
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home)

    const imagePath = item?.poster_path ? url.backdrop + item?.poster_path : PosterFallback;
    console.log(imagePath)
    const show = () => {
        console.log(item)
        navigate(`/${(item?.media_type) ? item?.media_type : mediaType}/${item?.id}`)
    }
    return (

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='carouselItem' onClick={() => { show() }}>
                <div className='carouselImage'>
                    <LazyLoadImg src={imagePath} className='posterLazyImg'></LazyLoadImg>
                </div>
                <div className='circularRating'>
                    <CircularRating rating={item?.vote_average?.toFixed(1)}></CircularRating>
                </div>
                <div className='carouselItemTitle' > {(item?.title || item?.name) ? (item?.title || item?.name) : 'No title'}</div>

                <div className='carouselItemDate'>{(item?.release_date || item?.first_air_date) ? dayjs(item?.release_date || item?.first_air_date).format('MMM DD, YYYY') : 'No date available'}</div>
            </div>
        </div>
    )
}

export default MovieCard