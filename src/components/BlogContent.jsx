import React from 'react';
import BlogPostData from '../jsonData/BlogPostData.json'
import SingleBlogContent from './SingleBlogContent';
import Widgets from './Widgets';
import Pagination from './Pagination';

const BlogContent = () => {
    return (
        <>
            <section className="blog-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            {BlogPostData.slice(0, 3).map(blog =>
                                <SingleBlogContent blog={blog} key={blog.id} />
                            )}
                            <Pagination />
                        </div>
                        <div className="col-lg-4 col-12 mt-5 mt-lg-0">
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

export default BlogContent;