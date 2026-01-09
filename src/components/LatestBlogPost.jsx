import React from 'react';
import BlogPostData from '../jsonData/BlogPostData.json';
import SingleBlogPost from './SingleBlogPost';
import Carousel from 'react-multi-carousel';


const LatestBlogPost = (props) => {
    const { blogStyle } = props;
    const { blogBg } = props;

    const CustomRightArrow = ({ onClick }) => {
        return <button className='commonArrow arrowRight' onClick={() => onClick()}><i className="fa-solid fa-chevron-right"></i></button>;
    };

    const CustomLeftArrow = ({ onClick }) => {
        return <button className='commonArrow arrowLeft' onClick={() => onClick()}><i className="fa-solid fa-chevron-left"></i></button>;

    };

    return (
        <>
            <section className={`${blogBg} blog-sec pt-100 pb-70`}>
                <div className="blog-sec-overlay overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="sec-title">
                                    <h1>our latest post</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="all-latest-news">
                                    <div className="latest-blog-carousel-wrap">
                                        <Carousel
                                            infinite={true}
                                            draggable={true}
                                            arrows={true}
                                            pauseOnHover={true}
                                            slidesToSlide={1}
                                            showDots={false}
                                            swipeable={true}
                                            autoPlay={false}
                                            autoPlaySpeed={3000}
                                            customRightArrow={<CustomRightArrow />}
                                            customLeftArrow={<CustomLeftArrow />}
                                            responsive={{
                                                laptop: {
                                                    breakpoint: {
                                                        max: 3000,
                                                        min: 992
                                                    },
                                                    items: 3,
                                                    partialVisibilityGutter: 80
                                                },
                                                tablet: {
                                                    breakpoint: {
                                                        max: 991,
                                                        min: 768
                                                    },
                                                    items: 2,
                                                    partialVisibilityGutter: 40
                                                },
                                                mobile: {
                                                    breakpoint: {
                                                        max: 767,
                                                        min: 1
                                                    },
                                                    items: 1,
                                                    partialVisibilityGutter: 40
                                                }
                                            }}>

                                            {BlogPostData.map(blog =>
                                                <SingleBlogPost blog={blog} key={blog.id} blogStyle={blogStyle} />
                                            )}

                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LatestBlogPost;