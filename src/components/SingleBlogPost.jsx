import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SingleBlogPost = ({ blog, blogStyle }) => {
    let { image, text, title, comment, date, author } = blog;

    return (
        <>
            <div className={`${blogStyle} single-post`}>
                <div className="single-post-thumb">
                    <img className='img-full' src={`/img/blog/${image}`} alt="blogPost" />
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
                <div className={`${blogStyle} single-post-text`}>
                    <h2><Link to="/blog-details#">{title}</Link></h2>
                    <p>{text}</p>
                    <Link to="/blog-details#" className="blog-read-more">Continue reading</Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlogPost;