/* eslint-disable prettier/prettier */
import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilSpeedometer,
  cilChart,
} from '@coreui/icons'
import {CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Details',
  },
  {
    component: CNavItem,
    name: 'Tables',
    to: '/tables',
    icon: <CIcon icon={cilChart} customClassName="nav-icon" />,
  },
]

export default _nav
