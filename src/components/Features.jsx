

import React from 'react'
import './Features.css'
import { Link } from 'react-router-dom'
import imgFeature from './icon/account-finance-06.svg'

const Features = ({img, title, detail}) => {

  const data = {
    img:imgFeature,
    title:'Account & Finance',
    detail:'Job Available: '
  };

  return (
   
    <ChildComponent data={data}/>
  )
}

function ChildComponent({data}) {
  const {img, title, detail} = data;
  return(
    <div className='feature_container'>
      <div className='feature_category'>
        <img src={img} alt="" style={{width:'43px'}}/>
        <Link style={{textDecoration:'0', color:'black'}}><h3>{title}</h3></Link>
        <span>{detail}<span style={{color:'#00a7ac', fontWeight:'bold'}}> 44</span></span>
      </div>
    </div>
  )

}

export default Features