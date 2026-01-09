import React from 'react';
import WhyChooseData from '../jsonData/WhyChooseData.json'
import Carousel from 'react-multi-carousel'
import SingleChooseH2 from './SingleChooseH2'

const WhyChooseH2 = () => {
    return (
        <>
            <section className="why-choose-us-sec home-v2 overflow-hidden pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="why-choose-all">
                                <div className="why-choose-h2-carousel-wrap">
                                    <Carousel
                                        infinite={true}
                                        draggable={true}
                                        arrows={false}
                                        pauseOnHover={true}
                                        slidesToSlide={2}
                                        showDots={true}
                                        swipeable={true}
                                        autoPlay={false}
                                        autoPlaySpeed={3000}
                                        responsive={{
                                            laptop: {
                                                breakpoint: {
                                                    max: 3000,
                                                    min: 992
                                                },
                                                items: 3,
                                                partialVisibilityGutter: 40
                                            },
                                            tablet: {
                                                breakpoint: {
                                                    max: 991,
                                                    min: 768
                                                },
                                                items: 2,
                                                partialVisibilityGutter: 40
                                            },
                                            mobile: {
                                                breakpoint: {
                                                    max: 767,
                                                    min: 1
                                                },
                                                items: 1,
                                                partialVisibilityGutter: 40
                                            }
                                        }}>

                                        {WhyChooseData.map(choose =>
                                            <SingleChooseH2 choose={choose} key={choose.id} />
                                        )}

                                    </Carousel>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseH2;