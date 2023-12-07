import React from 'react'
import './contentWrapper.css'

const ContentWrapper = ({ children }) => {
    return (
        <div className='ContentWrapper'>
            {children}
        </div>
    )
}

export default ContentWrapper