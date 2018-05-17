import React from 'react'
import { connect } from 'dva'
// import styles from './Charts.css'
import Charts from '../components/Charts/Charts'
import MainLayout from '../components/Common/MainLayout'

function ChartsPage () {
  return (
    <MainLayout>
      <Charts />
    </MainLayout>
  )
}

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(ChartsPage)
