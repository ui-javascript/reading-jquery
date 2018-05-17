import React from 'react'
import { connect } from 'dva'
import MainLayout from '../components/Common/MainLayout'
import NotFoundComp from '../components/Common/NotFound'

function Notfound () {
  return (
    <MainLayout>
      <NotFoundComp />
    </MainLayout>
  )
}

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(Notfound)
