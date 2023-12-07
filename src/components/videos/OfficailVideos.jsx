import React, { useState } from 'react'
import UseFetch from '../../hooks/UseFetch';
import { useSelector } from 'react-redux'
import './officialVideos.css'
import { GoPlay } from "react-icons/go";
import LazyLoadImg from '../lazyLoadImage/LazyLoadImage'
import ContentWrapper from '../contentWrapper/ContentWrapper';
import person from "../../assets/avatar.png";
import ReactPlayer from 'react-player'
import VideoPopup from '../videoPopup/VideoPopup';
const OfficailVideos = (data) => {
    const [play, SetPlay] = useState(false)
    const [url, Seturl] = useState('')
    const playvideo = (key) => {
        SetPlay(true);
        Seturl(key);
    }
    const stopvideo = () => {
        SetPlay(false);
    }
    console.log(data?.data?.results)

    return (
        <div className='cast'>
            <div className='componentTitle' onClick={() => stopvideo()}>Official Videos </div>

            <ContentWrapper>
                <div className='slider'>
                    {
                        data?.data?.results === undefined || data?.data?.results?.length !== 0 ?
                            data?.data?.data?.results?.map((item) => {

                                return (
                                    <div>

                                        <div className='videoItem' onClick={() => playvideo(item.key)}>
                                            <div className='thumbneil'>
                                                <LazyLoadImg
                                                    src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`}
                                                    className='posterLazyImg thumbneilImh' >
                                                </LazyLoadImg>
                                                <GoPlay className='platButton' /></div>
                                            <div className='castItemTitle'> {item.name}</div>
                                            <div className='castItemDate'>{item.known_for_department}</div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className='Nodata' >
                                No data available
                            </div>

                    }

                </div>
            </ContentWrapper>
            {
                play &&
                <div className='videoBox'>
                    <div className='closeBtnDiv' onClick={() => SetPlay(false)} style={{ cursor: 'pointer' }}>Close</div>
                    <VideoPopup url={url}></VideoPopup>
                </div>
            }


        </div >
    )
}

export default OfficailVideos