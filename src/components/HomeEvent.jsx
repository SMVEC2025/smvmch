import React from 'react';
import EventData from '../jsonData/EventData.json'
import SingleEvent from './SingleEvent';

const HomeEvent = () => {
    return (
        <>
            <h1 className="faq-style1-title">Join Us Our Event</h1>
            {EventData.slice(0, 3).map(event =>
                <SingleEvent event={event} key={event.id} />
            )}
        </>
    );
};

export default HomeEvent;