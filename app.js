const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser')
const serve = require('koa-static');
// 引入路由分发
const router = require('./routes/index')
const config = require('./config')
const response = require('./middlewares/response')

// 使用响应处理中间件
app.use(serve('public')) //
  .use(response)
  .use(bodyParser())// 解析请求体
  .use(router.routes()) // 路由分发
  .use(router.allowedMethods())
  .listen(config.port, () => console.log(`listening on port ${config.port}`))
// 启动程序，监听端口