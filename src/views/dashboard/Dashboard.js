/* eslint-disable prettier/prettier */
import React, { lazy } from 'react'

import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'

const Carousel = lazy(() => import('../components/carousel/Carousel.js'))

// const WidgetsDropdown = lazy(() => import('../components/widgets/WidgetsDropdown.js'))
// const WidgetsBrand = lazy(() => import('../components/widgets/WidgetsBrand.js'))

const Dashboard = () => {

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>Dashboard</CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm={12}>
              <Carousel />
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard
