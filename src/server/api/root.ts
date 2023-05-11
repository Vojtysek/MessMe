import { createTRPCRouter } from "~/server/api/trpc";
import { messRouter } from "~/server/api/routers/messRouter";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const messMeRouter = createTRPCRouter({
  messRouter: messRouter,
});

// export type definition of API
export type MessRouter = typeof messMeRouter;
