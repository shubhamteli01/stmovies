import React, { useState } from 'react'
import SwitchTab from '../switchTab/SwitchTab'
import './trending.css'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import UseFetch from '../../hooks/UseFetch';
import Carousel from '../carosoul/Carousel';

const Trending = () => {
    const [endPoind, SetEndPoint] = useState('day')

    const { data, loading } = UseFetch(`trending/movie/${endPoind}`);

    let arr = ['Day', 'Week']
    const handleDataFromChild = (data) => {
        console.log(data);
        SetEndPoint(data === "Day" ? "day" : "week");
        console.log(endPoind);
    };
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    console.log(data)
    return (
        <div className='trendingdiv'>
            <ContentWrapper>
                <div className='trendingcontent'>
                    <div className='trendingtitleBar'>
                        <span className='trendingContentTitle'>Trending</span>
                        <SwitchTab data={arr} handleDataFromChild={handleDataFromChild}></SwitchTab>
                    </div>

                    <div className='carosoulBox'>
                        <Carousel data={data?.data?.results} loading={loading}></Carousel>
                    </div>
                </div>
            </ContentWrapper>

        </div>
    )
}

export default Trending