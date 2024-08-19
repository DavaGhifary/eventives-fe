import { useRouter } from 'next/router'
import Link from 'next/link'
import CIcon from '@coreui/icons-react'
import { CNavItem } from '@coreui/react'

import routes from '../../routes'

const NavItem = ({ href, name, icon }) => {
    const router = useRouter();

    const checkActive = () => {
        const route = routes.find((route) => route.name === name);

        if (route) {
            return route.path == router.asPath;
        }

        return false;
    }

    const navActive = checkActive();

    return <Link href={href}>
        <CNavItem href="#" active={navActive}>
            {icon && <CIcon icon={icon} customClassName="nav-icon" />}
            {name}
        </CNavItem>
    </Link>
}

export default NavItem;