import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const SubjectWidget = () => {
    return (
        <>
            <div className="widget-archive">
                <h1>Subject categories</h1>
                <ul>
                    <li><Link to="#">Accounting & Finance</Link></li>
                    <li><Link to="#">Development Studies</Link></li>
                    <li><Link to="#">Economics & Econometrics</Link></li>
                    <li><Link to="#">Education & Training</Link></li>
                    <li><Link to="#">Library Management</Link></li>
                    <li><Link to="#">Engineering & Technology</Link></li>
                    <li><Link to="#">Accounting & Finance</Link></li>
                </ul>
            </div>
        </>
    );
};

export default SubjectWidget;