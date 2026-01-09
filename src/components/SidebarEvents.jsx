import React from 'react';
import EventData from '../jsonData/EventData.json'
import SingleEvent from './SingleEvent';
import Widgets from './Widgets';
import Pagination from './Pagination';

const SidebarEvents = () => {
    return (
        <>
            <section className="event-v2-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="row">
                                {EventData.map(event =>
                                    <div className="col-md-6" key={event.id}>
                                        <SingleEvent event={event} />
                                    </div>
                                )}
                                <Pagination />
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="sidebar">
                                <Widgets />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SidebarEvents;