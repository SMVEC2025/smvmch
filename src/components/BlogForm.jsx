import React from 'react';
import { toast } from 'react-toastify';

const BlogForm = () => {

    const handleComment = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Comment Post Successfully")
    }

    return (
        <>
            <div className="contact-field">
                <h3 className="comment-reply-title">Leave a comment</h3>
                <form onSubmit={handleComment} className="comment-form">
                    <p className="comment-notes"><span id="email-notes">Your email address will not be published.</span> Required fields are marked <span className="required">*</span></p>
                    <p className="comment-form">
                        <textarea placeholder="Write Your Comment*" id="comment" name="comment" cols="36" rows="8" aria-required="true" required></textarea>
                    </p>
                    <div className="row form-fields">
                        <p className="comment-author col-md-4"><input placeholder="Your name*" name="author" type="text" autoComplete='no' required /></p>
                        <p className="author-email col-md-4"><input placeholder="E-mail*" name="email" type="email" autoComplete='no' required /></p>
                        <p className="author-website col-md-4"><input placeholder="Phone Number*" name="phone" type="number" autoComplete='no' required /></p>
                    </div>
                    <p className="form-submit"><button className="submit" type="submit">Post Comment</button>
                    </p>
                </form>
            </div>
        </>
    );
};

export default BlogForm;