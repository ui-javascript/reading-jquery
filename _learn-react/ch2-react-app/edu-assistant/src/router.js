import React from 'react'
import PropTypes from 'prop-types'
import { Router, Route } from 'dva/router'
import IndexPage from './routes/IndexPage'

import Users from './routes/Users'
import Charts from './routes/Charts'
import Notfound from './routes/NotFound'

function RouterConfig ({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users} />
      <Route path="/charts" component={Charts} />
      <Route path="*" component={Notfound} />
    </Router>
  )
}

// 校验类型
RouterConfig.propTypes = {
  history: PropTypes.any,
}

export default RouterConfig

// import React from 'react'
// // import PropTypes from 'prop-types'
// import { Router } from 'dva/router'

// const cached = {}
// function registerModel (app, model) {
//   if (!cached[model.namespace]) {
//     app.model(model)
//     cached[model.namespace] = 1
//   }
// }

// function RouterConfig ({ history, app }) {
//   const routes = [
//     {
//       path: '/',
//       name: 'IndexPage',
//       getComponent (nextState, cb) {
//         require.ensure([], (require) => {
//           cb(null, require('./routes/IndexPage'))
//         })
//       },
//     },
//     {
//       path: '/users',
//       name: 'UsersPage',
//       getComponent (nextState, cb) {
//         require.ensure([], (require) => {
//           registerModel(app, require('./models/users'))
//           cb(null, require('./routes/Users'))
//         })
//       },
//     },
//     {
//       path: '*',
//       name: 'NotFoundPage',
//       getComponent (nextState, cb) {
//         require.ensure([], (require) => {
//           registerModel(app, require('./models/notfound'))
//           cb(null, require('./routes/NotFound'))
//         })
//       },
//     },
//   ]

//   return <Router history={history} routes={routes} />
// }

// // 校验类型
// RouterConfig.propTypes = {
//   // history: PropTypes.any,
// }

// export default RouterConfig

