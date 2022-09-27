import React from "react";
// Pictures
// import CarouselImage1 from "../img/car1.jpg"
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const nav = useNavigate();

    return (
        <React.Fragment>
            {/* <div className="container-fluid" style={{height:'100vh'}}> */}
                <div className="row w-100 mx-auto" style={{height: '100vh'}}>
                    <div className="col-md-6 px-0">
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active carousel1"></div>
                                <div class="carousel-item carousel2"></div>
                                <div class="carousel-item carousel3"></div>
                                <div class="carousel-item carousel4"></div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6 py-5">
                        <button className="btn btn-dark" onClick={() => nav(-1)}>back</button>
                    </div>
                </div>
            {/* </div> */}
        </React.Fragment>
    );
}

export default Signup;