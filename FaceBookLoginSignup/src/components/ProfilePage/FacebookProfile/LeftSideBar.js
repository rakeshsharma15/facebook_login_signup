import React from 'react'
import styles from '../../styles/facebookpage/leftsidebar.module.css'

const LeftSideBar = () => {
  return (
    <div className={[styles['leftsidebar-container']]}>
        <div className={[styles['options']]}>
           <div className={[styles['home']]}>
                <i class="ph-house-line"></i> Home
           </div>
        </div>
    </div>
  )
}

export default LeftSideBar