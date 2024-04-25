const Router = require("@koa/router");
const prisma = require("../prismaFile");
const router = new Router({
  prefix: "/profile",
});

router.get("/", async (ctx) => {
  //   const { pageNum, pageSize } = ctx.query;
  const users = await prisma.profile.findMany({});

  ctx.body = users;
});

router.get("/:id", async (ctx) => {
  const id = parseInt(ctx.params.id);
  console.log(id);
  const user = await prisma.profile.findUnique({
    where: {
      userId: Number(id),
    },
  });
  ctx.body = user;
});

router.post("/", async (ctx) => {
  const profile = ctx.request.body;
  const newprofile = await prisma.profile.create({
    data: profile,
  });
  ctx.body = newprofile;
});

router.patch("/:id", async (ctx) => {
  const id = parseInt(ctx.params.id);
  const updateProfile = ctx.request.body;
  const beforeUpdate = await prisma.profile.update({
    where: {
      userId: id,
    },
    data: updateProfile,
  });
  ctx.body = beforeUpdate;
});

router.delete("/:id", async (ctx) => {
  const id = parseInt(ctx.params.id);
  const deleteProfile = await prisma.profile.delete({
    where: {
      userId: id,
    },
  });
  ctx.body = deleteProfile;
});

module.exports = router;
