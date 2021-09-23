import {React , useState} from 'react'
import bgImg from './slider.jpg'
import {Link} from 'react-router-dom'
import { Header } from './Header'
import img1 from './download.png'




export const Learn = () =>{
    
   

    return(
            <>
            <Header/>
      <div style={{backgroundColor:'#93b9c9'}}>
          <img src={img1} width='100%' />
          <img style={{position:'absolute', top:'20%',left:'15%'}} src={'https://static.typingclub.com/m/tpmedia/img/moon.png'} width="100px" height="100px" />
          <h1 style={{position:'absolute', top:'40%',right:'30%',color:'white'}}>Learn typing for free at Typing Tutor!</h1>
          <button style={{position:'absolute', top:'60%',left:'40%',backgroundColor:'White',fontWeight:'bold',fontSize:'17px',color:'#93b9c9',width:'200px',height:"40px",margin:'5px',border:'none',outline:'none',cursor:'pointer'}}> Get Started </button> 
      </div>
            </>
    )
}