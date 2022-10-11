import React from 'react'
import styles from '../styles/facebookpage/facebook.module.css'
import FacebookProfile from './FacebookProfile'
import Header from './Header'

const ProfilePage = () => {
  return (
    <div className={[styles['facebook-container']]}>
       <Header/>
       <FacebookProfile/>
    </div>
  )
}

export default ProfilePage