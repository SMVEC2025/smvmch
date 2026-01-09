import React from 'react';
import WhyChooseData from '../jsonData/WhyChooseData.json'
import SingleChooseV3 from './SingleChooseV3';
import { Fade } from 'react-reveal';

const WhyChooseUsV3 = () => {
    return (
        <>
            <section className="why-choose-us-sec home-v5 pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <Fade top delay={400}>
                                    <h1>Welcome Our learapress</h1>
                                </Fade>
                                <Fade top delay={800} >
                                    <p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {WhyChooseData.slice(0, 3).map(choose =>
                            <div className="col-lg-4 col-12" key={choose.id}>
                                <SingleChooseV3 choose={choose} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUsV3;