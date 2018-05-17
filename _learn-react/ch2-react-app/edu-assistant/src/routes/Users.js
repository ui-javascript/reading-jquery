import React from 'react'
import { connect } from 'dva'
import styles from './Users.css'
import MainLayout from '../components/Common/MainLayout'

function Users () {
  return (
    <MainLayout>
      <div className={styles.normal}>
        Route Component: Users
      </div>
    </MainLayout>
  )
}

function mapStateToProps () {
  return {}
}

export default connect(mapStateToProps)(Users)
