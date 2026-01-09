import React from 'react';
import EventData from '../jsonData/EventData.json'
import SingleEvent from './SingleEvent';
import Pagination from './Pagination';

const EventColumnContent = () => {
    return (
        <>
            <section className="event-v2-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                {EventData.map(event =>
                                    <div className="col-lg-4 col-md-6 col-12" key={event.id}>
                                        <SingleEvent event={event} />
                                    </div>
                                )}
                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EventColumnContent;