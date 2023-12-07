import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './lazyloadingImage.css'
const LazyLoadImg = ({ src }) => (
    <div className='lazyImg'>
        <LazyLoadImage
            className='lazyImg_img'
            alt=""
            effect="blur"
            src={src} />

    </div>
);

export default LazyLoadImg