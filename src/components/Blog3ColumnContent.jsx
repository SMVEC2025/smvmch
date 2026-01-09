import React from 'react';
import BlogPostData from '../jsonData/BlogPostData.json';
import SingleBlogContent from './SingleBlogContent';
import Pagination from './Pagination';

const Blog3ColumnContent = () => {
    return (
        <>
            <section className="blog-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        {BlogPostData.map(blog =>
                            <div className="col-lg-4 col-md-6 col-12" key={blog.id}>
                                <SingleBlogContent blog={blog} />
                            </div>
                        )}
                        <Pagination />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog3ColumnContent;