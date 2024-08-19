import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CIcon from '@coreui/icons-react'

import routes from '../../routes'
import NavItem from './NavItem'
import { uiAction } from '../../../store/slices/uiSlice'

const NavGroup = ({ name, icon, items }) => {
    const dispatch = useDispatch();
    const { navbarGroups } = useSelector((state) => state.ui);

    const router = useRouter();

    useEffect(() => {
        const route = routes.find((route) => route.name === name);
        let checkRoute = false;

        if (route) {
            checkRoute = router.asPath.startsWith(route.path);
        }

        dispatch(uiAction.navbarGroupToggle({ isActive: checkRoute, name: name }));
    }, [dispatch, router]);

    const onClickHandler = () => {
        const index = navbarGroups.findIndex(group => group.name === name);

        const data = navbarGroups[index];

        dispatch(uiAction.navbarGroupToggle({ isActive: !data.isActive, name: name }));
    }

    const { isActive } = navbarGroups.find(group => group.name === name);

    return <li className={`nav-group ${isActive ? 'show' : ''}`}>
        <a className="nav-link nav-group-toggle" onClick={onClickHandler}>
            <CIcon icon={icon} customClassName="nav-icon" />
            {name}
        </a>
        <ul className="nav-group-items">
            {
                items.map((nav, index) => (<NavItem key={index} href={nav.href} name={nav.name} />))
            }
        </ul>
    </li>
}

export default NavGroup;