import React from 'react';
import OverViewImg from '/img/banner/slide1.jpg'
import { HashLink as Link } from 'react-router-hash-link';

const CourseOverView = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="course-details">
                        <img src={OverViewImg} alt="OverViewImg" />
                        <h2><Link to="#">Duo nibh malis dolorem cu. Te qui tantas quidam philosophia, ut erroribus definitionem mea. Sed an nominati consequuntu</Link></h2>
                        <p>Lorem ipsum dolor sit amet, ut vel quodsi feugait praesent, ex qui lucilius voluptatum referrentur. Velit harum te ius, atomorum sapientem ea sit, id saepe utinam pri. Et sit singulis intellegam. His quas tibique an, at nihil doming nec, partem tibique adipisci sit an. Putent nostrud accumsan vim at. No eos mollis ornatus vocibus, id eos persius liberavisse, ne cum ferri posse fuisset.</p>
                        <p>Dicam antiopam reformidans id has. Cum ei elit nostrud, at per erant conceptam. Nam te impedit meliore mnesarchum. Eu posse quodsi oportere vis. Eam recusabo constituto ex, et sea discere qualisque scribentur, libris feugiat vis at.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseOverView;