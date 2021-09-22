/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Register = () => {
  // userform
  const { register, handleSubmit } = useForm()

  //on submit function
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <h1>Register</h1>
                <p className="text-medium-emphasis">Create your account</p>

                {/* pemanggilan onSubmit */}
                <CForm onSubmit={handleSubmit(onSubmit)}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    {/* regitrasi property */}
                    <CFormInput {...register('name')} placeholder="Enter your name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    {/* regitrasi property */}
                    <CFormInput {...register('email')} placeholder="Enter your email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    {/* regitrasi property */}
                    <CFormInput {...register('email')} placeholder="Enter your email" />
                  </CInputGroup>
                  <CInputGroup className="mb-4">
                    <CInputGroupText>
                      <CIcon icon={cilLockLocked} />
                    </CInputGroupText>
                    <CFormInput
                      {...register('password')}
                      type="password"
                      placeholder="Repeat password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>

                  <p style={{ color: '#2C384AF2' }}>
                    Already have account?{' '}
                    <Link to="/login" style={{ textDecoration: 'underline' }}>
                      Login here
                    </Link>
                  </p>
                  <div className="d-grid">
                    <CButton type="submit" color="success">
                      Create Account
                    </CButton>
                  </div>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
