import dva from 'dva';
import './index.html';

import 'antd-mobile/dist/antd-mobile.min.css';
// require('antd-mobile/dist/antd-mobile.min.css')
import './index.css';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/produtList'));
app.model(require('./models/deviceData'));
app.model(require('./models/deviceList'));
app.model(require('./models/recordList'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
