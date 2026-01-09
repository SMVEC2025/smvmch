import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const ErrorPageContent = () => {
    return (
        <>
            <section className="error-page-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 offset-md-3">
                            <div className="error-page-content">
                                <h1>404 Not Found</h1>
                                <h2>Oops! That page Can't be found</h2>
                                <p>Sorry, but the page you are looking for does not existing or  had its name changed, or is temporarily unavailable.</p>
                                <Link to="/#"> Back To Home </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPageContent;