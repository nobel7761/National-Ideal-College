import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image1 from '../../../../images/carousel/1.jpg';
import Image2 from '../../../../images/carousel/2.jpg';
import Image3 from '../../../../images/carousel/3.jpg';
import icon1 from '../../../../images/carousel/h-ic1.png';
import icon2 from '../../../../images/carousel/h-ic2.png';
import icon3 from '../../../../images/carousel/h-ic3.png';
import icon4 from '../../../../images/carousel/h-ic4.png';
import './BannerCarousel.css';
const BannerCarousel = () => {


    return (
        <div>    <Carousel indicators={false} interval={3000} >
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src={Image1}
                    alt="First slide"
                />
                <div className="caption">
                    <div>
                        <h2> WELCOME TO <span className="tittleLastPart">UNIVERSITY</span></h2>
                        <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                        <button className=" buttons">ALL COURSES</button>
                        <button className="ms-5 buttons buttons2">READ MORE</button>
                    </div>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image2}
                    alt="Second slide"
                />

                <div className="caption">


                    <h2>ADMISSION OPEN <span className="tittleLastPart">2018</span></h2>
                    <p className="description">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</p>
                    <button className=" buttons">ADMISSION</button>
                    <button className="ms-5 buttons buttons2">READ MORE</button>
                </div>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={Image3}
                    alt="Third slide"
                />

                <div className="caption">


                    <h2>EDUCATION <span className="tittleLastPart">MASTER</span></h2>
                    <p className="description">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                    </p>
                    <button className=" buttons">ALL COURSES</button>
                    <button className="ms-5 buttons buttons2">READ MORE</button>
                </div>

            </Carousel.Item>
        </Carousel>
            <div className="d-flex w-25 mx-auto gx-2 fixed_item">
                <div className=" icon-bg-width">
                    <img src={icon1} alt="" /> <br />
                    <p className="text-white">ACADEMY</p>
                </div>
                <div className=" icon-bg-width"><img src={icon2} alt="" />
                    <p className="text-white">ADMISSION</p>
                </div>
                <div className=" icon-bg-width"><img src={icon4} alt="" />
                    <p className="text-white">COURSES</p>
                </div>
                <div className=" icon-bg-width"><img src={icon3} alt="" />

                    <p className="text-white">SEMINER</p></div>
            </div>

        </div>

    );
};

export default BannerCarousel;