import React from 'react'
import './footer.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCard from '../movieCard/MovieCard';
import UseFetch from '../../hooks/UseFetch';
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
function Footer() {

    return (
        <div className='footerPage'>
            <div className='links'>
                <div>Privacy</div>
                <div>About</div>
                <div>FAQ</div>
                <div>Blog</div>
            </div>
            <div className='info'>
                Movies move us like nothing else can, whether they’re scary, funny, dramatic, romantic or anywhere in-between. So many titles, so much to experience.
            </div>
            <div className='socialIcons'>
                <div><FaFacebook /></div>
                <div><FaLinkedin /></div>
                <div><FaInstagram /></div>
                <div><IoLogoTwitter /></div>
            </div>
        </div >
    )
}

export default Footer