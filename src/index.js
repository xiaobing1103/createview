const koa = require("koa");

const bodyParser = require("koa-bodyparser");
const userRouter = require("./router/user");
const profileRouter = require("./router/profile");
const app = new koa();
// 注册路由中间件
app.use(bodyParser());
app.use(userRouter.routes()).use(userRouter.allowedMethods());
app.use(profileRouter.routes()).use(profileRouter.allowedMethods());

app.listen(3000, () => {
  console.log("服务器运行在 3000 端口");
});
