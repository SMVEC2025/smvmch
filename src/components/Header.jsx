import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/header-nav.css';

const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openKeys, setOpenKeys] = useState(() => new Set());

    const menu = useMemo(() => {
        const departments = [
            'Anatomy',
            'Biochemistry',
            'Community Medicine',
            'Forensic Medicine',
            'Microbiology',
            'Pathology',
            'Physiology',
            'Pharmacology'
        ];

        const committees = [
            'Anti Ragging',
            'Cultural',
            'Grievance Redressal',
            'Internal Complaints',
            'Sports',
            'Career Guidance & Placement'
        ];

        const slugify = (value) => value.toLowerCase().replace(/&/g, 'and').replace(/\s+/g, '-');

        return [
            { title: 'Home', path: '/' },
            { title: 'About Us', path: '/about' },
            {
                title: 'Admission',
                path: '/admission',
                children: [
                    { title: 'MBBS Admission', path: '/admission/mbbs' },
                    { title: 'MD / MS Admission', path: '/admission/md-ms' },
                    { title: 'Emergency Medicine Admission', path: '/admission/emergency-medicine' },
                    { title: 'NEET PG', path: '/admission/neet-pg' },
                    { title: 'Download Brochure', path: '/admission/brochure' },
                    { title: 'Highlights', path: '/admission/highlights' }
                ]
            },
            {
                title: 'Academics',
                path: '/academics',
                children: [
                    { title: 'Academic Calendar', path: '/academics/calendar' },
                    { title: 'International MOU', path: '/academics/mou' },
                    { title: 'Programme Specific Outcome', path: '/academics/pso' },
                    { title: 'Certificate Courses', path: '/academics/certificate-courses' },
                    { title: 'Value Added Courses', path: '/academics/value-added-courses' },
                    {
                        title: 'Gold Medalists',
                        path: '/academics/gold-medalists',
                        children: [
                            { title: 'MBBS', path: '/academics/gold-medalists/mbbs' },
                            { title: 'Post Graduates', path: '/academics/gold-medalists/pg' }
                        ]
                    },
                    { title: 'eLearning Resources', path: '/academics/elearning' }
                ]
            },
            {
                title: 'Student Corner',
                path: '/students',
                children: [
                    {
                        title: 'Campus Life',
                        path: '/students/campus-life',
                        children: [
                            { title: 'Gallery', path: '/students/campus-life/gallery' },
                            { title: '360¶ø Photos', path: '/students/campus-life/360-photos' },
                            { title: 'Capacity Enhancement Facilities', path: '/students/campus-life/facilities' }
                        ]
                    },
                    { title: 'Capability Enhancement Programme', path: '/students/capability-enhancement' },
                    { title: 'PG Entrance Coaching', path: '/students/pg-coaching' },
                    {
                        title: 'Alumni',
                        path: '/students/alumni',
                        children: [
                            { title: 'About Alumni', path: '/students/alumni/about' },
                            { title: 'Constitution & Memorandum', path: '/students/alumni/constitution' },
                            { title: 'Office Bearers', path: '/students/alumni/office-bearers' },
                            { title: 'Registration', path: '/students/alumni/register' },
                            { title: 'Activities', path: '/students/alumni/activities' },
                            { title: 'Contribution', path: '/students/alumni/contribution' },
                            { title: 'Contact', path: '/students/alumni/contact' },
                            { title: 'Feedback', path: '/students/alumni/feedback' },
                            { title: 'Testimonials', path: '/students/alumni/testimonials' }
                        ]
                    },
                    { title: 'Online Fee Payment', path: '/students/fee-payment' },
                    { title: 'Downloads', path: '/students/downloads' }
                ]
            },
            {
                title: 'College',
                path: '/college',
                children: [
                    {
                        title: 'Departments',
                        path: '/college/departments',
                        children: departments.map((dept) => ({
                            title: dept,
                            path: `/college/departments/${slugify(dept)}`
                        }))
                    },
                    {
                        title: 'Committees',
                        path: '/college/committees',
                        children: committees.map((committee) => ({
                            title: `${committee} Committee`,
                            path: `/college/committees/${slugify(committee)}`
                        }))
                    },
                    {
                        title: 'Library',
                        path: '/college/library',
                        children: [
                            { title: 'Central Library', path: '/college/library/central' },
                            { title: 'Publications', path: '/college/library/publications' },
                            { title: 'Library Committee', path: '/college/library/committee' },
                            { title: 'J-Gate', path: '/college/library/j-gate' },
                            { title: 'Newsletter', path: '/college/library/newsletter' }
                        ]
                    },
                    {
                        title: 'Infrastructure',
                        path: '/college/infrastructure',
                        children: [
                            { title: 'Lecture Halls & Auditorium', path: '/college/infrastructure/lecture-halls' },
                            { title: 'Hostels & Dining', path: '/college/infrastructure/hostels' },
                            { title: 'Transport', path: '/college/infrastructure/transport' },
                            { title: 'Sports', path: '/college/infrastructure/sports' }
                        ]
                    }
                ]
            },
            {
                title: 'Hospital',
                path: '/hospital',
                children: [
                    { title: 'Departments', path: '/hospital/departments' },
                    { title: 'Diagnostic Services', path: '/hospital/diagnostics' },
                    { title: 'Therapeutic Services', path: '/hospital/therapeutic' },
                    { title: 'Hospital Facilities', path: '/hospital/facilities' },
                    { title: 'Hospital Committees', path: '/hospital/committees' }
                ]
            },
            { title: 'Research', path: '/research' },
            { title: 'IQAC', path: '/iqac' },
            { title: 'Affiliations & Accreditations', path: '/accreditations' },
            { title: 'NIRF', path: '/nirf' },
            { title: 'Login', path: '/login' }
        ];
    }, []);

    const descriptions = {
        'About Us': 'Discover the college's legacy, leadership, and commitment to healthcare education.',
        Admission: 'Explore eligibility, entrance pathways, and highlights for admissions.',
        Academics: 'Academic resources, calendars, outcomes, and learning pathways.',
        'Student Corner': 'Campus life, alumni, activities, and student support resources.',
        College: 'Departments, committees, library, and infrastructure details.',
        Hospital: 'Clinical services, diagnostics, and hospital facilities.'
    };

    const toggleKey = (key) => {
        setOpenKeys((prev) => {
            const next = new Set(prev);
            if (next.has(key)) {
                next.delete(key);
            } else {
                next.add(key);
            }
            return next;
        });
    };

    return (
        <header className="smv-nav">
            <div className="smv-nav__bar">
                <Link className="smv-nav__brand" to="/">
                    <img className="smv-nav__logo" src="/img/logo/logo.png" alt="SMVMCH" />
                </Link>
                <button
                    className="smv-nav__toggle"
                    type="button"
                    onClick={() => setMobileOpen((prev) => !prev)}
                    aria-expanded={mobileOpen}
                >
                    <span className="smv-nav__toggle-line"></span>
                    <span className="smv-nav__toggle-line"></span>
                    <span className="smv-nav__toggle-line"></span>
                </button>
            </div>
            <nav className={`smv-nav__menu ${mobileOpen ? 'is-open' : ''}`}>
                <ul className="smv-nav__list">
                    {menu.map((item, index) => {
                        const key = `${index}`;
                        const hasChildren = Array.isArray(item.children);
                        const isOpen = openKeys.has(key);

                        return (
                            <li
                                className={`smv-nav__item ${hasChildren ? 'is-parent' : ''} ${isOpen ? 'is-open' : ''}`}
                                key={item.title}
                            >
                                <div className="smv-nav__link-row">
                                    <Link className="smv-nav__link" to={item.path}>
                                        {item.title}
                                    </Link>
                                    {hasChildren && (
                                        <button
                                            className="smv-nav__caret"
                                            type="button"
                                            aria-expanded={isOpen}
                                            onClick={() => toggleKey(key)}
                                        >
                                            <i className="fa-solid fa-chevron-down"></i>
                                        </button>
                                    )}
                                </div>
                                {hasChildren && (
                                    <div className="smv-nav__dropdown">
                                        <div className="smv-nav__mega">
                                            <div className="smv-nav__mega-left">
                                                <h3 className="smv-nav__mega-title">{item.title}</h3>
                                                <p className="smv-nav__mega-desc">
                                                    {descriptions[item.title] || 'Explore more about this section.'}
                                                </p>
                                                <Link className="smv-nav__mega-cta" to={item.path}>
                                                    Learn more about {item.title} <i className="fa-solid fa-arrow-right"></i>
                                                </Link>
                                            </div>
                                            <div className="smv-nav__mega-right">
                                                {item.children.map((child, childIndex) => {
                                                    const childKey = `${index}-${childIndex}`;
                                                    const hasGrandChildren = Array.isArray(child.children);
                                                    const childOpen = openKeys.has(childKey);

                                                    return (
                                                        <div className="smv-nav__mega-group" key={child.title}>
                                                            <div className="smv-nav__mega-group-row">
                                                                <Link className="smv-nav__mega-heading" to={child.path}>
                                                                    {child.title}
                                                                </Link>
                                                                {hasGrandChildren && (
                                                                    <button
                                                                        className="smv-nav__mega-caret"
                                                                        type="button"
                                                                        aria-expanded={childOpen}
                                                                        onClick={() => toggleKey(childKey)}
                                                                    >
                                                                        <i className="fa-solid fa-chevron-down"></i>
                                                                    </button>
                                                                )}
                                                            </div>
                                                            {hasGrandChildren && (
                                                                <div className={`smv-nav__mega-sublinks ${childOpen ? 'is-open' : ''}`}>
                                                                    {child.children.map((grand) => (
                                                                        <Link className="smv-nav__mega-link" to={grand.path} key={grand.title}>
                                                                            {grand.title}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </header>
    );
};

export default Header;






