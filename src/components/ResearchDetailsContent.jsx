import React from 'react';
import Widgets from './Widgets';
import { HashLink as Link } from 'react-router-hash-link';

const ResearchDetailsContent = () => {
    return (
        <>
            <section className="blog-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="media">
                                <div className="single-post">
                                    <div className="single-post-thumb">
                                        <img src="/img/research-details/rsd1.jpg" alt="researchDetails" />
                                    </div>
                                    <div className="single-post-text">
                                        <h2><Link to="#">Ne idque utamur sea, et mei dolor aperiri. Novum mucius duo ut, legere omittam an sea. Quo fugit petentium cu. </Link></h2>
                                        <p>Lorem ipsum dolor sit amet, ad vix diceret necessitatibus, tempor honestatis nam id. Ne propriae reformidans eum, libris tractatos vituperatoribus his ne. Dolor eruditi usu eu, labore diceret at qui, ei harum vidisse has. Dicant maluisset reprehendunt ad usu. Quo labitur convenire in, ex pri consul praesent abhorreant. Vel vidisse definitiones id, per aliquid maiorum democritum cu.Lorem ipsum dolor sit amet, ad vix diceret necessitatibus, tempor honestatis nam id. Ne propriae reformidans eum, libris tractatos vituperatoribus his ne. Dolor eruditi usu eu, labore diceret at qui, ei harum vidisse has. Dicant maluisset reprehendunt ad usu. Quo labitur convenire in, ex pri consul praesent abhorreant. Vel vidisse definitiones id, per aliquid maiorum democritum cu.</p>
                                        <p>Ne idque utamur sea, et mei dolor aperiri. Novum mucius duo ut, legere omittam an sea. Quo fugit petentium cu. Ut usu ornatus appareat lobortis, his cu ignota officiis. Ei ius wisi animal, saepe contentiones ad nec. Probo discere ne nam, ad his habeo numquam quaestio.Ne idque utamur sea, et mei dolor aperiri. Novum mucius duo ut, legere omittam an sea. Quo fugit petentium cu. Ut usu ornatus appareat lobortis, his cu ignota officiis. Ei ius wisi animal, saepe contentiones ad nec. Probo discere ne nam, ad his habeo numquam quaestio.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative-research">
                                <h2 className="related-research-title">Related Research</h2>
                                <div className="row">
                                    <div className="col-md-6 col-12 inner">
                                        <div className="media">
                                            <div className="research-thumb">
                                                <Link to="#"><img src="/img/research-details/rs1.jpg" alt="research" /></Link>
                                                <div className="research-icon">
                                                    <div className="read-more-button">
                                                        <Link to="#">Learn More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="research-inner-text d-flex">
                                                <div className="media-left">
                                                    <div className="research_icon">
                                                        <img src="/img/icon/accounting.png" alt="icon" />
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <h2><Link to="#">Accounting & Finance</Link></h2>
                                                    <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-12 inner">
                                        <div className="media">
                                            <div className="research-thumb">
                                                <Link to="#"><img src="/img/research-details/rs2.jpg" alt="research" /></Link>
                                                <div className="research-icon">
                                                    <div className="read-more-button">
                                                        <Link to="#">Learn More</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="research-inner-text d-flex">
                                                <div className="media-left">
                                                    <div className="research_icon">
                                                        <img src="/img/icon/develop.png" alt="icon" />
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    <h2><Link to="#">Development Studies</Link></h2>
                                                    <p>Lorem ipsum dolor sit amet, ligula magna at etiam aliquip.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default ResearchDetailsContent;