import React from 'react'
import './JobFeature.css'
import { Link } from 'react-router-dom';
import companyImg from '../assets/template/assets/images/bg/company-logo/company-02.png'
import arrowRight from './icon/apply-arrow.svg'
import bookmark from './icon/bookmark.svg'
import circle from './icon/circle.svg'



const JobFeature = () => {
    const job = {
        img:companyImg,
        description:'Assistant Laboratorist',
        name:'Norland Company',
        icon:bookmark,
        Salary:'$30-$40 / Per Hour',
        JobType:'Part Time, Full Time',
        Deadline:'03-04-2023',
    };

  return (
   <div className='jobfeature_container'>
     <Child Job={job}/>
   </div>
    
  )
}


function Child({Job}) {
    const {img, description, name,icon,Salary,JobType,Deadline} = Job;
    
    return(
        <div className='latestJob_category'>
          <div className='latest_header'>
            <img style={{borderRadius:'50%', height:'3rem',}} src={img} alt="" />
            <div className='header'>
              <div className='header_links'>
                <Link style={{textDecoration:'0', color:'#000'}}to='/description'><h3 style={{fontSize:'1.2rem'}}>{description}</h3></Link>
                <Link style={{textDecoration:'0', color:'#000', }}to='/name'><span style={{fontSize:'14px'}}>{name}</span></Link>
              </div>
              <div className="img_container" style={{width: "28px", height: "28px", borderRadius: "50%", border: "1px solid transparent", cursor: "pointer", background: "#eff3f2", display: "flex", justifyContent: "center", alignItems: "center" , marginTop:'12px'}}>
                <img  style={{alignSelf:'center'}} src={icon} alt="" />
              </div>
            </div>
          </div>
          <div className='latest_body'>
            <div>
              <span>Salary: {Salary}</span>
              <span>Job Type: {JobType}</span>
              <span>Deadline: {Deadline}</span>
            </div>
          </div>
          <div className='apply_btn'>
            <div className='img_icons'>
              <img className='circle_img' src={circle} alt="" />
              <img className='second_img' src={arrowRight} alt="" />
            </div>
            <Link style={{textDecoration:'0', fontWeight:'450', color:'#00a7ac'}} to='/apply'>Apply Now</Link>
          </div>
        </div>
    )
  
  }

export default JobFeature