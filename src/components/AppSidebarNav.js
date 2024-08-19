import React from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'

import routes from '../routes'

import NavItem from './sidebar/NavItem'
import NavGroup from './sidebar/NavGroup'

export const AppSidebarNav = ({ items }) => {
  const navItem = (item, index) => {
    return <NavItem key={index} href={item.href} icon={item.icon} name={item.name} />;
  }

  const navGroup = (item, index) => {
    return <NavGroup key={index} id={index} name={item.name} icon={item.icon} items={item.items} />
  }

  return (
    <React.Fragment>
      {items &&
        items.map((item, index) => (item.type === 'item' ? navItem(item, index) : navGroup(item, index)))
      }
    </React.Fragment>
  )
}

AppSidebarNav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
}
