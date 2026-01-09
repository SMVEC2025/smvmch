import React from 'react';
import BlogForm from './BlogForm';
import Widgets from './Widgets';
import BlogComment from './BlogComment';
import { HashLink as Link } from 'react-router-hash-link';

const BlogDetailsContent = () => {
    return (
        <>
            <section className="blog-sec pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="media">
                                <div className="single-post">
                                    <div className="single-post-thumb">
                                        <img className='img-full' src="/img/blog/blog_1.jpg" alt="blogPost" />
                                        <div className="single-post-thumb-overlay">
                                            <div className="post-meta">
                                                <ul>
                                                    <li><Link to="#"><i className="fa fa-user"></i>Admin</Link></li>
                                                    <li><Link to="#"><i className="fa fa-calendar"></i>1 June 2023</Link></li>
                                                    <li><Link to="#"><i className="fa-regular fa-comment"></i>32</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single-post-text">
                                        <h2><Link to="/blog-details#">Augue docendi signiferumque an cum. Te meliore definiebas.</Link></h2>
                                        <p>Lorem ipsum dolor sit amet, suscipit suscipit pellentesque ultricies fermentum, pellentesque ante tellus id non nunc, ut dui lacus iaculis condimentum, luctus vel porta arcu massa dignissim elit. Sit pellentesque imperdiet et auctor. Massa phasellus pharetra at erat donec, tincidunt facilisi elit vehicula, fames enim eget lacus sit eget nullam, amet tempor imperdiet nostrud pretium penatibus. Arcu nibh in, ac vulputate torquent sed dolor, varius facilisis. Rutrum atque, tempor scelerisque cum, scelerisque ut, rhoncus lobortis nibh.</p>
                                        <div className="code-text">
                                            <p>Te fugit interesset sit. Ne nisl aeque sit. Vis no mediocrem constituto. No legimus referrentur mea, quo probo consetetur interpretaris te. Ex quem concludaturque qui, id posidonium constituam sit.</p>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, similique inciderint in duo. Purto affert duo an, enim elit munere id has. Pri tota augue aliquam ut, solet referrentur at pri, per at legere phaedrum. His modus vulputate definiebas in.</p>
                                    </div>
                                    <BlogComment />
                                    <BlogForm />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12 ">
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

export default BlogDetailsContent;