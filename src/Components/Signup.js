import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

// Icon
import { AiTwotoneStar } from "react-icons/ai"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"

const Signup = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'PayBuddy | Create a free acount '
    })
    return (
        <React.Fragment>
            <div className="row w-100 mx-auto" style={{ height: '100vh' }}>
                {/* Registration form */}
                <div className="col-md-6 p-5">
                    <div className="col-8 mx-auto d-flex justify-content-center flex-column h-100">
                        <h4 className="mb-5 fw-bold">Create an account :)</h4>
                        <form className="needs-validation" novalidate>
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <label for="firstName" className="form-label">First name</label>
                                    <input type="text" className="form-control" id="firstName" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <label for="lastName" className="form-label">Last name</label>
                                    <input type="text" className="form-control" id="lastName" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address for shipping updates.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label for="address" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-md-5">
                                    <label for="country" className="form-label">Country</label>
                                    <select className="form-select" id="country" required>
                                        <option value="">Choose...</option>
                                        <option>United States</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label for="state" className="form-label">State</label>
                                    <select className="form-select" id="state" required>
                                        <option value="">Choose...</option>
                                        <option>California</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label for="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="zip" placeholder="" required />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <Link to="/" className="w-100 btn btn-dark btn-lg my-4" type="submit">Sign Up</Link>
                        </form>
                    </div>
                </div>

                {/* Carousel */}
                <div className="col-md-6 px-0">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div onClick={() => navigate(-1)} style={{ position: 'absolute', zIndex: '10' }} className='m-5 text-light'>back</div>
                            <div className="carousel-item active carousel1 px-0">
                                <div class="text-light w-100 me-auto align-items-end d-flex justify-content-end h-100 px-4">
                                    <div className="p-5 w-100">
                                        <div className="row pt-3 w-100">
                                            <div className="col">
                                                <h3>Sophie Hall</h3>
                                                <strong>Founder, Catalop</strong>
                                                <p>Web Design Agency</p>
                                            </div>
                                            <div className="col text-end">
                                                <AiTwotoneStar />
                                                <AiTwotoneStar />
                                                <AiTwotoneStar />
                                                <AiTwotoneStar />
                                                <AiTwotoneStar />

                                                <div className="pt-3">
                                                    <BsArrowLeft style={{ color: 'white' }} className="btn fs-1 p-2 rounded-circle border me-3 border-2" data-bs-target="#carouselExampleFade" data-bs-slide="prev" />

                                                    <BsArrowRight style={{ color: 'white' }} className="btn fs-1 p-2 rounded-circle border border-2" data-bs-target="#carouselExampleFade" data-bs-slide="next" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            </div>
        </React.Fragment>
    );

}

export default Signup;