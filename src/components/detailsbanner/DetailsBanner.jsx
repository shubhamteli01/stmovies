import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../../hooks/UseFetch';
import { useSelector } from 'react-redux';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import LazyLoadImage from '../../components/lazyLoadImage/LazyLoadImage';
import { MdOutlinePlayCircle } from "react-icons/md";
import dayjs from "dayjs";
import PosterFallback from "../../assets/no-poster.png";

import './detailsBanner.css'
import CircularRating from '../circularRating/CircularRating';
import VideoPopup from '../videoPopup/VideoPopup';
function DetailsBanner({ video, crew, loading }) {
    const { mediaType, id } = useParams();
    const [backgroundImage, setBackgroundImage] = useState('')
    const { data } = UseFetch(`${mediaType}/${id}`);
    const [writer, setwriter] = useState('')
    loading = false;
    console.log(crew)
    const { url } = useSelector((state) => state.home);
    let directors = crew?.data?.data?.crew?.filter((item) =>
        item?.department === "Directing"

    )
    let writers = crew?.data?.data?.crew?.filter((item) =>
        item?.department === "Writing" || item?.department === "Story" || item?.department === "Screenplay"

    )
    const skItem1 = () => {
        return (
            < >
                <div className='detailsBanner_background_img'>
                </div>
                <ContentWrapper>
                    <div className="detailsBannerContent">
                        <div className="detailsBannerContent_profile detail" >
                        </div>
                        <div className="detailsBannerContent_text detail">

                        </div>
                    </div>
                </ContentWrapper>


            </>
        );
    };


    console.log(video)
    console.log(writers)
    const [play, SetPlay] = useState(false)
    const playvideo = (key) => {
        SetPlay(true);
        setwriter(writers);
    }
    const stopvideo = () => {
        SetPlay(false);
    }
    const BackgroundImage = data?.data?.backdrop_path ? url.backdrop + data?.data?.backdrop_path : PosterFallback;
    const PosterImage = data?.data?.poster_path ? url.backdrop + data?.data?.poster_path : PosterFallback;

    return (
        <div className='detailsBanner'>
            {
                !loading ? (
                    <>
                        <div className='detailsBanner_background_img'>
                            <img src={BackgroundImage} className="detailsBanner_lazyload" />
                            <div className='opacityBottom height50'></div>
                            <div className='opacityRight width50'></div>
                            <div className='opacityLeft width50'></div>
                            <div className='opacityTop height50'></div>
                        </div>
                        <ContentWrapper>

                            <div className="detailsBannerContent">
                                <div className="detailsBannerContent_profile">
                                    <img src={PosterImage} />
                                </div>
                                <div className="detailsBannerContent_text">
                                    <div className="detailsBannerContent_text_title" >
                                        {data?.data?.original_title} ({dayjs(data?.data?.release_date).format('MMM DD, YYYY')})
                                    </div>
                                    <div className="detailsBannerContent_text_subitle"  >
                                        {data?.data?.tagline}
                                    </div>
                                    <div style={{ marginTop: '-10px' }}>
                                        {data?.data?.genres?.map((item) => {
                                            return (
                                                <span className='genresbox'>{item.name}</span>
                                            )
                                        })}
                                    </div>
                                    <div style={{ height: '10%', display: 'flex', alignItems: 'center' }}>
                                        <div><CircularRating rating={data?.data?.vote_average.toFixed(1)}></CircularRating></div>
                                        <div className='playIconDiv'><MdOutlinePlayCircle className='playIcon' onClick={playvideo} />Watch Trailer</div>
                                    </div>
                                    <div className="detailsBannerContent_text_title">
                                        Overview
                                    </div>
                                    <div className="detailsBannerContent_text_overview">
                                        {data?.data?.overview}
                                    </div>
                                    <div className="detailsBannerContent_text_subitle">
                                        <div>
                                            <span style={{ fontWeight: 'bold' }}>Status : </span><span style={{ marginRight: '2%' }}>{data?.data?.status}.</span>
                                            <span style={{ fontWeight: 'bold' }}>Release Date : </span><span style={{ marginRight: '2%' }}> {dayjs(data?.data?.release_date).format('MMM DD, YYYY')}.</span>
                                            <span style={{ fontWeight: 'bold' }}>Runtime : </span><span style={{ marginRight: '2%' }}>{data?.data?.runtime} Min.</span>
                                        </div>
                                    </div>
                                    <div className='whiteline'></div>
                                    <div className="detailsBannerContent_text_subitle">
                                        <span style={{ fontWeight: 'bold' }}>Director : </span>
                                        <span>
                                            {
                                                directors?.map((item, i) => {
                                                    return (
                                                        <span key={i} >
                                                            {item.name}
                                                            {(directors.length - 1 > i) &&
                                                                ", "
                                                            }

                                                        </span>
                                                    )
                                                })
                                            }
                                        </span>
                                    </div>
                                    <div className='whiteline'></div>
                                    <div className="detailsBannerContent_text_subitle">
                                        <span style={{ fontWeight: 'bold' }}>Writer : </span>
                                        <span>
                                            {
                                                writers?.map((item, i) => {
                                                    return (
                                                        <span key={i} >
                                                            {item.name}
                                                            {(writers.length - 1 > i) &&
                                                                ", "
                                                            }

                                                        </span>
                                                    )
                                                })
                                            }
                                        </span>



                                    </div>
                                </div>
                                {
                                    play &&
                                    <div className='trailerBox'>
                                        <div className='closeBtnDiv' onClick={() => SetPlay(false)} style={{ cursor: 'pointer' }}>Close</div>
                                        <div style={{ height: '50%' }}>
                                            <VideoPopup url={video?.key}></VideoPopup>
                                        </div>
                                    </div>
                                }

                            </div>


                        </ContentWrapper>
                    </>

                ) : (skItem1())

            }

        </div>
    )
}

export default DetailsBanner