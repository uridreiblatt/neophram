
import React from 'react'
import { Link } from 'react-router-dom';
import { AiTwotoneHome, FaRegSun } from "react-icons/ai";



const TopMenu = (props) => {
    const islogedIn = props.islogedIn;

    return (


        <div className="icon-bar">

           
            <div className="div-home">

           
            <Link className="active" to={'/'} >
            <AiTwotoneHome className="ico" />
           
            </Link>
            </div>
            <div className="div-logo">
          
              
                        Elogy <span className="span-green"> Priority innovation</span>
                
                     
            </div>
            <div className="user-name">
                <h3>{props.userName}</h3>
            </div>

        </div>




    )
}


export default TopMenu;

