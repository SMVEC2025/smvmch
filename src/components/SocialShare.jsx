import React from 'react';

const SocialShare = () => {
    return (
        <>
            <ul>
                <li><a href="https://www.facebook.com/" target='_blank' className='facebook'><i className="fa-brands fa-facebook-f"></i></a></li>
                <li><a href="https://www.twitter.com/" target='_blank' className='twitter'><i className="fa-brands fa-twitter"></i></a></li>
                <li><a href="https://www.linkedin.com/" target='_blank' className='linkedin'><i className="fa-brands fa-linkedin"></i></a></li>
                <li><a href="https://www.skype.com/" target='_blank' className='skype'><i className="fa-brands fa-skype"></i></a></li>
            </ul>
        </>
    );
};

export default SocialShare;