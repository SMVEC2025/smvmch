import React from 'react';
import CountUpData from '../jsonData/CountUpData.json'
import SingleCounter from './SingleCounter';

const CountUp = () => {
    return (
        <>
            <section className="count-up-sec">
                <div className="count-up-sec-overlay"></div>
                <div className="container">
                    <div className="row">
                        {CountUpData.map(counter =>
                            <SingleCounter counter={counter} key={counter.id} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CountUp;