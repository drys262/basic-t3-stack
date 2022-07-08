import { createRouter } from "./context";

export const accountRouter = createRouter().query("getAll", {
  async resolve({ ctx }) {
    return await ctx.prisma.account.findMany();
  },
});
