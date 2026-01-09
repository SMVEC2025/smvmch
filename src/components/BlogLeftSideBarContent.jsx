import React from 'react';
import Widgets from './Widgets';
import BlogPostData from '../jsonData/BlogPostData.json'
import SingleBlogContent from './SingleBlogContent';
import Pagination from './Pagination';

const BlogLeftSideBarContent = () => {
    return (
        <>
            <section className="blog-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="sidebar">
                                <Widgets />
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            {BlogPostData.slice(0, 3).map(blog =>
                                <SingleBlogContent blog={blog} key={blog.id} />
                            )}
                            <Pagination />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogLeftSideBarContent;