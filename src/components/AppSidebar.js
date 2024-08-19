import { useSelector, useDispatch } from 'react-redux';
import {
	CSidebar,
	CSidebarBrand,
	CSidebarNav,
	CSidebarToggler,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import { AppSidebarNav } from './AppSidebarNav';
import { logoNegative } from '../../src/assets/brand/logo-negative';
// import logoFull from '../../src/assets/brand/logo.png';
import logoCircle from '../../src/assets/brand/logo_cyrcle.png';
import { sygnet } from '../../src/assets/brand/sygnet';

import { uiAction } from '../../store/slices/uiSlice';

import 'simplebar/dist/simplebar.min.css';

// sidebar nav config
import navigation from './_nav';

const AppSidebar = () => {
	const dispatch = useDispatch();
	const { sidebarShow, sidebarUnfoldable } = useSelector((state) => state.ui);

	const sidebarVisibleChange = (visible) => {
		if (sidebarShow != visible) {
			dispatch(uiAction.sidebarToggle({ visible: visible }));
		}
	};

	const sidebarVisibleUnfoldableChange = () => {
		dispatch(uiAction.sidebarUnfoldableToggle());
	};

	return (
		<CSidebar
			position="fixed"
			visible={sidebarShow}
			unfoldable={sidebarUnfoldable}
			onVisibleChange={sidebarVisibleChange}
		>
			<CSidebarBrand className="d-none d-md-flex" to="/">
				{/* <CIcon className="sidebar-brand-full" icon={logoFull} height={35} />
				<CIcon className="sidebar-brand-narrow" icon={logoCircle} height={35} /> */}
				<div className="sidebar-brand-full ms-4 flex-grow-1">
					<img src="/Logo.png" height="33" />
				</div>
				<img
					src="/logo_cyrcle.png"
					className="sidebar-brand-narrow"
					height="36"
				/>
			</CSidebarBrand>
			<CSidebarNav>
				<AppSidebarNav items={navigation} />
			</CSidebarNav>
			<CSidebarToggler
				className="d-none d-lg-flex"
				onClick={sidebarVisibleUnfoldableChange}
			/>
		</CSidebar>
	);
};

export default AppSidebar;
