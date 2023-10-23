import type { MutationResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const updateOrder: NonNullable<
  MutationResolvers["updateOrder"]
> = async (_parent, _arg, _ctx) => {
  return await prisma.order.update({
    where: {
      id: _arg.id,
    },
    data: {
      status: _arg.status,
      orderItems: _arg.orderItems,
      userId: _arg.userId,
    },
  });
};
