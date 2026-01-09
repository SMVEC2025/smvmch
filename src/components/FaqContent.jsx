import React from 'react';
import OurFaqData from '../jsonData/OurFaqData.json'
import SingleFaq from './SingleFaq';
import FaqInfo from './FaqInfo';

const FaqContent = () => {
    return (
        <>
            <section className="faq-page pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-12">
                            <div className="faq-sec">
                                <div className="accordion" id="accordionExample">
                                    {OurFaqData.map(faq =>
                                        <SingleFaq faq={faq} key={faq.id} />
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-12">
                            <FaqInfo />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FaqContent;