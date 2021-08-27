
import React from 'react'
import { Link } from 'react-router-dom';

const TopMenu = (props) => {
    const islogedIn = props.islogedIn;

    return (


        <div className="icon-bar">


            <Link className="active" to={'/'} >
                <i className="fa fa-home"></i>
            </Link>
            {/* <Link to={'/vehicles'} >
                    <i className="fa fa-car"></i>
                </Link>



                <Link
                    to={'/customer/all'} >
                    <i className="fa fa-user"></i>
                </Link>
                <Link
                    className={islogedIn ? 'active' : 'notlogedin'}
                    to={'/Login'} >
                    <i className="fa fa-key"></i>
                </Link> */}

            {/* <input type="text" placeholder="Search.." /> */}


            <div className="div-logo">
          
              
                        Elogy <span className="span-green"> Avi innovation</span>
                
                     
            </div>

        </div>




    )
}


export default TopMenu;

