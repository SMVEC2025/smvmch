import React, { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '/img/logo/logo.png'
import MenuItems from './MenuItems';
import OffCanvasMenu from './OffCanvasMenu';

const MainMenu = (props) => {

	const { menuBg } = props;
	const [isSticky, setIsSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 100) {
				setIsSticky(true);
			} else {
				setIsSticky(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<>
			<div className={`${menuBg} hd-sec ${isSticky ? 'sticky-menu' : ''}`}>
				<div className={`${menuBg} container-fluid`}>
					<div className="row align-items-center">
						<div className="col-lg-3 col-md-3 col-5">
							<div className="logo">
								<Link to="/"><img src='https://akm-img-a-in.tosshub.com/sites/resources/campus/prod/img/logo/2023/5/logo1278308377935.png' alt="logo" /></Link>
							</div>
						</div>
						<div className="col-lg-7 d-none d-lg-block menu-center">
							<MenuItems />
						</div>

						<div className="col-lg-2 d-none d-lg-block apply-button-area">
							<div className="apply-button">
								<Link to="/contact#">Apply Now</Link>
							</div>
						</div>
						<div className="col-md-9 col-7 d-lg-none" >
							<div className="offcanvas-menu-area">
								<OffCanvasMenu />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MainMenu;
