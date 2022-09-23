import React from 'react'
import Robot from "../img/robot.gif";
import { Link } from "react-router-dom";
import { FcRight } from "react-icons/fc";
function Pagenotfound() {
    return (
        <React.Fragment>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 text-center">
                            <img src={Robot} alt="" className='w-75' />
                        </div>
                        <div className="col-md-6 align-items-center d-flex justify">
                            <div>

                                <h1 className='display-1 fw-bold' style={{ fontSize: '10em' }}>Oops!</h1>
                                <p className="lead fw-bold">LOOKS LIKE YOU'RE LOST</p>
                                <p>The page you are looking for is not available</p>
                                <Link to='/' className='nav-link fw-bold'>Go Home <FcRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Pagenotfound