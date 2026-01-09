import React from 'react';
import Pagination from './Pagination';
import ResearchData from '../jsonData/ResearchData.json';
import SingleResearch from './SingleResearch';

const Researches = () => {
	return (
		<>
			<section className="research-sec pt-100 pb-100">
				<div className="container">
					<div className="row">
						{ResearchData.map(research =>
							<div className="col-12 col-md-6 col-xl-4" key={research.id}>
								<SingleResearch research={research} />
							</div>
						)}
						<Pagination />
					</div>
				</div>
			</section>
		</>
	);
};

export default Researches;