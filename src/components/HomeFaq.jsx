import React from 'react';

const HomeFaq = () => {
    return (
        <>
            <div className="faq-style1-sec">
                <h1 className="faq-style1-title">Freequently Asked Question</h1>

                <div className="accordion" id="accordionExample">
                    {/* --- accordion 1 --- */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                What`s the mission of learapress ?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, mauris maecenas vel. Massa ultrices erat sit dolore. Vestibulum nunc. Nec tellus vulputate facilisis. Congue nunc enim platea, dolor lacinia arcu, vehicula nascetur purus penatibus ac pulvinar, sit ac faucibus. Vitae eros justo duis lacus iaculis eu</p>
                            </div>
                        </div>
                    </div>
                    {/* --- accordion 2 --- */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How can i get your service?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, mauris maecenas vel. Massa ultrices erat sit dolore. Vestibulum nunc. Nec tellus vulputate facilisis. Congue nunc enim platea, dolor lacinia arcu, vehicula nascetur purus penatibus ac pulvinar, sit ac faucibus. Vitae eros justo duis lacus iaculis eu</p>
                            </div>
                        </div>
                    </div>
                    {/* --- accordion 3 --- */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How much exprience about learapress?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, mauris maecenas vel. Massa ultrices erat sit dolore. Vestibulum nunc. Nec tellus vulputate facilisis. Congue nunc enim platea, dolor lacinia arcu, vehicula nascetur purus penatibus ac pulvinar, sit ac faucibus. Vitae eros justo duis lacus iaculis eu</p>
                            </div>
                        </div>
                    </div>
                    {/* --- accordion 4 --- */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How to use learapress?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, mauris maecenas vel. Massa ultrices erat sit dolore. Vestibulum nunc. Nec tellus vulputate facilisis. Congue nunc enim platea, dolor lacinia arcu, vehicula nascetur purus penatibus ac pulvinar, sit ac faucibus. Vitae eros justo duis lacus iaculis eu</p>
                            </div>
                        </div>
                    </div>
                    {/* --- accordion 5 --- */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How much offer for customer ?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Lorem ipsum dolor sit amet, mauris maecenas vel. Massa ultrices erat sit dolore. Vestibulum nunc. Nec tellus vulputate facilisis. Congue nunc enim platea, dolor lacinia arcu, vehicula nascetur purus penatibus ac pulvinar, sit ac faucibus. Vitae eros justo duis lacus iaculis eu</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeFaq;