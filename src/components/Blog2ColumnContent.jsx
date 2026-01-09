import React from 'react';
import BlogPostData from '../jsonData/BlogPostData.json';
import SingleBlogContent from './SingleBlogContent';
import Pagination from './Pagination';

const Blog2ColumnContent = () => {
    return (
        <>
            <section className="blog-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        {BlogPostData.slice(0, 4).map(blog =>
                            <div className="col-md-6" key={blog.id}>
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

export default Blog2ColumnContent;