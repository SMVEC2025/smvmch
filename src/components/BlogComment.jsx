import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const BlogComment = () => {
    return (
        <>
            <div className="commenter-sec">
                <h2>02 comment on this post</h2>
                <div className="media d-sm-flex">
                    <img src="/img/comment/commenter_1.jpg" alt="person" />
                    <div className="media-body">
                        <h3 className="comment-author">Alex</h3>
                        <span className="comment-author-designation">marketing officer</span>
                        <span className="comment-time">2 hours ago</span>
                        <p>Lorem ipsum dolor sit amet, suscipit suscipit pellentesque ultricies fermentum, pellentesque ante tellus id non nunc, ut dui lacus iaculis condimentum, luctus vel porta arcu massa dignissim elit.</p>
                        <span className="replay-button"><Link to="#">reply</Link></span>
                        <div className="media d-sm-flex mt-5">
                            <img src="/img/comment/commenter_2.jpg" alt="person" />
                            <div className="media-body">
                                <h3 className="comment-author">Christopher</h3>
                                <span className="comment-author-designation">CO-Founder</span>
                                <span className="comment-time">2 hours ago</span>
                                <p>Lorem ipsum dolor sit amet, suscipit suscipit pellentesque ultricies fermentum, pellentesque ante tellus id non nunc, ut dui lacus iaculis condimentum, luctus vel porta arcu massa dignissim elit.</p>
                                <span className="replay-button"><Link to="#">reply</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogComment;