import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const TagWidgets = () => {
    return (
        <>
            <div className="widget-tag">
                <h1>Tag List</h1>
                <ul>
                    <li><Link to="#">Master</Link></li>
                    <li><Link to="#">Bachelor</Link></li>
                    <li><Link to="#">Associate</Link></li>
                    <li><Link to="#">Non-Degree</Link></li>
                    <li><Link to="#">High School Diploma</Link></li>
                    <li><Link to="#">Mechanical</Link></li>
                    <li><Link to="#">Technical</Link></li>
                </ul>
            </div>
        </>
    );
};

export default TagWidgets;