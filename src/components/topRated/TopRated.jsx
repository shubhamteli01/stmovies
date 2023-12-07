import React, { useState } from 'react'
import SwitchTab from '../switchTab/SwitchTab'
import '../popular/popular.css'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import UseFetch from '../../hooks/UseFetch';
import Carousel from '../carosoul/Carousel';

function TopRated() {
    const [mediaType, SetmediaType] = useState('movie')

    let arr = ['Movies', 'TV Shows']
    const handleDataFromChild = (data) => {
        console.log(data);
        SetmediaType(data === "Movies" ? "movie" : "tv");
    };
    const { data, loading } = UseFetch(`${mediaType}/top_rated`);

    console.log(mediaType)
    return (
        <div className='populardiv'>
            <ContentWrapper>
                <div className='popularcontent'>
                    <div className='populartitleBar'>
                        <span className='popularContentTitle'>Top Rated</span>
                        <SwitchTab data={arr} handleDataFromChild={handleDataFromChild}></SwitchTab>
                    </div>
                    <div className='carosoulBox'>
                        <Carousel data={data?.data?.results} loading={loading} mediaType={mediaType}></Carousel>
                    </div>
                </div>
            </ContentWrapper>

        </div>
    )
}

export default TopRated