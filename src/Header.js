import React from "react";
import {
    Link
  } from "react-router-dom";



export const Header = (props) => {
    const divMain = {
        backgroundColor:'black',
        color:"white",
        width:'100%',
        height:'80px',
        justifyContent:'space-around',
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
    }

    const navDiv = {
        textAlign:'center',
        alignItems:'center',
        display:'flex',
        flexDirection:'row',
    }

    const NavItems = {
        margin:'20px',
        fontSize:'20px',
        color:'white',
        textDecoration:'none'
    }

    return(
        <>
        
            <div style={divMain}>
                <h1>Typing Tutor</h1>

               <div style={navDiv}>
               <Link to="/" style={NavItems}>Home</Link>
                <Link to="/learning" style={NavItems}>Learn Typing</Link>
                <Link to="/tutor" style={NavItems}>Test Typing</Link>

               </div>
            </div>
        </>
    )
}