import type { MutationResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const updateOrderItem: NonNullable<
  MutationResolvers["updateOrderItem"]
> = async (_parent, _arg, _ctx) => {
  return await prisma.order_item.update({
    where: {
      id: _arg.id,
    },
    data: {
      quantity: _arg.quantity,
    },
  });
};
