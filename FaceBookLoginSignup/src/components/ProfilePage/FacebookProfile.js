import React from 'react'
import LeftSideBar from './FacebookProfile/LeftSideBar'

const FacebookProfile = () => {
  return (
    <div class="container-fluid">
        <div className="row">
            <div class="col-md-2">
                <LeftSideBar/>
            </div>
            <div class="col-md-7">
            One of three columns
            </div>
            <div class="col-md-3">
            One of three columns
            </div>
        </div>
    </div>
  )
}

export default FacebookProfile