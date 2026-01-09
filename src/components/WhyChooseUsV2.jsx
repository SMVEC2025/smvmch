import React from 'react';
import WhyChooseData from '../jsonData/WhyChooseData.json'
import SingleChooseH2 from './SingleChooseH2';

const WhyChooseUsV2 = () => {
    return (
        <>
            <section className="why-choose-us-sec home-v4 pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <h1>Welcome Our learapress</h1>
                                <p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {WhyChooseData.slice(0, 3).map(choose =>
                            <div className="col-lg-4 col-12" key={choose.id}>
                                <SingleChooseH2 choose={choose} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUsV2;