import React from 'react'
import './Features.css'
import { featureInfo } from './Feature'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <div className='features'>
        <div className='features_category'>
          <img src={featureInfo.img} alt="" style={{width:'43px'}}/>
          <Link  style={{textDecoration:0, color:'black'}} to='account'><h3>{featureInfo.title}</h3></Link>
          
          <span>{featureInfo.detail}<span style={{color:'#00a7ac', fontWeight:'bold'}}> 44</span></span>
        </div>
    </div>
  )
}

export default Features

