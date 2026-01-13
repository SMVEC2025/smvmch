import React, { useEffect, useMemo, useRef, useState } from 'react';
import { GlobalWorkerOptions, getDocument } from 'pdfjs-dist/legacy/build/pdf';
import workerSrc from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url';
import Header from '../components/Header';
import BreadCrumb from '../components/BreadCrumb';
import '../assets/css/academic-calendar.css';

GlobalWorkerOptions.workerSrc = workerSrc;

const PdfPreview = ({ file }) => {
    const canvasWrapRef = useRef(null);
    const [status, setStatus] = useState('loading');

    useEffect(() => {
        let cancelled = false;
        const container = canvasWrapRef.current;

        if (!container) {
            return () => {};
        }

        container.innerHTML = '';
        setStatus('loading');

        const loadingTask = getDocument(file);

        (async () => {
            try {
                const pdf = await loadingTask.promise;
                if (cancelled) {
                    return;
                }

                for (let pageNum = 1; pageNum <= pdf.numPages; pageNum += 1) {
                    const page = await pdf.getPage(pageNum);
                    const viewport = page.getViewport({ scale: 1.2 });
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');

                    canvas.width = viewport.width;
                    canvas.height = viewport.height;
                    canvas.className = 'smv-acal__canvas';

                    if (context) {
                        await page.render({ canvasContext: context, viewport }).promise;
                        container.appendChild(canvas);
                    }
                }

                if (!cancelled) {
                    setStatus('ready');
                }
            } catch (error) {
                if (!cancelled) {
                    setStatus('error');
                }
            }
        })();

        return () => {
            cancelled = true;
            loadingTask.destroy();
        };
    }, [file]);

    return (
        <div className="smv-acal__doc">
            <div className="smv-acal__canvas-wrap" ref={canvasWrapRef}></div>
            {status === 'loading' && <div className="smv-acal__loading">Loading preview...</div>}
            {status === 'error' && <div className="smv-acal__loading">Unable to load preview.</div>}
        </div>
    );
};

const calendarData = [
    {
        label: '2023 - 2024',
        previewFile: '/pdf/academic_calender/2023_24.pdf'
    },
    {
        label: '2022 - 2023',
        previewFile: '/pdf/academic_calender/2022_23.pdf'
    },
    {
        label: '2021 - 2022',
        previewFile: '/pdf/academic_calender/2021_22.pdf'
    },
    {
        label: '2020 - 2021',
        previewFile: '/pdf/academic_calender/2020_21.pdf'
    },
    {
        label: '2019 - 2020',
        previewFile: '/pdf/academic_calender/2019-20.pdf'
    },
    {
        label: '2018 - 2019',
        previewFile: '/pdf/academic_calender/2018-19.pdf'
    },
    {
        label: '2017 - 2018',
        previewFile: '/pdf/academic_calender/2017_18.pdf'
    }
];

const AcademicCalendar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeFile = useMemo(() => calendarData[activeIndex].previewFile, [activeIndex]);

    return (
        <>
            <Header />
            <BreadCrumb pageTitle="Academic Calendar" />
            <section className="smv-acal">
                <div className="smv-acal__container">
                    <div className="smv-acal__sidebar">
                        <h2 className="smv-acal__title">Academic Calendar</h2>
                        <div className="smv-acal__list">
                            {calendarData.map((item, index) => (
                                <button
                                    className={`smv-acal__item ${activeIndex === index ? 'is-active' : ''}`}
                                    type="button"
                                    key={item.label}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <span className="smv-acal__icon">
                                        <i className="fa-solid fa-calendar-days"></i>
                                    </span>
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="smv-acal__preview">
                        <PdfPreview file={activeFile} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AcademicCalendar;
