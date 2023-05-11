/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

export const messRouter = createTRPCRouter({
  createUser: protectedProcedure.mutation(async ({ ctx }) => {
    const user = await ctx.prisma.user.findFirst({
      where: {
        userId: ctx.auth.userId,
      },
    });
    if (!user) {
      await ctx.prisma.user.create({
        data: {
          userId: ctx.auth.userId,
          name: ctx.auth.sessionClaims.username as string,
        },
      });
    }
    return user;
  }),
  addFriend: protectedProcedure
    .input(
      z.object({
        userId: z.string(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.prisma.user.findFirst({
        where: {
          userId: ctx.auth.userId,
        },
      });
      if (!user) {
        await ctx.prisma.user.create({
          data: {
            userId: ctx.auth.userId,
            name: ctx.auth.sessionClaims.username as string,
          },
        });
      }
      await ctx.prisma.user.findFirst({
        where: {
          friends: {
            some: {
              friendId: input.userId,
            },
          },
        },
      });
      await ctx.prisma.user.update({
        where: {
          userId: ctx.auth.userId,
        },
        data: {
          friends: {
            connect: {
              friendId: input.userId,
            },
          },
        },
      });
    }),
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany();
  }),
  getFriends: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.prisma.user.findFirst({
      where: {
        userId: ctx.auth.userId,
      },
      include: {
        friends: true,
      },
    });
    return user?.friends ?? [];
  }),
});

export type MessRouter = typeof messRouter;
