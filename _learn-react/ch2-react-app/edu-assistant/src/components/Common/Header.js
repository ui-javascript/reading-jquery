import React from 'react'
// import PropTypes from 'prop-types'
import { Menu, Icon } from 'antd'
import { Link } from 'dva/router'

function Header ({ location }) {
  return (
    <Menu
      // selectedKeys={[location.path]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />Home</Link>
      </Menu.Item>
      <Menu.Item key="/users">
        <Link to="/users"><Icon type="bars" />Users</Link>
      </Menu.Item>
      <Menu.Item key="/charts">
        <Link to="/charts"><Icon type="bar-chart" />Charts</Link>
      </Menu.Item>
      <Menu.Item key="/404">
        <Link to="/notfound"><Icon type="frown-circle" />404</Link>
      </Menu.Item>
    </Menu>
  )
}

// 校验类型
Header.propTypes = {
  // history: PropTypes.any,
}

export default Header
