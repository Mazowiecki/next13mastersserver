import type { MutationResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";

export const createOrderItem: NonNullable<
  MutationResolvers["createOrderItem"]
> = async (_parent, _arg, _ctx) => {
  return await prisma.order_item.create({
    data: {
      quantity: _arg.quantity,
      product: { connect: { id: _arg.productId } },
      order: { connect: { id: _arg.orderId } },
    },
  });
};
