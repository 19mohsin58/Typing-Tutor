import {React , useState} from 'react'
import bgImg from './slider.jpg'
import {Link} from 'react-router-dom'





export const Slider = () =>{

    const divMain = {

        textAlign:'center',
        backgroundImage:`url("https://images.unsplash.com/photo-1559163499-413811fb2344?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80")`,
        alignItems:'center',
        backgroundRepeat:'no-repeat',
        backgroundCover:'cover',
        backgroundPosition:'center',
        backgroundSize:'100% auto',
        width:'100%',
        height:'600px',
        overflow:'hidden',
        color:'#ffff',
    }
 

    return(
    <>
    
    <div style={divMain}>
        <div style={{alignItems:'center',backgroundColor:'rgba(6, 21, 43,0.7)', width:'100%',height:'100%',marginTop:'-30px'}}>
        <div style={{alignItems:'center',position:'absolute',top:'27%',left:'27%'}}>
        <h1 >Typing Tutor </h1>
            <hr width='300px'/>
                <p style={{color:'#78797a',fontSize:'30px',fontFamily:'cursive'}}>Test & Improve Your Typing With Our Free <br/>Typing Platform</p>
             <hr style={{marginBottom:'40px'}} width='300px'/>
            <Link to='/tutor'> <button style={{backgroundColor:'#b30936',fontWeight:'bold',fontSize:'17px',color:'white',width:'200px',height:"40px",margin:'5px',border:'none',outline:'none',cursor:'pointer'}}> Test Typing </button> </Link>
           <Link to="/learning">  <button style={{backgroundColor:'#dec807',fontWeight:'bold',fontSize:'17px',color:'black',width:'200px',height:"40px",margin:'5px',border:'none',outline:'none',cursor:'pointer'}}> Learn Typing </button> </Link>
        </div>
        
        </div>
        
    </div>
    </>
    )
}