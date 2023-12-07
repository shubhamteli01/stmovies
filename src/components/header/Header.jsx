import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper';
import { useNavigate } from 'react-router-dom';

import './header.css'
function Header() {
    const navigate = useNavigate();

    return (
        <div className='headerPage'>
            <ContentWrapper>
                <div className='headerDiv'>
                    <div style={{ fontSize: '23px', cursor: 'pointer' }} onClick={() => navigate(`/`)}>STMovies</div>
                    <div>
                        <span onClick={() => navigate(`explore/movie`)}>Movies</span>
                        <span onClick={() => navigate(`explore/tv`)} style={{ marginLeft: '20px' }}>TV Shows</span>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    )
}

export default Header