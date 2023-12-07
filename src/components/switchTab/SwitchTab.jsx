import React, { useEffect, useState } from 'react'
import './switchTab.css'
const SwitchTab = ({ data, handleDataFromChild }) => {
    const [selectedtab, SetSelectedtab] = useState(0);
    const highlightTab = (id, duration) => {
        SetSelectedtab(id);
        handleDataFromChild(duration)
    }
    console.log(data)
    return (
        <div className='tabBox'>
            {
                data?.map((item, index) => {
                    return (
                        <div className={`updatedClass ${selectedtab === index ? 'active' : ""}`} onClick={() => highlightTab(index, item)} >{item}</div>
                    )
                })
            }
        </div>
    )
}

export default SwitchTab