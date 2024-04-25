const Router = require("@koa/router");

const router = new Router({
  prefix: "/users",
});

const prisma = require("../prismaFile");

// 查询用户列表
router.get("/", async (ctx) => {
  const { pageNum, pageSize } = ctx.query;
  const users = await prisma.user.findMany({
    where: {
      // 查询指定id批量用户
      // id: {
      //   in: [1, 20, 30],
      // },
      // 查询指定id批量用户
      // id: {
      //   in: [1, 20, 30],
      // },
      // 查询大于等于50的数据
      // id: {
      //   gte: 50,
      // },
      // 查询名字模糊搜索
      name: {
        contains: "洋",
      },
    },

    // 限制搜索字段
    select: {
      name: true,
      email: true,
    },

    // 查询分页列表
    skip: (pageNum - 1) * pageSize,
    take: parseInt(pageSize),

    // asc 升序排序 a-z   desc : 降序排序 ,z-a
    orderBy: {
      email: "asc",
    },
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

module.exports = router;
