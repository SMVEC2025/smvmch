import React from 'react';
import EventData from '../jsonData/EventData.json'
import SingleEvent from './SingleEvent';
import Pagination from './Pagination';

const AllEvents = () => {
    return (
        <>
            <section className="event-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        {EventData.map(event =>
                            <div className="col-xl-6 col-lg-12" key={event.id}>
                                <SingleEvent event={event} />
                            </div>
                        )}
                        <Pagination />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AllEvents;