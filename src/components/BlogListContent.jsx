import React from 'react';
import BlogPostData from '../jsonData/BlogPostData.json'
import SingleBlogListContent from './SingleBlogListContent';
import Pagination from './Pagination';
import Widgets from './Widgets';

const BlogListContent = () => {
    return (
        <>
            <section className="blog-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="row">
                                {BlogPostData.slice(0, 4).map(blogList =>
                                    <SingleBlogListContent blogList={blogList} key={blogList.id} />
                                )}
                                <Pagination />
                            </div>
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

export default BlogListContent;