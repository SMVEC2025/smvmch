import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogContent = ({ blog }) => {
    let { imageBig, title, textDetails, author, date, comment } = blog;

    return (
        <>
            <div className="single-post">
                <div className="single-post-thumb">
                    <img className='img-full' src={`/img/blog/${imageBig}`} alt="blogImage" />
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
                <div className="single-post-text">
                    <h2><Link to="/blog-details#">{title}</Link></h2>
                    <p>{textDetails}</p>
                    <Link to="/blog-details#" className="blog-read-more">Read More</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogContent;