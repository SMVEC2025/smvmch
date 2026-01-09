import React from 'react';
import OurFaqInfo from '../jsonData/OurFaqInfo.json'
import SingleFaqInfo from './SingleFaqInfo';

const FaqInfo = () => {
    return (
        <>
            <div className="faq-sec">
                {OurFaqInfo.map(faqInfo =>
                    <SingleFaqInfo faqInfo={faqInfo} key={faqInfo.id} />
                )}
            </div>
        </>
    );
};

export default FaqInfo;