import type { MutationResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

export const createOrder: NonNullable<
  MutationResolvers["createOrder"]
> = async (_parent, _arg, _ctx) => {
  return await prisma.order.create({
    data: {
      status: "PENDING",
      orderItem: _arg.orderItems,
      userId: _arg.userId,
    },
  });
};
