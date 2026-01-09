import React from 'react';
import CountUp from 'react-countup';
import { Fade } from 'react-reveal';

const SingleCounter = ({ counter }) => {
    let { image, start, end, title, animationDelay } = counter

    return (
        <>
            <Fade right delay={animationDelay} >
                <div className="col-lg-3 col-sm-6 inner">
                    <div className="count-up-inner">
                        <div className="count-up-icon">
                            <img src={`/img/icon/${image}`} alt="icon" />
                        </div>
                        <div className="countup-text">
                            <h2 className="counter">
                                <CountUp start={start} end={end} />
                            </h2>
                            <h4>{title}</h4>
                        </div>
                    </div>
                </div>
            </Fade>
        </>
    );
};

export default SingleCounter;