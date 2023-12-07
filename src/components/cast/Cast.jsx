import React from 'react'
import UseFetch from '../../hooks/UseFetch';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './cast.css'

import LazyLoadImg from '../lazyLoadImage/LazyLoadImage'
import ContentWrapper from '../contentWrapper/ContentWrapper';
import person from "../../assets/avatar.png";

function Cast(data) {

    const { url } = useSelector((state) => state.home)
    const { mediaType, id } = useParams();
    console.log(data)
    return (
        <div className='cast'>
            <div className='componentTitle'>Top Cast</div>
            <ContentWrapper>
                <div className='slider' >
                    {

                        data?.credits?.map((item) => {
                            const imagePath = item.profile_path ? url.backdrop + item.profile_path : person;
                            return (
                                <div>
                                    <div className='castItem' >
                                        <div className='castImage'>
                                            <LazyLoadImg src={imagePath} className='posterLazyImg'></LazyLoadImg>
                                        </div>
                                        <div className='castItemTitle'> {item.name}</div>
                                        <div className='castItemDate'>{item.known_for_department}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </ContentWrapper>
        </div >
    )
}

export default Cast