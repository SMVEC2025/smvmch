import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleEvent = ({ event }) => {
    let { image, title, location, time, text } = event

    return (
        <>
            <div className="event-inner">
                <div className="event-thumb">
                    <img src={`/img/event/${image}`} alt="eventImage" />
                    <div className="event-overlay">
                        <Link to="/events#"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link>
                    </div>
                </div>
                <div className="event-desc">
                    <h2><Link to="/events#">{title}</Link></h2>
                    <div className="event-meta">
                        <ul>
                            <li><i className="fa-solid fa-location-pin"></i>{location}</li>
                            <li><i className="fa-regular fa-clock"></i>{time}</li>
                        </ul>
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        </>
    );
};

export default SingleEvent;