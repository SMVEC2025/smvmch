import React from 'react';
import GalleryContent from './GalleryContent';

const Gallery = () => {
    return (
        <>
            <section className="gallery-sec pt-100 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="sec-title">
                                <h1>Our Student Gallery</h1>
                                <p>Lorem ipsum dolor sit amet, lorem nibh lectus urna arcu, lorem erat semper, auctor suspendisse quisque molestie ut. Elit massa dui, leo enim magna. Cursus maecenas cubilia, ac nonummy, egestas mauris .</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="gallery-area">
                            <GalleryContent />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gallery;