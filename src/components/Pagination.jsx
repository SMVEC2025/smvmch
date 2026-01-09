import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Pagination = () => {
    return (
        <>
            <div className="col-md-12">
                <div className="custom-pagination">
                    <ul>
                        <li className="active"><a href="#">1</a></li>
                        <li><Link to="#">2</Link></li>
                        <li><Link to="#">3</Link></li>
                        <li><Link to="#"><i className="fa fa-angle-double-right" aria-hidden="true"></i></Link></li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Pagination;