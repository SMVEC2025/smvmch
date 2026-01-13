import React from 'react';
import '../assets/css/our-institution.css';

const OurInstitution = () => {
    const sections = [
        {
            title: 'Medical and Surgical Broad Specialties',
            items: [
                'Anaesthesiology',
                'Dermatology, Venereology and Leprosy',
                'General Medicine',
                'Paediatrics',
                'Pain and palliative care',
                'Psychiatry',
                'Radio-diagnosis',
                'Respiratory Medicine',
                'Emergency medicine',
                'General Surgery',
                'Obstetrics and Gynaecology',
                'Ophthalmology',
                'Orthopaedics',
                'Dentistry',
                'ENT'
            ]
        },
        {
            title: 'Super Specialties',
            items: [
                'Cardiology',
                'Cardiothoracic surgery',
                'Nephrology',
                'Urology',
                'Neurology',
                'Neurosurgery',
                'Paediatric surgery',
                'Plastic surgery',
                'Oncology',
                'Surgical oncology',
                'Medical and surgical gastroenterology'
            ]
        },
        {
            title: 'Diagnostic Services',
            items: [
                '2D Echo',
                'Audiometry',
                'Bronchoscopy',
                'CT scan',
                'Color doppler',
                'Endoscopy',
                'ECG/EEG/EMG',
                'Holter monitoring',
                'MRI',
                'Mammography',
                'Pulmonary function test',
                'Spirometry',
                'Tread mill testing',
                'Ultrasound',
                'Urodynamic studies',
                'X ray',
                'Laboratory services - Biochemistry, Microbiology and Pathology'
            ]
        },
        {
            title: '24 x 7 Facilities',
            items: [
                'Accident and emergency unit',
                'Ambulance',
                'Laboratory service',
                'Radiology service',
                'Intensive care unit (ICU)',
                'Medical-ICU, Surgical-ICU, Paediatric-ICU, Neonatal-ICU and Respiratory-ICU',
                'Pharmacy'
            ]
        }
    ];

    const govtSchemes = [
        'Pradhan Mantri Jan Arogya Yojana PMJAY',
        'Tamilnadu Chief Minister’s Comprehensive Health Insurance Scheme',
        'Employee’s State Insurance Health Scheme (ESI)',
        'Ex-Servicemen Contributory Health Scheme (ECHS)',
        'BSNL',
        'MD India (Government Employees)',
        'MD India Pensioner'
    ];

    const tpaTieUps = [
        'Star Health Insurance',
        'Vidal Health TPA',
        'Medi Assist TPA',
        'MED Save TPA'
    ];

    const insuranceTieUps = [
        'Oriental Insurance Company',
        'National Insurance Company',
        'New India Assurance Company',
        'TTK Health Insurance',
        'HDFC ERGO Insurance',
        'IFFCO TOKIO Insurance',
        'Max Bupa Insurance',
        'Reliance Insurance Network'
    ];

    return (
        <section className="smv-inst">
            <div className="smv-inst__header">
                <h2>Our Institution</h2>
                <p>Comprehensive care supported by broad specialties, diagnostics, and round-the-clock services.</p>
            </div>

            <div className="smv-inst__grid">
                {sections.map((section) => (
                    <div className="smv-inst__card" key={section.title}>
                        <h3>{section.title}</h3>
                        <ul className="smv-inst__list">
                            {section.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="smv-inst__cashless">
                <div className="smv-inst__cashless-header">
                    <h3>Insurance and third-party tie-ups</h3>
                    <p>
                        Cashless services are offered to patients in Sri Manakula Vinayagar Medical College and Hospital.
                        We are empaneled with government health insurance schemes, private health insurance companies,
                        and corporate tie ups.
                    </p>
                </div>
                <div className="smv-inst__cashless-grid">
                    <div className="smv-inst__cashless-card">
                        <div className="smv-inst__cashless-icon">
                            <i className="fa-solid fa-landmark"></i>
                        </div>
                        <h4>Empanelled government health schemes</h4>
                        <ul className="smv-inst__list smv-inst__list--compact">
                            {govtSchemes.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="smv-inst__cashless-card">
                        <div className="smv-inst__cashless-icon">
                            <i className="fa-solid fa-handshake"></i>
                        </div>
                        <h4>Third-Party Administrator (TPA) tie up list</h4>
                        <ul className="smv-inst__list smv-inst__list--compact">
                            {tpaTieUps.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="smv-inst__cashless-card">
                        <div className="smv-inst__cashless-icon">
                            <i className="fa-solid fa-shield-heart"></i>
                        </div>
                        <h4>Insurance Companies Tie-Up</h4>
                        <ul className="smv-inst__list smv-inst__list--compact">
                            {insuranceTieUps.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurInstitution;
