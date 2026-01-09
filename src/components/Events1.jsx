import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Carousel from 'react-multi-carousel';
import EventData from '../jsonData/EventData.json';

const Events1 = () => {
    const CustomRightArrow = ({ onClick }) => {
        return (
            <button className="commonArrow arrowRight" onClick={() => onClick()}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>
        );
    };

    const CustomLeftArrow = ({ onClick }) => {
        return (
            <button className="commonArrow arrowLeft" onClick={() => onClick()}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
        );
    };

    return (
        <>
            <section className="events-showcase pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="events-showcase-header">
                                <h2>Our Events</h2>
                                <Link className="events-showcase-view" to="/events#">
                                    View all
                                    <span className="events-showcase-view-icon">
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="events-carousel-wrap">
                                <Carousel
                                    infinite={true}
                                    draggable={true}
                                    arrows={true}
                                    pauseOnHover={true}
                                    slidesToSlide={1}
                                    showDots={false}
                                    swipeable={true}
                                    autoPlay={false}
                                    autoPlaySpeed={3000}
                                    customRightArrow={<CustomRightArrow />}
                                    customLeftArrow={<CustomLeftArrow />}
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
                                            partialVisibilityGutter: 30
                                        },
                                        mobile: {
                                            breakpoint: {
                                                max: 767,
                                                min: 1
                                            },
                                            items: 1,
                                            partialVisibilityGutter: 20
                                        }
                                    }}>
                                    {EventData.map((event) => (
                                        <div className="event-card" key={event.id}>
                                            <div className="event-card-media">
                                                <img src={`/img/event/${event.image}`} alt={event.title} />
                                                <span className="event-card-tag">Campus Event</span>
                                            </div>
                                            <div className="event-card-body">
                                                <h3>{event.title}</h3>
                                                <p>{event.text}</p>
                                                <Link className="event-card-link" to="/events#">
                                                    <span className="event-card-link-icon">
                                                        <i className="fa-solid fa-arrow-right"></i>
                                                    </span>
                                                    Learn more
                                                </Link>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Events1;
