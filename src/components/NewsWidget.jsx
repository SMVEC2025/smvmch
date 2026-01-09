import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NewsWidget = () => {
    return (
        <>
            <div className="widget-two">
                <h1>Recent News</h1>
                <div className="all_r_pst">
                    <div className="media">
                        <div className="relative-post d-flex">
                            <div className="relative-post-thumb">
                                <img className='img-full' src="/img/research-details/1.jpg" alt="" />
                            </div>
                            <div className="media-body">
                                <div className="single_r_dec">
                                    <h3><Link to="#">Most Popular Subject in the world</Link></h3>
                                    <ul>
                                        <li><Link to="#">by admin</Link></li>
                                        <li>25 may 2023</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="media">
                        <div className="relative-post d-flex">
                            <div className="relative-post-thumb overflow-hidden">
                                <img className='img-full' src="/img/research-details/2.jpg" alt="" />
                            </div>
                            <div className="media-body overflow-hidden">
                                <div className="single_r_dec">
                                    <h3><Link to="#">Mel in cibo doctus appellantur modus.</Link></h3>
                                    <ul>
                                        <li><Link to="#">by admin</Link></li>
                                        <li>25 june 2023</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="media">
                        <div className="relative-post d-flex">
                            <div className="relative-post-thumb ">
                                <img className='img-full' src="/img/research-details/3.jpg" alt="" />
                            </div>
                            <div className="media-body overflow-hidden">
                                <div className="single_r_dec">
                                    <h3><Link to="#">Est ea quas aliquip sanctus Usu liber.</Link></h3>
                                    <ul>
                                        <li><Link to="#">by admin</Link></li>
                                        <li>25 feb 2023</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NewsWidget;