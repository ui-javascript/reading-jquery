import dva from 'dva'
import './index.css'

const app = dva()
app.model(require('./models/users'))
app.model(require('./models/notfound'))
app.model(require('./models/charts'))

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

app.router(require('./router'))

app.start('#root')
