import type { QueryResolvers } from "./../../../types.generated";
import { prisma } from "../../../../db";
export const orderItems: NonNullable<QueryResolvers["orderItems"]> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return await prisma.order_item.findMany({
    skip: _arg.offset,
    take: _arg.limit,
    include: {
      product: true,
    },
  });
};
