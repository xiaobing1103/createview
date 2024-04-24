const koa = require("koa");
const Router = require("@koa/router");

const bodyParser = require("koa-bodyparser");

const app = new koa();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const router = new Router({
  prefix: "/users",
});
app.use(bodyParser());
// 查询用户列表
router.get("/", async (ctx) => {
  const { pageNum, pageSize } = ctx.query;
  const users = await prisma.user.findMany({
    where: {
      // 查询指定id批量用户
      // id: {
      //   in: [1, 20, 30],
      // },
    },
    // 查询分页列表
    skip: (pageNum - 1) * pageSize,
    take: parseInt(pageSize),
  });

  ctx.body = users;
});

// 查询单个用户
router.get("/:id", async (ctx) => {
  const id = parseInt(ctx.params.id);
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  ctx.body = user;
});
// 创建用户
router.post("/", async (ctx) => {
  const user = ctx.request.body;
  const newUser = await prisma.user.create({
    data: user,
  });
  ctx.body = newUser;
});

// 更新用户
router.patch("/:id", async (ctx) => {
  const id = parseInt(ctx.params.id);
  // console.log(id);
  const upDateUser = ctx.request.body;
  // console.log(upDateUser);
  const beforeUpdate = await prisma.user.update({
    where: {
      id,
    },
    data: upDateUser,
  });
  ctx.body = beforeUpdate;
});

// 删除用户
router.delete("/:id", async (ctx) => {
  const id = parseInt(ctx.params.id);
  const newUser = await prisma.user.delete({
    where: {
      id,
      // 批量删除
      // id: {
      //   in: [1, 20, 30],
      // lt 小于
      // gt 大于
      // le 小于等于
      // eq 等于
      // ne 不等于
      // ge 大于等于
      // },
    },
  });
  ctx.body = newUser;
});
// 注册路由中间件

router.post("");

// 注册路由中间件
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("服务器运行在 3000 端口");
});
