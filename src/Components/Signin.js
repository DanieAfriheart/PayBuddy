import React from 'react'
import { Link, useNavigate } from "react-router-dom";

// Icon
import { FcGoogle } from "react-icons/fc";
function Signin() {
    const navigate = useNavigate();
    return (
        <React.Fragment>
            <div className="row w-100 mx-auto" style={{ height: '100vh' }}>
                {/* Carousel */}
                <div className="col-md-6 px-0">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div onClick={() => navigate(-1)} style={{ position: 'absolute', zIndex: '10' }} className='m-5 text-light'>back</div>
                            <div className="carousel-item active carousel1"></div>
                            <div className="carousel-item carousel2"></div>
                            <div className="carousel-item carousel3"></div>
                            <div className="carousel-item carousel4"></div>
                        </div>
                        <button className="carousel-control-prev d-none" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next d-none" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                {/* Registration form */}
                <div className="col-md-6 p-5">
                    <div className="col-9 mx-auto d-flex justify-content-center flex-column h-100">
                        <h4 className="">Welcome back</h4>
                        <p>Welcome back, please enter your details.</p>
                        <form className="needs-validation mt-3" novalidate>
                            <div className="row g-4">

                                <div className="col-12">
                                    <Link to="/" className="w-100 btn btn-outline-secondary btn-lg my-4" type="submit"><FcGoogle /> Log in with Google </Link>
                                    <p className='text-center'>Or</p>
                                    <label for="username" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" className="form-control" id="username" placeholder="Username" required />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="password" className="form-label">Password <span className="text-muted"></span></label>
                                    <input type="password" className="form-control" id="password" placeholder="*****" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>
                                <div class="form-check">
                                    <input id="credit" type="checkbox" class="form-check-input" checked required />
                                    <label class="form-check-label" for="credit">Remember me</label>
                                </div>

                            </div>

                            <Link to="/" className="w-100 btn btn-dark btn-lg my-4" type="submit">Log in</Link>
                        </form>
                    </div>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Signin