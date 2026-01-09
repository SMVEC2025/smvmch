import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogListContent = ({ blogList }) => {
    let { imageList, listTitle, author, date, comment, textDetails } = blogList

    return (
        <>
            <div className="single-post d-md-flex d-sm-block">
                <div className="col-md-6 col-12">
                    <div className="single-post-thumb">
                        <img className='img-full' src={`/img/event/${imageList}`} alt="imageList" />
                        <div className="single-post-thumb-overlay">
                            <div className="post-meta">
                                <ul>
                                    <li><Link to="#"><i className="fa fa-user"></i>{author}</Link></li>
                                    <li><Link to="#"><i className="fa fa-calendar"></i>{date}</Link></li>
                                    <li><Link to="#"><i className="fa-regular fa-comment"></i>{comment}</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="single-post-text">
                        <h2><Link to="/blog-details#">{listTitle}</Link></h2>
                        <p>{textDetails}</p>
                        <Link to="/blog-details#" className="blog-read-more">Read More</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogListContent;